import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Star, Facebook, Instagram, Linkedin } from "lucide-react";
import logoMonogram from "@/assets/logo-monogram.svg";

const reviews = [
  {
    name: "Maria R.",
    text: "Professionalità e umanità rare. Mi ha guidata in un momento difficilissimo con grande competenza.",
    rating: 5,
  },
  {
    name: "Giuseppe L.",
    text: "Avvocato preparato e sempre disponibile. Consiglio vivamente lo studio per questioni familiari.",
    rating: 5,
  },
  {
    name: "Anna B.",
    text: "Esperienza eccellente. Ha risolto la mia pratica di divorzio con discrezione e risultati ottimi.",
    rating: 5,
  },
];

const Footer = () => (
  <footer className="relative overflow-hidden" id="contatti">
    {/* Top accent bar */}
    <div className="h-1 bg-gradient-to-r from-brand-accent-red via-brand-midnight to-brand-accent-red" />

    {/* Reviews band */}
    <div className="bg-brand-warm py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-2">Recensioni</p>
          <h3 className="text-lg md:text-xl font-serif font-bold text-brand-midnight">Cosa Dicono i Nostri Clienti</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card rounded-2xl p-6 premium-shadow hover:premium-shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent-red text-brand-accent-red" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
              <p className="text-brand-midnight font-semibold text-sm">— {r.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://g.page/r/studiolegaledivietro/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent-red hover:underline transition"
          >
            Lascia una recensione su Google
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="bg-brand-midnight pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img src={logoMonogram} alt="Monogramma Studio Legale Di Vietro" className="h-14 w-14 rounded-md" width={56} height={56} loading="lazy" />
              <h3 className="text-xl font-serif font-bold text-primary-foreground leading-tight">
                Studio Legale<br />Di Vietro
              </h3>
            </div>
            <p className="text-brand-smoke/80 mb-6 leading-relaxed text-sm">
              Consulenze legali per privati e famiglie nel settore del diritto civile con particolare attenzione verso il diritto di famiglia.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-brand-smoke hover:bg-brand-accent-red hover:border-brand-accent-red hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6 uppercase text-sm tracking-[0.15em]">Studio</h4>
            <div className="space-y-4 text-brand-smoke/80 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-brand-accent-red" strokeWidth={1.5} />
                <div>
                  <p>Via Guglielmo Marconi, 70/C</p>
                  <p>20813 Bovisio Masciago (MB)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-brand-accent-red" strokeWidth={1.5} />
                <a href="tel:+390362590859" className="hover:text-primary-foreground transition">+39 0362 590859</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-brand-accent-red" strokeWidth={1.5} />
                <a href="mailto:info@studiolegaledivietro.it" className="hover:text-primary-foreground transition break-all">info@studiolegaledivietro.it</a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6 uppercase text-sm tracking-[0.15em]">Servizi</h4>
            <nav className="space-y-3 text-brand-smoke/80 text-sm">
              <Link className="block hover:text-brand-accent-red transition" to="/separazioni">Separazioni</Link>
              <Link className="block hover:text-brand-accent-red transition" to="/divorzi">Divorzi</Link>
              <Link className="block hover:text-brand-accent-red transition" to="/affido-figli">Affido Figli</Link>
              <Link className="block hover:text-brand-accent-red transition" to="/diritto-persone">Diritto delle Persone</Link>
              <Link className="block hover:text-brand-accent-red transition" to="/diritto-civile">Diritto Civile</Link>
            </nav>
          </div>

          {/* More links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6 uppercase text-sm tracking-[0.15em]">Info</h4>
            <nav className="space-y-3 text-brand-smoke/80 text-sm">
              <Link className="block hover:text-brand-accent-red transition" to="/chi-sono">Chi Sono</Link>
              <Link className="block hover:text-brand-accent-red transition" to="/blog">Blog</Link>
              <Link className="block hover:text-brand-accent-red transition" to="/contatti">Contatti</Link>
            </nav>
            <p className="text-brand-smoke/50 text-xs mt-6">P.IVA: 04755410968</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-smoke/60 gap-4">
          <p>© {new Date().getFullYear()} Studio Legale Di Vietro. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary-foreground transition" href="#">Privacy Policy</a>
            <a className="hover:text-primary-foreground transition" href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
