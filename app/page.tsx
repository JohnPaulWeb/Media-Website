import Image from "next/image";
import Navbar from "./components/client/Navbar";
import Hero from "./components/client/Hero";
import Stats from "./components/client/Stats";
import Properties from "./components/client/Properties";
import GlobalNetwork from "./components/client/GlobalNetwork";
import Services from "./components/client/Services";
import Contact from "./components/client/Contact";
import BackToTop from "./components/client/BackToTop";
import Footer from "./components/client/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Stats />
        <Properties />
        <GlobalNetwork />
        <Services />
        <Contact />
        <BackToTop />
      </main>
      <Footer />
    </>
  );
}
