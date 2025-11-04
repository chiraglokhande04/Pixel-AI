function WhyOurSolutionsWork() {
  const pillars = [
    {
      title: "Engineered for Outcomes",
      desc: "Every solution is tied to measurable business KPIs — efficiency, cost reduction, revenue impact, or experience uplift.",
    },
    {
      title: "Architecture First, Not Feature First",
      desc: "We don’t patch systems — we design scalable, modular foundations built to evolve for 5–10+ years.",
    },
    {
      title: "AI + Engineering Synergy",
      desc: "We unify enterprise engineering, data systems, and AI models so systems don't just function — they learn and self-optimize.",
    },
    {
      title: "Zero Vendor Lock-In",
      desc: "Transparent engineering with open standards, giving you control over your tech — not dependence on us.",
    },
  ];

  return (
    <section className="bg-gray-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Why Our Solutions <span className="text-indigo-500">Work</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Proven delivery principles that ensure long-term value, stability, and transformative impact — not temporary wins.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900/40 border border-white/5 hover:border-indigo-500 
              hover:shadow-[0_0_20px_-4px_#4f46e5] transition-all rounded-xl p-7 text-left"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyOurSolutionsWork;