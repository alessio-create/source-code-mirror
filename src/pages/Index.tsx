import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import WhatICanDoSection from "@/components/WhatICanDoSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import MethodSection from "@/components/MethodSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-brand-ivory">
    <Header />
    <HeroSection />
    <SocialProofBar />
    <WhatICanDoSection />
    <ProblemsSection />
    <SolutionSection />
    <MethodSection />
    <AboutSection />
    <TrustSection />
    <FAQSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
