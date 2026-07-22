import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import WorkSection from "@/components/WorkSection";
import WhyUsSection from "@/components/WhyUsSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import FloatingElements from"@/components/FloatingElements";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeSection />
        <WorkSection />
        <ProblemsSection />
        <SolutionsSection />
        <WhyUsSection />
        <FinalCtaSection />
        <FloatingElements />
      </main>
      <Footer />
    </>
  );
}
