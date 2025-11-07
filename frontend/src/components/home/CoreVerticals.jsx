import { useState } from "react";
import { ArrowRight, Code2, Brain, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoreVerticals() {
  const [active, setActive] = useState("enterprise");

  const tabs = [
    { id: "enterprise", label: "Enterprise Software", icon: Code2 },
    { id: "ai", label: "AI & Automation", icon: Brain },
  ];

  const content = {
    enterprise: {
      title: "Enterprise Software Engineering",
      desc: "Scalable, secure, and modern digital platforms engineered for complex business operations.",
      points: [
        { text: "Custom Web & Cloud Applications", badge: "Cloud-Native" },
        { text: "System Integration & APIs", badge: "Seamless" },
        { text: "Architecture & Modernization", badge: "Future-Ready" },
      ],
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    ai: {
      title: "AI & Intelligent Automation",
      desc: "AI-powered systems that learn, automate, and optimize business workflows with decision intelligence.",
      points: [
        { text: "AI Agents & Workflow Automation", badge: "Intelligent" },
        { text: "Document & Data Intelligence", badge: "Smart" },
        { text: "Predictive & Generative AI", badge: "Advanced" },
      ],
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
    },
  };

  const tab = content[active];

  return (
    <section className="bg-linear-to-b from-slate-50 to-slate-100 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            <span>What We Deliver</span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="120"
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-5"
          >
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Verticals
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 leading-relaxed"
          >
            Two high-impact verticals that combine to build intelligent, future-ready enterprises.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((t, i) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                data-aos="fade-up"
                data-aos-delay={250 + i * 120}
                onClick={() => setActive(t.id)}
                className={`group relative px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 flex items-center gap-3
                  ${
                    active === t.id
                      ? "bg-linear-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/30 scale-105"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-md"
                  }`}
              >
                <Icon size={20} className={active === t.id ? "animate-pulse" : ""} />
                <span>{t.label}</span>
                {active === t.id && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-600 rotate-45" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div
          data-aos="fade-up"
          data-aos-delay="350"
          className={`relative bg-linear-to-br ${tab.bgGradient} border-2 border-white rounded-3xl p-10 md:p-12 shadow-2xl transition-all duration-500`}
        >
          <div className={`absolute -inset-0.5 bg-linear-to-r ${tab.gradient} rounded-3xl blur-sm opacity-20 -z-10`} />

          <div className="relative bg-white rounded-2xl p-8 md:p-10">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {tab.title}
              </h3>
              <div className={`h-1.5 w-24 bg-linear-to-r ${tab.gradient} rounded-full`} />
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-8">
              {tab.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tab.points.map((point, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={450 + i * 120}
                  className="group relative bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`absolute -top-3 -left-3 w-8 h-8 bg-linear-to-r ${tab.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {i + 1}
                  </div>

                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 bg-linear-to-r ${tab.gradient} text-white text-xs font-semibold rounded-full`}>
                      {point.badge}
                    </span>
                  </div>

                  <p className="text-gray-800 font-semibold text-base leading-snug">
                    {point.text}
                  </p>

                  <div className={`mt-4 h-1 w-0 group-hover:w-full bg-linear-to-r ${tab.gradient} rounded-full transition-all duration-300`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div data-aos="zoom-in" data-aos-delay="450" className="flex justify-center mt-12">
          <Link
            to="/solutions"
            className="group relative inline-flex items-center gap-3 bg-linear-to-r from-indigo-600 to-indigo-700 text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-600/40 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">Explore Core Verticals</span>
            <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
