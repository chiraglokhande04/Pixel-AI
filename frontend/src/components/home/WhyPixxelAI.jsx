import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyPixxelAI() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const reasons = [
    {
      title: "Unified Expertise",
      desc: "Rare blend of enterprise engineering + AI intelligence under one roof — no fragmented vendors or half-baked integrations.",
      icon: "🎯"
    },
    {
      title: "Outcome-Driven Delivery",
      desc: "We don't ship code for the sake of delivery — we engineer measurable business impact tied to KPIs and ROI.",
      icon: "📊"
    },
    {
      title: "Enterprise-Grade Standards",
      desc: "Security, compliance, architecture discipline and long-term maintainability baked into every engagement.",
      icon: "🔒"
    },
    {
      title: "Future-Proof Innovation",
      desc: "Systems designed to evolve — modular, scalable, AI-ready and adaptable to tomorrow's business needs.",
      icon: "🚀"
    },
  ];

  const highlights = [
    "Engineering + AI under one strategic partner",
    "Architectures built for 5–10+ year scale",
    "Zero vendor lock-in — transparent engineering",
    "Measurable impact, not 'hours billed' culture",
    "Enterprise security + compliance mindset"
  ];

  return (
    <section className="bg-gray-950 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Why <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-indigo-600">PixxelAI</span>?
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            If you're looking for just another software vendor — we're not for you.  
            We partner only where we can create <span className="text-indigo-400 font-semibold">strategic, long-term impact</span> through intelligent engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
          {/* Left: Reasons */}
          <div className="space-y-6">
            {reasons.map((item, i) => (
              <div 
                key={i} 
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-indigo-600/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-linear-to-br from-indigo-600 to-indigo-700 flex items-center justify-center text-2xl shrink-0 shadow-lg shadow-indigo-600/30 group-hover:shadow-indigo-600/50 transition-shadow">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Card */}
          <div className="lg:sticky lg:top-24" data-aos="fade-left" data-aos-delay="250">
            <div className="relative bg-linear-to-br from-gray-900 to-gray-950 border border-indigo-600/30 rounded-2xl p-10 shadow-2xl shadow-indigo-600/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-t-2xl" />
              <div className="absolute -inset-px bg-linear-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 rounded-2xl blur opacity-50 -z-10" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8" data-aos="fade-left" data-aos-delay="350">
                  <div className="h-10 w-1 bg-linear-to-b from-indigo-600 to-purple-600 rounded-full" />
                  <h3 className="text-white text-3xl font-bold">The Difference You Get</h3>
                </div>

                <div className="space-y-5">
                  {highlights.map((item, i) => (
                    <div 
                      key={i}
                      data-aos="fade-left"
                      data-aos-delay={400 + i * 120}
                      className="flex items-start gap-4 group cursor-default"
                    >
                      <div className="mt-0.5">
                        <svg 
                          className="w-6 h-6 text-indigo-500 group-hover:text-indigo-400 transition-colors" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2.5} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-800" data-aos="fade-up" data-aos-delay="850">
                  <p className="text-indigo-400 font-semibold text-center text-lg">
                    Engineering Excellence. Measurable Results.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
