import { useState } from "react";

export default function CoreVerticals() {
  const [active, setActive] = useState("enterprise");

  const tabs = [
    { id: "enterprise", label: "Enterprise Software" },
    { id: "ai", label: "AI & Automation" },
  ];

  const content = {
    enterprise: {
      title: "Enterprise Software Engineering",
      desc: "Modern, scalable, and secure digital platforms engineered for mission-critical business operations.",
      points: [
        "Custom Web, Mobile & Cloud Applications",
        "Architecture Design & Modernization",
        "System Integration & API Ecosystems",
        "Cloud-Native Platforms & DevOps Automation",
        "Enterprise Consulting & Delivery",
      ],
    },
    ai: {
      title: "AI & Intelligent Automation",
      desc: "AI-driven systems that learn, adapt, and automate complex workflows with decision intelligence.",
      points: [
        "Autonomous AI Agents & Workflows",
        "Document & Data Intelligence",
        "Predictive & Generative AI Solutions",
        "RAG, Knowledge Graphs & Domain LLMs",
        "MLOps & Continuous Model Optimization",
      ],
    },
  };

  const tab = content[active];

  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our Core <span className="text-indigo-500">Verticals</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Two high-impact verticals that work together to build intelligent, future-ready enterprises.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition
              ${active === t.id ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-10 md:p-12 transition-all">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">{tab.title}</h3>
          <p className="text-gray-400 mt-3 max-w-3xl">{tab.desc}</p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm">
            {tab.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-indigo-500 text-lg leading-none mt-0.5">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
