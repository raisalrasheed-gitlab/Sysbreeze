import Hero from "@/components/Ui/Hero/hero";
import ServicesSection from "@/components/Services/ServicesSection";
import TrainingSection from "@/components/Training/TrainingSection";
import WhySysbreeze from "@/components/WhySysbreeze/WhySysbreeze";
import AboutUs from "@/components/Ui/AboutUs/AboutUs";
import InspirationQuote from "@/components/Ui/InspirationQuote/InspirationQuote";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      {/* <ServicesSection />
      <TrainingSection />
      <WhySysbreeze /> */}
      {/* <InspirationQuote /> */}

      {/* Footer / Copyright section */}
      <footer className="py-12 bg-black border-t border-white/5 text-center">
        <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase font-bold">
          © 2026 SYSBREEZE TECHNOLOGIES. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
