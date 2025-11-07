import { ArrowRight, Briefcase, DollarSign, ShoppingCart, Factory, Zap, Building } from "lucide-react";

const INDUSTRIES = [
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    blurb:
      "Clinical intelligence, document digitization (ICD/HL7), personalized care, and claims automation.",
    bullets: ["Clinical decision support", "Document & knowledge graphs", "Claims automation"],
    icon: Briefcase,
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    slug: "finance",
    title: "Finance & Insurance",
    blurb:
      "Risk analytics, fraud detection, automated underwriting, and portfolio intelligence.",
    bullets: ["Risk & fraud analytics", "Automated claims/underwriting", "Market intelligence"],
    icon: DollarSign,
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    slug: "retail",
    title: "Retail & E-commerce",
    blurb: "Personalization, demand forecasting, and lifecycle retention analytics.",
    bullets: ["Recommendations", "Dynamic pricing & demand", "Segmentation & retention"],
    icon: ShoppingCart,
    gradient: "from-pink-500/20 to-rose-500/10",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Supply Chain",
    blurb: "Predictive maintenance, quality vision, and end-to-end supply visibility.",
    bullets: ["Predictive maintenance", "Logistics optimization", "Computer vision QA"],
    icon: Factory,
    gradient: "from-orange-500/20 to-amber-500/10",
  },
  {
    slug: "energy",
    title: "Energy & Utilities",
    blurb: "Forecasting, optimization, asset monitoring, and sustainability analytics.",
    bullets: ["Smart grid forecasting", "Asset monitoring", "Sustainability analytics"],
    icon: Zap,
    gradient: "from-yellow-500/20 to-green-500/10",
  },
  {
    slug: "government",
    title: "Government & Public Sector",
    blurb: "Citizen platforms, policy intelligence, and smart city management.",
    bullets: ["Citizen service automation", "Policy/urban planning intel", "Smart city ops"],
    icon: Building,
    gradient: "from-purple-500/20 to-indigo-500/10",
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-gray-950 text-white">
      {/* Hero */}
     <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-size-[26px_26px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Industries <span className="text-indigo-500">We Serve</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            AI-driven, enterprise-grade solutions tailored to sector-specific challenges and outcomes.
          </p>
        </div>
      </section>

      {/* Short intro */}
      <section className="bg-slate-100 text-gray-900 py-10 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl text-gray-700">
            We blend <span className="font-semibold">engineering precision</span> with{" "}
            <span className="font-semibold">adaptive AI</span> to deliver measurable impact across
            regulated and high-scale industries.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((it, idx) => {
              const Icon = it.icon;
              return (
                <a
                  key={it.slug}
                  href={`/industries/${it.slug}`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 
                           bg-linear-to-br from-gray-900/80 to-gray-900/40 
                           hover:border-indigo-500/50 hover:shadow-[0_0_40px_-8px_rgba(79,70,229,0.5)]
                           transition-all duration-500 cursor-pointer
                           animate-[fadeInScale_0.6s_ease-out_forwards] opacity-0
                           hover:scale-[1.02]"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-linear-to-br ${it.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Base content */}
                  <div className="relative p-8 min-h-60 flex flex-col">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 
                                    flex items-center justify-center
                                    group-hover:bg-indigo-500/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/30
                                    transition-all duration-300">
                        <Icon className="w-7 h-7 text-indigo-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                      {it.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed flex-1">
                      {it.blurb}
                    </p>
                  </div>

                  {/* Slide-up reveal */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="bg-linear-to-br from-indigo-600 to-indigo-700 backdrop-blur-sm px-8 py-6 border-t border-indigo-400/30">
                      <ul className="text-sm text-white space-y-2.5">
                        {it.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3 animate-[slideInRight_0.4s_ease-out_forwards]" style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}>
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Learn more</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-20">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 border-2 border-white text-white 
                       px-8 py-4 rounded-full text-base font-semibold 
                       hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.6)]
                       transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Talk to an Industry Expert</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}