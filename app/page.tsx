import { Metadata } from 'next';
import Hero from "@/components/Ui/Hero/hero";
import ServicesSection from "@/components/Services/ServicesSection";
import WorksSection from "@/components/Works/WorksSection";
import TrainingSection from "@/components/Training/TrainingSection";
import AboutUs from "@/components/Ui/AboutUs/AboutUs";
import Testimonials from "@/components/Ui/Testimonials/Testimonials";

export const metadata: Metadata = {

  title: "Sysbreeze Technologies | IT Services, Digital Marketing & Training Institute",

  description:
    "Sysbreeze Technologies provides business consulting, IT services, digital marketing, HR solutions, website development and professional training programs. Grow your business with expert solutions.",

  keywords: [
    "IT services",
    "digital marketing services",
    "website development",
    "training institute",
    "business consulting",
    "HR services",
    "mobile app development"
  ],

  openGraph: {
    title: "Sysbreeze Technologies | IT Services & Training",

    description:
      "Professional IT services, digital marketing and training programs to grow your business and career."
  }

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
