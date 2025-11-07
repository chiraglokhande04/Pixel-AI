import HeroSection from "../components/about/HeroSection";
import AboutUs from "../components/about/AboutUs";
import Philosophy from "../components/about/Philosophy";
import EngagementModels from "../components/about/EngagementModels";
import TechStack from "../components/about/TechStack";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Vision from "../components/about/Vision";
import BottomCTA from "../components/BottomCTA";

export default function AboutPage() {
  return (
    <div className="bg-gray-950 text-white">
      <HeroSection />
      <AboutUs />
      <Philosophy />
      <EngagementModels />
      <TechStack />
      <WhyChooseUs />
      <Vision />
      <BottomCTA />
    </div>
  );
}






