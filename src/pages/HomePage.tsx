import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProofBand from "../components/ProofBand";
import Services from "../components/Services";
import DemoShowcase from "../components/DemoShowcase";
import Packages from "../components/Packages";
import Process from "../components/Process";
import Results from "../components/Results";
import BookingCTA from "../components/BookingCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProofBand />
      <Services />
      <DemoShowcase />
      <Packages />
      <Process />
      <Results />
      <BookingCTA />
      <Contact />
      <Footer />
    </div>
  );
}
