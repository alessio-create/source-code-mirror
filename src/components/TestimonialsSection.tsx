const testimonials = [
  {
    text: "Donatella mi ha guidata in una separazione difficile con una calma incredibile. Mi sono sentita protetta e ascoltata fin dal primo giorno.",
    initial: "L",
    name: "Laura B.",
  },
  {
    text: "Professionista seria e molto onesta. Ha saputo gestire il conflitto per l'affido dei figli evitando inutili guerre e cercando il loro bene.",
    initial: "M",
    name: "Marco T.",
  },
  {
    text: "In un momento di grande confusione, l'Avvocato Di Vietro ha portato chiarezza. Eccellente supporto tecnico e grande umanità.",
    initial: "S",
    name: "Silvia R.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl text-brand-darkBlue mb-4 font-serif">Cosa dice chi si è affidato a me</h2>
        <p className="text-brand-soft italic">Testimonianze di chi ha superato un momento difficile</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-brand-light p-8 rounded-2xl italic text-brand-blue">
            <p className="mb-6">"{t.text}"</p>
            <div className="not-italic flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-soft rounded-full flex items-center justify-center text-primary-foreground font-bold">
                {t.initial}
              </div>
              <span className="font-semibold text-brand-darkBlue">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
