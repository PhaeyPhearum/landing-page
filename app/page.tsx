import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import WorkSection from "@/components/WorkSection";
import WhyUsSection from "@/components/WhyUsSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <ProblemsSection />
        <SolutionsSection />
        <WhyUsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
