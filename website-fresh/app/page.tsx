import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Process />
        <Services />
        <Benefits />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
