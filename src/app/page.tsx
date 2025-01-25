import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Features from "./components/features";
import Download from "./components/download";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="w-[80%] mx-auto">
      <Navbar />
      <HeroSection />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}
