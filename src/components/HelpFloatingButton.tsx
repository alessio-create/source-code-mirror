import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
const AUTH = `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`;

const INITIAL_MESSAGE: Msg = {
  role: "assistant",
  content:
    "Scrivi un messaggio",
};

const parseRgb = (s: string): { r: number; g: number; b: number; a: number } | null => {
  const m = s.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const p = m[1].split(",").map((v) => parseFloat(v.trim()));
  if (p.length < 3 || p.some((n) => Number.isNaN(n))) return null;
  return { r: p[0], g: p[1], b: p[2], a: p.length >= 4 ? p[3] : 1 };
};

const luminance = (r: number, g: number, b: number) =>
  (0.299 * r + 0.587 * g + 0.114 * b) / 255;

const HelpFloatingButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const detect = () => {
      const btn = buttonRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const prev = btn.style.pointerEvents;
      btn.style.pointerEvents = "none";
      const els = document.elementsFromPoint(cx, cy);
      btn.style.pointerEvents = prev;
      let lum = 1;
      for (const el of els) {
        if (el === btn || btn.contains(el)) continue;
        const cs = getComputedStyle(el as Element);
        const bgImg = cs.backgroundImage;
        if (bgImg && bgImg !== "none") {
          lum = 0.2;
          break;
        }
        const rgb = parseRgb(cs.backgroundColor);
        if (rgb && rgb.a > 0.1) {
          lum = luminance(rgb.r, rgb.g, rgb.b);
          break;
        }
      }
      setIsDark(lum < 0.5);
    };
    detect();
    const onScroll = () => detect();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const id = window.setInterval(detect, 600);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const send = async () => {
    const text = input.trim();
    if (!text || isLoading) return;
    const userMsg: Msg = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setIsLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: AUTH },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (resp.status === 429) {
        setMessages((m) => [...m, { role: "assistant", content: "Troppe richieste, riprovi tra poco." }]);
        return;
      }
      if (resp.status === 402) {
        setMessages((m) => [...m, { role: "assistant", content: "Servizio temporaneamente non disponibile." }]);
        return;
      }
      if (!resp.ok || !resp.body) throw new Error("stream error");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let assistant = "";
      let started = false;
      let done = false;

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (delta) {
              assistant += delta;
              if (!started) {
                started = true;
                setMessages((m) => [...m, { role: "assistant", content: assistant }]);
              } else {
                setMessages((m) =>
                  m.map((msg, i) => (i === m.length - 1 ? { ...msg, content: assistant } : msg)),
                );
              }
            }
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Si è verificato un errore. Riprovi più tardi." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const check = () => {
      const el = document.getElementById("numeri-studio");
      if (!el) {
        setVisible(true);
        return;
      }
      const rect = el.getBoundingClientRect();
      setVisible(rect.bottom < 0);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            data-floating-help
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 right-4 z-[60] w-[120px] h-[120px]"
          >
        <button
          ref={buttonRef}
          onClick={() => setOpen((o) => !o)}
          aria-label="Apri chat assistente"
          className="relative flex items-center justify-center w-full h-full group"
        >
          <span
            className="relative flex items-center justify-center w-[72px] h-[72px] rounded-full shadow-[0_14px_30px_-12px_hsl(var(--brand-midnight)/0.55)] transition-[background-color,color] duration-500 group-hover:scale-105"
            style={{
              backgroundColor: isDark && !open ? "hsl(var(--brand-ivory))" : "hsl(var(--brand-midnight))",
              color: isDark && !open ? "hsl(var(--brand-smoke))" : "hsl(var(--brand-ivory))",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="msg"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          {!open && (
            <span
              role="tooltip"
              className="pointer-events-none absolute right-[88px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full text-xs px-3.5 py-2 shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-300"
              style={{
                backgroundColor: isDark ? "hsl(var(--brand-ivory))" : "hsl(var(--brand-midnight))",
                color: isDark ? "hsl(var(--brand-midnight))" : "hsl(var(--brand-ivory))",
              }}
            >
              Serve aiuto? Prenota un colloquio
              <span
                className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45"
                style={{ backgroundColor: isDark ? "hsl(var(--brand-ivory))" : "hsl(var(--brand-midnight))" }}
              />
            </span>
          )}
        </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[140px] right-4 z-[60] w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[calc(100vh-160px)] bg-brand-ivory border border-brand-midnight/15 rounded-2xl shadow-[0_24px_60px_-20px_hsl(var(--brand-midnight)/0.45)] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-brand-midnight/10 bg-brand-midnight text-brand-ivory">
              <div>
                <p className="font-serif text-base leading-tight">Assistente Studio Di Vietro</p>
                <p className="text-[11px] text-brand-ivory/70 mt-0.5">Risposte indicative · Non sostituisce un parere legale</p>
              </div>
            </div>

            <div ref={scrollRef} data-lenis-prevent className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-brand-midnight text-brand-ivory rounded-br-sm"
                        : "bg-brand-garden/60 text-brand-midnight rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-brand-garden/60 text-brand-midnight rounded-2xl rounded-bl-sm px-4 py-2.5">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="border-t border-brand-midnight/10 p-3 flex items-center gap-2 bg-brand-ivory"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Scrivi un messaggio…"
                className="flex-1 bg-transparent border border-brand-midnight/20 rounded-full px-4 py-2 text-sm text-brand-midnight placeholder:text-brand-midnight/40 focus:outline-none focus:border-brand-midnight/50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="shrink-0 w-10 h-10 rounded-full bg-brand-midnight text-brand-ivory flex items-center justify-center disabled:opacity-40 transition-opacity"
                aria-label="Invia"
              >
                <Send className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HelpFloatingButton;
