import Image from "next/image";
import Navbar from "./components/client/Navbar";
import Hero from "./components/client/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
      </main>
    </>
  );
}
