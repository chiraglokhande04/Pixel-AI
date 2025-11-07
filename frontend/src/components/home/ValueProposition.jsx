export default function ValueProposition() {
  const pillars = [
    {
      title: "Enterprise-Grade Engineering",
      desc: "Robust, secure, and scalable architecture built for mission-critical systems.",
      icon: "🏛️",
    },
    {
      title: "AI-Powered Automation",
      desc: "Intelligent agents and automation frameworks that reduce human effort and decision latency.",
      icon: "⚙️",
    },
    {
      title: "Data as a Strategic Asset",
      desc: "Unified data pipelines, analytics, and knowledge systems enabling real-time intelligence.",
      icon: "📊",
    },
    {
      title: "Innovation With Stability",
      desc: "Modern tech with enterprise discipline—no unstable hype, only scalable impact.",
      icon: "🧠",
    },
  ];

  return (
    <section className="relative bg-gray-950 py-24">
      {/* subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-900/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          We Build <span className="text-indigo-500">Intelligent Enterprise Systems</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Not just software — systems that learn, adapt, and evolve.  
          We merge engineering precision with AI intelligence to deliver future-proof digital ecosystems.
        </p>

        {/* Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="group bg-gray-900/40 border border-white/5 rounded-xl p-8 hover:border-indigo-500 hover:shadow-[0_0_25px_-4px_#4f46e5] transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
