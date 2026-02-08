import Hero from "@/components/Ui/Hero/hero";
import ServicesSection from "@/components/Services/ServicesSection";
import TrainingSection from "@/components/Training/TrainingSection";
import WhySysbreeze from "@/components/WhySysbreeze/WhySysbreeze";
import AboutUs from "@/components/Ui/AboutUs/AboutUs";
import WorksSection from "@/components/Works/WorksSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      <ServicesSection />
      <TrainingSection />
      <WorksSection />
      {/* <WhySysbreeze /> */}



    </main>
  );
}
