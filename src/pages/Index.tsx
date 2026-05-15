import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofBar from "@/components/SocialProofBar";
import WhatICanDoSection from "@/components/WhatICanDoSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import MethodSection from "@/components/MethodSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quando è opportuno rivolgersi a un avvocato?",
      acceptedAnswer: { "@type": "Answer", text: "È consigliabile contattare un avvocato specializzato in diritto di famiglia non appena si presenta una situazione di conflitto o incertezza nei rapporti familiari." },
    },
    {
      "@type": "Question",
      name: "Come scegliere un buon avvocato divorzista?",
      acceptedAnswer: { "@type": "Answer", text: "Cerca un professionista specializzato esclusivamente in diritto di famiglia, che dimostri competenza tecnica e capacità di ascolto ed empatia." },
    },
    {
      "@type": "Question",
      name: "Quali sono i costi per una separazione o un divorzio?",
      acceptedAnswer: { "@type": "Answer", text: "I costi variano a seconda che la procedura sia consensuale o giudiziale. Nel primo colloquio forniamo un preventivo dettagliato e trasparente." },
    },
    {
      "@type": "Question",
      name: "Quanto tempo richiede una pratica di divorzio?",
      acceptedAnswer: { "@type": "Answer", text: "Con il Divorzio Breve i tempi sono ridotti: una procedura consensuale può concludersi in pochi mesi, una giudiziale richiede tempi più lunghi." },
    },
  ],
};

const Index = () => (
  <div className="bg-brand-ivory">
    <SEO
      title="Avv. Di Vietro — Diritto di Famiglia Milano e Brianza"
      description="Assistenza legale esperta e umana per separazioni, divorzi e affido figli. Oltre 20 anni di esperienza a Milano e Bovisio-Masciago."
      path="/"
      jsonLd={faqJsonLd}
    />
    <Header />
    <HeroSection />
    <ServicesSection />
    <SocialProofBar />
    <WhatICanDoSection />
    <ProblemsSection />
    <SolutionSection />
    <MethodSection />
    <AboutSection />
    <TrustSection />
    <BlogSection />
    <FAQSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
