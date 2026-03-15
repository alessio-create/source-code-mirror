import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-brand-light">
    <Header />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <TestimonialsSection />
    <FAQSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
