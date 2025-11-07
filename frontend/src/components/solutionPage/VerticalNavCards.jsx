import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ArrowRight, Building2, Sparkles } from "lucide-react";

export default function VerticalNavCards() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });
  }, []);

  const cards = [
    {
      id: "enterprise-section",
      title: "Enterprise Software Solutions",
      desc: "Modern, scalable, secure platforms architected for mission-critical enterprise operations.",
      icon: Building2,
      gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
      accentColor: "indigo",
    },
    {
      id: "ai-section",
      title: "AI & Intelligent Automation",
      desc: "Autonomous systems, AI agents, and data intelligence that automate and amplify business execution.",
      icon: Sparkles,
      gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
      accentColor: "purple",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 relative">
      {/* Decorative connecting line */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 
        bg-linear-to-b from-transparent via-indigo-500/30 to-transparent hidden md:block"
      />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <button
              key={i}
              onClick={() => scrollToSection(c.id)}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="group relative overflow-hidden rounded-2xl p-8 text-left border border-white/10 
                         bg-linear-to-br from-white/5 to-white/2 backdrop-blur-md 
                         hover:border-indigo-500/50 hover:shadow-[0_0_30px_-2px_rgba(79,70,229,0.4)] 
                         transition-all duration-500 cursor-pointer
                         hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Gradient on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${c.gradient} opacity-0 
                group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                                transition-transform duration-1000 bg-linear-to-r 
                                from-transparent via-white/5 to-transparent" />
              </div>

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${
                    c.accentColor === "indigo"
                      ? "from-indigo-500/20 to-indigo-600/5 border-indigo-500/20 group-hover:shadow-indigo-500/30"
                      : "from-purple-500/20 to-purple-600/5 border-purple-500/20 group-hover:shadow-purple-500/30"
                  } border flex items-center justify-center 
                    group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      c.accentColor === "indigo" ? "text-indigo-400" : "text-purple-400"
                    } group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white 
                               group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                  {c.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mt-3 leading-relaxed max-w-md">
                  {c.desc}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold mt-6 
                               group-hover:gap-3 transition-all duration-300">
                  <span className="relative">
                    Explore
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 
                                   group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Corner accents */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-indigo-500/10 to-transparent 
                rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-purple-500/10 to-transparent 
                rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
