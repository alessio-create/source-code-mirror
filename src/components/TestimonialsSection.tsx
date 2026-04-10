const testimonials = [
  {
    text: "Donatella mi ha guidata in una separazione difficile con una calma incredibile. Mi sono sentita protetta e ascoltata fin dal primo giorno.",
    initial: "L",
    name: "Laura B.",
    role: "Cliente — Separazione consensuale",
  },
  {
    text: "Professionista seria e molto onesta. Ha saputo gestire il conflitto per l'affido dei figli evitando inutili guerre e cercando il loro bene.",
    initial: "M",
    name: "Marco T.",
    role: "Cliente — Affido minori",
  },
  {
    text: "In un momento di grande confusione, l'Avvocato Di Vietro ha portato chiarezza. Eccellente supporto tecnico e grande umanità.",
    initial: "S",
    name: "Silvia R.",
    role: "Cliente — Diritto di famiglia",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-brand-midnight relative overflow-hidden">
    {/* Subtle texture */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--brand-smoke)) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, hsl(var(--brand-smoke)) 0%, transparent 50%)`
    }} />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="text-center mb-20">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Testimonianze</p>
        <h2 className="text-4xl md:text-5xl text-primary-foreground mb-4">
          Cosa dice chi si è affidato a noi
        </h2>
        <p className="text-brand-smoke italic text-lg">Storie di chi ha superato un momento difficile</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card/5 backdrop-blur-sm border border-primary-foreground/10 p-8 rounded-2xl">
            {/* Quote mark */}
            <svg className="w-8 h-8 text-brand-smoke/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z"/>
            </svg>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8 italic">{t.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-brand-smoke/30 rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {t.initial}
              </div>
              <div>
                <span className="font-semibold text-primary-foreground block">{t.name}</span>
                <span className="text-brand-smoke text-sm">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
