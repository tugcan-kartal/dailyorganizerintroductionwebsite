import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Features from "./components/features";

export default function Home() {
  return (
    <div className="w-[80%] mx-auto">
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  );
}
