import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EngagementModels() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });
  }, []);

  const models = [
    {
      title: "End-to-End Ownership",
      desc: "We take full responsibility — from product, engineering, data, AI, and platform — delivering outcomes, not just code.",
    },
    {
      title: "Co-Build with Your Team",
      desc: "Our senior engineers and architects work alongside your team to accelerate delivery and uplift engineering maturity.",
    },
    {
      title: "Advisory & Modernization",
      desc: "Architecture reviews, AI adoption strategy, platform upgrades, and transformation roadmaps for scale.",
    },
  ];

  return (
    <section className="bg-gray-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 
          className="text-3xl md:text-4xl font-bold"
          data-aos="fade-up"
        >
          Engagement <span className="text-indigo-500">Models</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((m, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="rounded-xl bg-gray-900/40 border border-white/10 p-7 
                         hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 
                         transition-all duration-300"
            >
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
