
import { ArrowRight } from "lucide-react";

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

/* ---------------------- HERO ---------------------- */
function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient + grid overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-size-[26px_26px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Core <span className="text-indigo-500">Verticals</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Two powerful verticals that combine engineering excellence with intelligence — transforming how modern enterprises operate, scale, and innovate.
        </p>
      </div>
    </section>
  );
}

/* ---------------------- SPLIT NAV CARDS ---------------------- */
function VerticalNavCards() {
  const cards = [
    {
      id: "enterprise-section",
      title: "Enterprise Software Solutions",
      desc: "Modern, scalable, secure platforms architected for mission-critical enterprise operations.",
    },
    {
      id: "ai-section",
      title: "AI & Intelligent Automation",
      desc: "Autonomous systems, AI agents, and data intelligence that automate and amplify business execution.",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(c.id)}
            className="group relative overflow-hidden rounded-2xl p-8 text-left border border-white/10 bg-white/5 backdrop-blur-md 
                       hover:border-indigo-500 hover:shadow-[0_0_25px_-2px_rgba(79,70,229,0.6)] transition-all cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition" />
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition">
              {c.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2 max-w-sm">{c.desc}</p>
            <span className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium mt-6 group-hover:underline">
              Explore <ArrowRight size={15} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ---------------------- ENTERPRISE SOFTWARE SECTION ---------------------- */
function EnterpriseSoftware() {
  const offerings = [
    "Custom Web, Mobile & Cloud Applications",
    "Enterprise Workflow & Line-of-Business Systems",
    "Data Engineering & Analytics Platforms",
    "System Integration & API Ecosystems",
    "Cloud Architecture, DevOps & Modernization",
  ];

  const impacts = [
    { k: "40–65%", v: "Fewer Ops Costs" },
    { k: "3–5X", v: "Faster Release Cycles" },
    { k: "99.95%", v: "System Uptime" },
  ];

  return (
    <section className="bg-[#0f1320] py-28 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Tag */}
        <p className="text-indigo-400 font-medium uppercase tracking-wide">Vertical 01</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Enterprise <span className="text-indigo-500">Software Solutions</span>
        </h2>
        <p className="mt-5 text-lg text-gray-300 max-w-4xl">
          We engineer scalable, secure enterprise systems built with strong architecture foundations designed
          for long-term evolution — not short-term patchwork.
        </p>

        {/* Offerings */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 border border-white/10 p-6 text-gray-300 hover:border-indigo-500 hover:shadow-[0_0_20px_-4px_#4f46e5] transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Business Impact */}
        <h3 className="text-2xl font-semibold mt-14">Business Impact</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {impacts.map((m, i) => (
            <div
              key={i}
              className="rounded-xl bg-indigo-600/10 border border-indigo-500/40 p-6 text-center"
            >
              <div className="text-3xl font-bold text-indigo-400">{m.k}</div>
              <div className="text-sm text-gray-300 mt-1">{m.v}</div>
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <h3 className="text-2xl font-semibold mt-14">Why It Matters</h3>
        <ul className="mt-6 space-y-4">
          {[
            "Robust architecture enables faster innovation & reduced maintenance cost",
            "Modern systems integrate seamlessly with AI & automation later",
            "Improves security, performance, maintainability, and compliance posture",
          ].map((point, i) => (
            <li key={i} className="flex gap-3 text-gray-300 text-sm">
              <span className="text-indigo-500">•</span> {point}
            </li>
          ))}
        </ul>

        {/* Back to Top */}
        <div className="mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-indigo-400 hover:text-indigo-300 underline"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- AI + AUTOMATION SECTION ---------------------- */
function AIAutomation() {
  const capabilities = [
    "AI Agents & Autonomous Workflows",
    "Document & Data Intelligence (LLM + Vision)",
    "Predictive Models & Decision Intelligence",
    "Retrieval Augmented Generation (RAG) & Knowledge Graphs",
    "Enterprise LLMs (Fine-Tuned + Guardrails)",
    "MLOps, Monitoring & Continuous Learning",
  ];

  const impacts = [
    { k: "60–85%", v: "Manual Workload Automated" },
    { k: "5–10X", v: "Faster Knowledge Access" },
    { k: "35–50%", v: "Ops Cost Reduction" },
  ];

  return (
    <section className="bg-[#11172a] py-28 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Tag */}
        <p className="text-purple-400 font-medium uppercase tracking-wide">Vertical 02</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          AI & <span className="text-purple-500">Intelligent Automation</span>
        </h2>
        <p className="mt-5 text-lg text-gray-300 max-w-4xl">
          We build AI-driven systems that automate operations, enhance decision-making, and create
          self-improving business processes through intelligence embedded at every layer.
        </p>

        {/* Capabilities */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 border border-white/10 p-6 text-gray-300 hover:border-purple-500 hover:shadow-[0_0_20px_-4px_rgba(168,85,247,0.6)] transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Business Impact */}
        <h3 className="text-2xl font-semibold mt-14">Business Impact</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {impacts.map((m, i) => (
            <div
              key={i}
              className="rounded-xl bg-purple-600/10 border border-purple-500/40 p-6 text-center"
            >
              <div className="text-3xl font-bold text-purple-400">{m.k}</div>
              <div className="text-sm text-gray-300 mt-1">{m.v}</div>
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <h3 className="text-2xl font-semibold mt-14">Why It Matters</h3>
        <ul className="mt-6 space-y-4">
          {[
            "AI eliminates repetitive work and accelerates execution",
            "Cognitive systems learn and improve over time",
            "Connects data, people, processes, and decisions together intelligently",
          ].map((point, i) => (
            <li key={i} className="flex gap-3 text-gray-300 text-sm">
              <span className="text-purple-500">•</span> {point}
            </li>
          ))}
        </ul>

        {/* Back to Top */}
        <div className="mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-purple-400 hover:text-purple-300 underline"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- CTA ---------------------- */
function BottomCTA() {
  return (
    <section className="bg-slate-100 text-gray-900 py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold">
          Ready to combine <span className="text-indigo-600">Engineering</span> and{" "}
          <span className="text-purple-600">AI</span> for next-level growth?
        </h3>
        <p className="mt-3 text-gray-700">
          We’ll architect, modernize, and activate AI across your business with measurable outcomes.
        </p>
        <a
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium transition hover:bg-indigo-600"
        >
          Book a Strategy Call <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

