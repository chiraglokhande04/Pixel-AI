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
    <section className="relative bg-gray-950 py-32 overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-indigo-950/20 via-transparent to-indigo-950/20 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div data-aos="fade-up" className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium tracking-wide">
              CORE CAPABILITIES
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            We Build{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-indigo-600">
              Intelligent Enterprise Systems
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Not just software — systems that learn, adapt, and evolve.{" "}
            <span className="text-gray-300">
              We merge engineering precision with AI intelligence to deliver future-proof digital ecosystems.
            </span>
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={150 + i * 120} // stagger timing per card
              className="group relative bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/0 to-indigo-600/0 group-hover:from-indigo-500/10 group-hover:to-indigo-600/5 transition-all duration-500" />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "0 0 30px -5px rgba(99, 102, 241, 0.4)" }}
              />

              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 mb-6 text-4xl bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors duration-300 group-hover:scale-110 transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500 transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Decor blobs */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
