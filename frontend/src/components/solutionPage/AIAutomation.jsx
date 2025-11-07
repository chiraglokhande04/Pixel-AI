export default function AIAutomation() {
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
