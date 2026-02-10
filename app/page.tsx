import Hero from "@/components/Ui/Hero/hero";
import ServicesSection from "@/components/Services/ServicesSection";
import TrainingSection from "@/components/Training/TrainingSection";
import WhySysbreeze from "@/components/WhySysbreeze/WhySysbreeze";
import AboutUs from "@/components/Ui/AboutUs/AboutUs";
import WorksSection from "@/components/Works/WorksSection";
import Footer from "@/components/Ui/Footer/Footer";
import { ScrollVelocity } from "@/components/ScrollVelocity/ScrollVelocity";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      {/* <div className="relative z-10 w-full mt-16 md:mt-24 space-y-2 md:space-y-4 opacity-90 grayscale grayscale-0 transition-all duration-700">
        <ScrollVelocity
          texts={["BRANDING | DIGITAL MARKETING | HR MANAGEMENT | WEBSITE DESIGN | ECOMMERCE DEVELOP | MOBILE APPLICATION"]}
          velocity={30}
          className="scroller-text text-white"
          parallaxStyle={{ backgroundColor: 'black', padding: '15px 0' }}
        />
        <ScrollVelocity
          texts={["HR | DIGITAL MARKETING | PYTHON FULLSTACK | MERN STACK | DATA SCIENCE | MACHINE LEARNING | MOBILE APPLICATION"]}
          velocity={-30}
          className="scroller-text text-white"
          parallaxStyle={{ backgroundColor: 'black', padding: '15px 0' }}
        />
      </div> */}
      <ServicesSection />
      <TrainingSection />
      <WorksSection />
      <Footer />
      {/* <WhySysbreeze /> */}
    </main>
  );
}
