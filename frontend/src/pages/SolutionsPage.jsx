

import HeroSection from "../components/solutionPage/HeroSection";
import VerticalNavCards from "../components/solutionPage/VerticalNavCards";
import EnterpriseSoftware from "../components/solutionPage/EnterpriseSoftware";
import AIAutomation from "../components/solutionPage/AIAutomation";
import BottomCTA from "../components/BottomCTA";

export default function SolutionsPage() {
  return (
    <div className="bg-gray-950 text-white scroll-smooth">
      <HeroSection />
      <VerticalNavCards />
      
      {/* Sections */}
      <div id="enterprise-section">
        <EnterpriseSoftware />
      </div>

      <div id="ai-section">
        <AIAutomation />
      </div>

      <BottomCTA />
    </div>
  );
}
