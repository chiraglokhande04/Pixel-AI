import { useState } from "react";

export default function SolutionsTabs() {
  const tabs = [
    { key: "automation", label: "Automation & AI Agents" },
    { key: "data", label: "Data & Intelligence" },
    { key: "enterprise", label: "Enterprise Systems" },
    { key: "cloud", label: "Cloud & Modernization" },
    { key: "cx", label: "CX & Digital Experience" },
  ];

  const suites = {
    automation: [
      {
        title: "Autonomous Operations Suite",
        desc: "AI-driven multi-agent automation for repetitive workflows, approvals, and business operations.",
        link: "/solutions/automation-ai-agents",
      },
      {
        title: "AI Workforce & Digital Assistants",
        desc: "Deploy AI agents for support, onboarding, customer service, and internal productivity.",
        link: "/solutions/automation-ai-agents",
      },
    ],
    data: [
      {
        title: "Intelligent Document & Data Processing",
        desc: "Automated extraction, classification, validation, and structuring of unstructured data.",
        link: "/solutions/data-intelligence",
      },
      {
        title: "Enterprise Decision Intelligence",
        desc: "Real-time analytics, predictions, and insights powering data-driven decisions at scale.",
        link: "/solutions/data-intelligence",
      },
    ],
    enterprise: [
      {
        title: "Enterprise Workflow & Systems",
        desc: "Custom enterprise-grade platforms tailored to complex business processes and scalability.",
        link: "/solutions/enterprise-systems",
      },
    ],
    cloud: [
      {
        title: "Cloud & Infrastructure Modernization",
        desc: "Cloud migration, DevOps automation, scalability engineering, and modernization roadmaps.",
        link: "/solutions/cloud-modernization",
      },
    ],
    cx: [
      {
        title: "AI-Powered Customer Experience",
        desc: "Personalization, customer insight systems, and AI-driven journey optimization for CX growth.",
        link: "/solutions/cx-digital-experience",
      },
    ],
  };

  const [active, setActive] = useState("automation");

  return (
    <section id="solutions-tabs" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Explore Our <span className="text-indigo-500">Solutions</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300 text-center max-w-3xl mx-auto">
          Purpose-built solution suites engineered to increase efficiency, intelligence, and scalability.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mt-12 gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition 
                ${
                  active === tab.key
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div key={active} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {suites[active].map((suite, i) => (
            <a
              key={i}
              href={suite.link}
              className="group bg-gray-900/40 border border-white/5 hover:border-indigo-500 
              hover:shadow-[0_0_20px_-4px_#4f46e5] transition-all rounded-xl p-7 block"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition">
                {suite.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{suite.desc}</p>
              <p className="mt-4 text-indigo-400 text-sm font-medium group-hover:underline">
                Learn More →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

