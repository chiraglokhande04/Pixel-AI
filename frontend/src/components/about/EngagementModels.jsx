export default function EngagementModels() {
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
        <h2 className="text-3xl md:text-4xl font-bold">Engagement <span className="text-indigo-500">Models</span></h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((m, i) => (
            <div key={i} className="rounded-xl bg-gray-900/40 border border-white/10 p-7 hover:border-indigo-500 transition">
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
