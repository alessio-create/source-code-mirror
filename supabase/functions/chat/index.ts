import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Sei l'assistente virtuale dello Studio Legale Avv. Donatella Di Vietro, studio specializzato in diritto di famiglia con sede a Bovisio Masciago (MB).

LINEE GUIDA:
- Rispondi sempre in italiano, con tono personale, diretto, professionale ed empatico.
- Non fornire pareri legali vincolanti: orienta l'utente e invita a un colloquio per casi specifici.
- Se la domanda esce dall'ambito dello studio, riconducila gentilmente ai temi trattati o invita al contatto.
- Mantieni risposte concise (max 4-6 frasi) salvo richiesta esplicita di approfondimento.
- Quando opportuno, suggerisci di prenotare un primo colloquio o visitare la pagina /contatti.

INFORMAZIONI SULLO STUDIO:
- Avvocato: Donatella Di Vietro
- Specializzazioni: diritto di famiglia, separazioni (consensuali e giudiziali), divorzi (anche divorzio breve), affidamento dei figli, diritto delle persone, diritto civile.
- Sede: studio in Bovisio Masciago (Monza e Brianza). Gestione agevole delle pratiche presso i tribunali competenti.
- Approccio: ascolto, empatia, competenza tecnica, tutela dei minori, soluzioni su misura per ogni famiglia.
- Primo colloquio: orientativo, con preventivo trasparente in base alla complessità del caso.

FAQ DI RIFERIMENTO:
- Quando rivolgersi a un avvocato? Appena emerge un conflitto o incertezza nei rapporti familiari: una consulenza tempestiva tutela meglio diritti e minori.
- Come scegliere un buon avvocato divorzista? Cercare uno specializzato esclusivamente in diritto di famiglia, con competenza ed empatia.
- Costi separazione/divorzio? Variano tra procedura consensuale e giudiziale; preventivo trasparente al primo colloquio.
- Tempi divorzio? Con il Divorzio Breve la consensuale può chiudersi in pochi mesi; la giudiziale dipende dai tempi del tribunale.

PAGINE DEL SITO:
/ (home), /separazioni, /divorzi, /affido-figli, /diritto-persone, /diritto-civile, /chi-sono, /blog, /contatti.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY non configurata");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Troppe richieste, riprova tra poco." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Crediti AI esauriti." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Errore del servizio AI" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Errore" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
