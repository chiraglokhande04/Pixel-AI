import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CoreVerticals() {
  const [active, setActive] = useState("enterprise");

  const tabs = [
    { id: "enterprise", label: "Enterprise Software" },
    { id: "ai", label: "AI & Automation" },
  ];

  const content = {
    enterprise: {
      title: "Enterprise Software Engineering",
      desc: "Scalable, secure, and modern digital platforms engineered for complex business operations.",
      points: [
        "Custom Web & Cloud Applications",
        "System Integration & APIs",
        "Architecture & Modernization",
      ],
    },
    ai: {
      title: "AI & Intelligent Automation",
      desc: "AI-powered systems that learn, automate, and optimize business workflows with decision intelligence.",
      points: [
        "AI Agents & Workflow Automation",
        "Document & Data Intelligence",
        "Predictive & Generative AI",
      ],
    },
  };

  const tab = content[active];

  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Core <span className="text-indigo-600">Verticals</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Two high-impact verticals that combine to build intelligent, future-ready enterprises.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition
                ${
                  active === t.id
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm transition-all text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">{tab.title}</h3>
          <p className="text-gray-600 mt-3 max-w-2xl">{tab.desc}</p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-sm">
            {tab.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-indigo-600 text-lg leading-none mt-0.5">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <a
            href="/solutions"
            className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 
            px-7 py-3 rounded-full text-sm font-medium transition hover:bg-indigo-600 
            hover:text-white hover:border-indigo-600"
          >
            Explore Core Verticals <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
