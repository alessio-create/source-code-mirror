import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  { icon: Phone, label: "Telefono", value: "0362 590859", href: "tel:+390362590859" },
  { icon: Mail, label: "Email", value: "info@divietroavvocato.it", href: "mailto:info@divietroavvocato.it" },
  { icon: MapPin, label: "Studio", value: "Bovisio Masciago (MB)", href: "#" },
  { icon: Clock, label: "Orari", value: "Lun-Ven 9:00 - 18:00", href: "#" },
];

const ContattiPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <Header />

    <section className="pt-32 pb-20 bg-brand-midnight text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--brand-smoke)) 0%, transparent 70%)` }} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-brand-smoke hover:text-brand-accent-red transition-colors mb-8 text-sm font-medium">
            ← Torna alla home
          </Link>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-4">Contattaci</p>
          <h1 className="text-4xl md:text-6xl leading-tight mb-6">Contatti</h1>
          <p className="text-brand-smoke text-lg md:text-xl max-w-2xl leading-relaxed">
            Prenota una consulenza gratuita e riservata. Il primo passo verso la soluzione è una semplice conversazione.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-8">Parliamo della tua situazione</h2>
            <p className="text-brand-smoke text-lg leading-relaxed mb-10">
              Ogni caso merita attenzione e riservatezza. Contattami per fissare un primo colloquio informativo, senza impegno. Sono qui per ascoltarti e guidarti verso la soluzione migliore.
            </p>
            <div className="space-y-6">
              {contactInfo.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-5 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-14 h-14 bg-brand-accent-red/10 flex items-center justify-center rounded-xl group-hover:bg-brand-accent-red transition-colors duration-300">
                    <c.icon className="w-6 h-6 text-brand-accent-red group-hover:text-card transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-smoke">{c.label}</p>
                    <p className="text-lg font-semibold text-brand-midnight group-hover:text-brand-accent-red transition-colors">{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/390000000000"
              className="mt-10 inline-flex items-center gap-3 bg-whatsapp text-primary-foreground px-8 py-4 rounded-md text-base font-semibold hover:opacity-90 transition btn-transition"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Scrivimi su WhatsApp
            </motion.a>
          </motion.div>

          {/* Map / Office visual */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col">
              <div className="p-8 flex-1 flex flex-col justify-center text-center">
                <div className="w-20 h-20 bg-brand-accent-red/10 flex items-center justify-center rounded-full mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-brand-accent-red" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-3">Studio Legale Di Vietro</h3>
                <p className="text-brand-smoke leading-relaxed mb-2">Bovisio Masciago (MB)</p>
                <p className="text-brand-smoke text-sm">Provincia di Monza e Brianza</p>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-brand-smoke text-sm mb-2">Competenza territoriale</p>
                  <p className="text-brand-midnight font-medium">Tribunale di Monza · Corte d'Appello di Milano</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ContattiPage;
