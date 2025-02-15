import { Metadata } from "next";
import AboutHero from "../components/client/AboutHero";
import Footer from "../components/client/Footer";
import Navbar from "../components/client/Navbar";
import OurMission from "../components/client/OurMission";
import TeamSection from "../components/client/TeamSection";
import Testimonials from "../components/client/Testimonials";


export const metadata: Metadata = {
  title: "Ayanokoji Kiyotaka",
  description: 
  "Learn about to study, you need to focus, just read"
}

export default function AboutPage() {

    return (
        <>
          <Navbar />

          <main>
            <AboutHero />
            <OurMission />
            <TeamSection />
            <Testimonials />
          </main>

          <Footer />
        
        </>
    )

}