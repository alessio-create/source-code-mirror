import { Users, CreditCard, Heart } from "lucide-react";

const services = [
  {
    id: "separazioni",
    icon: Users,
    title: "Separazioni",
    description: "Un percorso delicato gestito con equilibrio, cercando soluzioni consensuali per ridurre lo stress emotivo.",
  },
  {
    id: "divorzi",
    icon: CreditCard,
    title: "Divorzi",
    description: "Assistenza legale per la definizione definitiva dei rapporti patrimoniali e personali con rigore e attenzione.",
  },
  {
    id: "affido",
    icon: Heart,
    title: "Affido Figli",
    description: "La tutela dei minori è la mia priorità assoluta. Garantisco che l'interesse del bambino rimanga al centro.",
  },
];

const ServicesSection = () => (
  <section className="section-padding bg-card" id="servizi">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl text-brand-midnight mb-4">Competenza e Umanità</h2>
        <div className="w-20 h-1 bg-brand-smoke mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="p-8 border border-border rounded-xl hover:shadow-xl transition duration-300 group"
          >
            <div className="w-12 h-12 bg-brand-garden flex items-center justify-center rounded-lg mb-6 group-hover:bg-brand-midnight transition">
              <s.icon className="w-6 h-6 text-brand-midnight group-hover:text-primary-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-brand-midnight mb-4">{s.title}</h3>
            <p className="text-brand-smoke mb-6">{s.description}</p>
            <a className="text-brand-midnight font-semibold inline-flex items-center gap-2 hover:text-brand-smoke transition" href="#">
              Scopri di più
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
