import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-brand-midnight pt-20 pb-8" id="contatti">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-6">
            Studio Legale<br />Di Vietro
          </h3>
          <p className="text-brand-smoke mb-6 leading-relaxed">
            Consulenze legali per privati e famiglie nel settore del diritto civile con particolare attenzione verso il diritto di famiglia.
          </p>
          <p className="text-brand-smoke text-sm">P.IVA: 04755410968</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-6 uppercase text-sm tracking-[0.15em]">Studio</h4>
          <div className="space-y-4 text-brand-smoke">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p>Via Guglielmo Marconi, 70/C</p>
                <p>20813 Bovisio Masciago (MB)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              <a href="tel:+390362590859" className="hover:text-primary-foreground transition">+39 0362 590859</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              <a href="mailto:info@studiolegaledivietro.it" className="hover:text-primary-foreground transition break-all">info@studiolegaledivietro.it</a>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-6 uppercase text-sm tracking-[0.15em]">Link Rapidi</h4>
          <nav className="space-y-3 text-brand-smoke">
            <Link className="block hover:text-primary-foreground transition" to="/separazioni">Separazioni</Link>
            <Link className="block hover:text-primary-foreground transition" to="/divorzi">Divorzi</Link>
            <Link className="block hover:text-primary-foreground transition" to="/affido-figli">Affido Figli</Link>
            <Link className="block hover:text-primary-foreground transition" to="/chi-sono">Chi Sono</Link>
            <Link className="block hover:text-primary-foreground transition" to="/blog">Blog</Link>
            <Link className="block hover:text-primary-foreground transition" to="/contatti">Contatti</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-smoke gap-4">
        <p>© {new Date().getFullYear()} Studio Legale Di Vietro. Tutti i diritti riservati.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary-foreground transition" href="#">Privacy Policy</a>
          <a className="hover:text-primary-foreground transition" href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
