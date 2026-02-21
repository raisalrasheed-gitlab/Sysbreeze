import { Metadata } from 'next';
import Hero from "@/components/Ui/Hero/hero";
import ServicesSection from "@/components/Services/ServicesSection";
import WorksSection from "@/components/Works/WorksSection";
import TrainingSection from "@/components/Training/TrainingSection";
import AboutUs from "@/components/Ui/AboutUs/AboutUs";
import Testimonials from "@/components/Ui/Testimonials/Testimonials";

export const metadata: Metadata = {
  title: "Sysbreeze | Business Consulting, IT Services & Training",
  description: "Sysbreeze is a future-focused business consulting, IT services, and training company dedicated to helping brands grow, businesses scale, and professionals build real-world skills.",
};


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      <ServicesSection />
      <WorksSection />
      <TrainingSection />
      <Testimonials />
    </main>
  );
}
