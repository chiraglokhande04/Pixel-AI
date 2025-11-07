export default function WhyPixxelAI() {
  const reasons = [
    {
      title: "Unified Expertise",
      desc: "Rare blend of enterprise engineering + AI intelligence under one roof — no fragmented vendors or half-baked integrations.",
    },
    {
      title: "Outcome-Driven Delivery",
      desc: "We don’t ship code for the sake of delivery — we engineer measurable business impact tied to KPIs and ROI.",
    },
    {
      title: "Enterprise-Grade Standards",
      desc: "Security, compliance, architecture discipline and long-term maintainability baked into every engagement.",
    },
    {
      title: "Future-Proof Innovation",
      desc: "Systems designed to evolve — modular, scalable, AI-ready and adaptable to tomorrow’s business needs.",
    },
  ];

  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Why <span className="text-indigo-500">PixxelAI</span>?
          </h2>

          <p className="mt-5 text-lg text-gray-300 max-w-xl">
            If you're looking for just another software vendor — we're not for you.  
            We partner only where we can create **strategic, long-term impact** through intelligent engineering.
          </p>

          <div className="mt-10 space-y-6">
            {reasons.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-5 w-5 mt-1 rounded-full bg-indigo-600 shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Block */}
        <div className="relative bg-gray-900/50 border border-white/10 rounded-2xl p-8 lg:p-12 shadow-[0_0_35px_-8px_#4f46e5]">
          <h3 className="text-white text-2xl font-semibold mb-6">The Difference You Get:</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>✔ Engineering + AI under one strategic partner</li>
            <li>✔ Architectures built for 5–10+ year scale</li>
            <li>✔ Zero vendor lock-in — transparent engineering</li>
            <li>✔ Measurable impact, not “hours billed” culture</li>
            <li>✔ Enterprise security + compliance mindset</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
