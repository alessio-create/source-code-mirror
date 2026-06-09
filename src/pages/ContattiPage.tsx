import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BrandIcon from "@/components/BrandIcon";
import SEO from "@/components/SEO";

const contactInfo = [
  { icon: "telefono" as const, label: "Telefono", value: "0362 590859", href: "tel:+390362590859" },
  { icon: "email" as const, label: "Email", value: "info@studiolegaledivietro.it", href: "mailto:info@studiolegaledivietro.it" },
  { icon: "studio" as const, label: "Studio", value: "Bovisio Masciago (MB)", href: "#" },
  { icon: "aggiornamento" as const, label: "Orari", value: "Lun-Ven 9:00 - 18:00", href: "#" },
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Inserisci nome e cognome" })
    .max(100, { message: "Massimo 100 caratteri" }),
  email: z
    .string()
    .trim()
    .email({ message: "Indirizzo email non valido" })
    .max(255, { message: "Massimo 255 caratteri" }),
  phone: z
    .string()
    .trim()
    .min(6, { message: "Numero di telefono non valido" })
    .max(20, { message: "Numero troppo lungo" })
    .regex(/^[0-9+()\s.-]+$/, { message: "Solo cifre e caratteri ammessi (+, -, spazio)" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Descrivi brevemente la tua situazione (almeno 10 caratteri)" })
    .max(2000, { message: "Massimo 2000 caratteri" }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Devi accettare il trattamento dei dati per inviare il messaggio" }),
  }),
});

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

const STUDIO_ADDRESS = "Via Guglielmo Marconi, 70/C, 20813 Bovisio Masciago MB";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(STUDIO_ADDRESS)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STUDIO_ADDRESS)}`;

const ContattiPage = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormState, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactFormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Controlla i campi evidenziati");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://hook.eu2.make.com/lcd39z6vfd799apn12hvmemnfpq4jakv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          message: result.data.message,
          consent: result.data.consent,
          submittedAt: new Date().toISOString(),
          source: "studiolegaledivietro.it/contatti",
        }),
      });

      if (!response.ok) {
        throw new Error(`Errore invio (${response.status})`);
      }

      toast.success("Richiesta inviata", {
        description: "Ti ricontatterò entro 24 ore lavorative.",
      });
      setForm({ name: "", email: "", phone: "", message: "", consent: false });
    } catch (err) {
      console.error("Contact form submission failed:", err);
      toast.error("Invio non riuscito", {
        description: "Riprova tra qualche istante o scrivi a info@divietroavvocato.it.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full bg-transparent border-0 border-b border-brand-midnight/25 px-0 py-3 text-base text-brand-midnight placeholder:text-brand-midnight/40 focus:outline-none focus:border-brand-midnight focus:ring-0 transition-colors";
  const labelBase =
    "block text-[11px] font-medium uppercase tracking-[0.2em] text-brand-midnight/70 mb-2";
  const errorBase = "mt-2 text-xs text-brand-midnight/80 italic";

  return (
    <div className="bg-brand-ivory min-h-screen">
      <SEO
        title="Contatti — Prenota una Consulenza | Avv. Di Vietro"
        description="Prenota una consulenza riservata con l'Avv. Donatella Di Vietro. Studio a Bovisio-Masciago (MB), risposta entro 24h."
        path="/contatti"
      />
      <Header />
      <PageHero
        label="Contattaci"
        title="Contatti"
        description="Prenota una consulenza riservata. Il primo passo verso la soluzione è una semplice conversazione."
        stat={{ value: "24h", label: "Tempo medio\ndi risposta" }}
        testimonial={{
          text: "Ho scritto di lunedì e il mercoledì ero già in studio per la consulenza. Efficienza e disponibilità che non mi aspettavo da un avvocato.",
          author: "Paolo T.",
          role: "Primo contatto, Cesano Maderno",
          rating: 5,
        }}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Info column */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-6">Parliamone</p>
              <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-brand-midnight tracking-[-0.02em] leading-[1.05] text-balance mb-8">
                Raccontami la tua <em className="not-italic font-semibold">situazione</em>.
              </h2>
              <p className="text-brand-midnight/75 text-base leading-relaxed mb-12">
                Ogni caso merita attenzione e riservatezza. Compila il modulo per fissare un primo
                colloquio informativo: ti risponderò personalmente entro 24 ore lavorative.
              </p>

              <div className="space-y-6 border-t border-brand-midnight/15 pt-10">
                {contactInfo.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-5 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="w-12 h-12 bg-brand-garden/60 flex items-center justify-center rounded-lg group-hover:bg-brand-midnight transition-colors duration-300 text-brand-midnight group-hover:text-brand-ivory shrink-0">
                      <BrandIcon name={c.icon} size={26} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-brand-midnight/60 font-medium">
                        {c.label}
                      </p>
                      <p className="text-base font-medium text-brand-midnight">{c.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-card border border-brand-midnight/15 p-8 md:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  <div className="md:col-span-2">
                    <label htmlFor="name" className={labelBase}>
                      Nome e cognome
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Come ti chiami"
                      className={inputBase}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className={errorBase}>{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelBase}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="nome@email.it"
                      className={inputBase}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className={errorBase}>{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelBase}>
                      Telefono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+39 333 1234567"
                      className={inputBase}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <p className={errorBase}>{errors.phone}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className={labelBase}>
                      Descrivi brevemente la tua situazione
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      maxLength={2000}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Raccontami il contesto e cosa stai cercando…"
                      className={`${inputBase} resize-none`}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className={errorBase}>{errors.message}</p>}
                  </div>

                  <div className="md:col-span-2 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <span className="relative shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => update("consent", e.target.checked)}
                          className="peer sr-only"
                          aria-invalid={!!errors.consent}
                        />
                        <span className="block w-5 h-5 border border-brand-midnight/40 peer-checked:bg-brand-midnight peer-checked:border-brand-midnight peer-focus-visible:ring-2 peer-focus-visible:ring-brand-midnight/40 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-brand-ivory transition-colors" />
                        <svg
                          className="absolute inset-0 w-5 h-5 text-brand-ivory opacity-0 peer-checked:opacity-100 transition-opacity p-0.5 pointer-events-none"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm text-brand-midnight/75 leading-relaxed">
                        Ho letto l'<a href="#" className="underline underline-offset-2 hover:text-brand-midnight">informativa privacy</a> e acconsento al trattamento dei miei dati personali per essere ricontattato in merito alla richiesta. *
                      </span>
                    </label>
                    {errors.consent && <p className={errorBase}>{errors.consent}</p>}
                  </div>

                  <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? "Invio in corso…" : "Invia richiesta"}
                    </button>
                    <p className="text-xs text-brand-midnight/55">
                      I campi sono tutti obbligatori. Risposta entro 24h lavorative.
                    </p>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-8">
              <p className="eyebrow mb-6">Lo studio</p>
              <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-brand-midnight tracking-[-0.02em] leading-[1.05] text-balance">
                Bovisio Masciago, <em className="not-italic font-semibold">Monza Brianza</em>.
              </h2>
              <p className="text-brand-midnight/75 text-base leading-relaxed mt-6 max-w-xl">
                Via Guglielmo Marconi, 70/C, facilmente raggiungibile da Monza, Milano e tutta la Brianza.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Apri in Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            className="border border-brand-midnight/15 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <iframe
              title="Mappa Studio Legale Di Vietro"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-[420px] md:h-[520px] block grayscale-[20%] contrast-[0.95]"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContattiPage;
