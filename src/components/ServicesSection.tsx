import { Users, Scale, Heart, Briefcase, ShieldCheck } from "lucide-react";

const services = [
  {
    id: "separazioni",
    icon: Users,
    title: "Separazioni e Divorzi",
    description: "Assistenza legale nelle procedure di separazione consensuale e giudiziale, divorzio e negoziazione assistita. Gestiamo ogni fase con equilibrio e riservatezza.",
  },
  {
    id: "affido",
    icon: Heart,
    title: "Diritto dei Minori",
    description: "La tutela dei minori è la nostra priorità assoluta. Affidamento, collocamento e regolamentazione dei rapporti genitori-figli nel superiore interesse del bambino.",
  },
  {
    id: "famiglia",
    icon: Scale,
    title: "Diritto di Famiglia",
    description: "Consulenza legale completa per le questioni legate ai rapporti familiari fra coniugi e fra genitori e figli, inclusa la costituzione di famiglie di fatto.",
  },
  {
    id: "persone",
    icon: ShieldCheck,
    title: "Diritto delle Persone",
    description: "Tutela della persona in tutte le sue forme: amministrazione di sostegno, interdizione, inabilitazione e tutela dei diritti fondamentali.",
  },
  {
    id: "civile",
    icon: Briefcase,
    title: "Diritto Civile",
    description: "Consulenza e assistenza legale nelle controversie civilistiche, con particolare attenzione alle questioni patrimoniali e successorie connesse al diritto di famiglia.",
  },
];

const ServicesSection = () => (
  <section className="section-padding bg-card relative" id="servizi">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-20">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Aree di competenza</p>
        <h2 className="text-4xl md:text-5xl mb-6">Competenza e Umanità</h2>
        <p className="text-brand-smoke text-lg max-w-2xl mx-auto">
          Per lo studio legale Di Vietro ogni cliente è importante. Offriamo servizi legali di qualità specifici per ogni caso e necessità.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="p-8 bg-card border border-border rounded-xl hover:premium-shadow-lg transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-midnight scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="w-12 h-12 bg-brand-ivory flex items-center justify-center rounded-lg mb-6 group-hover:bg-brand-midnight transition-colors duration-300">
              <s.icon className="w-5 h-5 text-brand-midnight group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl mb-4">{s.title}</h3>
            <p className="text-brand-smoke leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
