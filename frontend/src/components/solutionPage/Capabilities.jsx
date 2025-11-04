// --- Capabilities Overview Section ---
function Capabilities() {
  const capabilities = [
    {
      title: "Enterprise-Grade Engineering",
      desc: "Designing secure, scalable, and robust systems built for mission-critical reliability.",
    },
    {
      title: "Autonomous AI & Intelligent Automation",
      desc: "Multi-agent AI and workflow automation that eliminates manual effort and accelerates operations.",
    },
    {
      title: "Data Engineering & Decision Intelligence",
      desc: "Modern data pipelines, analytics, and knowledge systems for real-time business insights.",
    },
    {
      title: "Cloud-Native & Modernization",
      desc: "Cloud, DevOps, and modernization strategies that enable speed, resilience, and long-term scale.",
    },
    {
      title: "Systems Integration",
      desc: "Unifying legacy systems, microservices, and APIs into intelligent, cohesive ecosystems.",
    },
  ];

  return (
    <section className="bg-gray-950 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Our Core <span className="text-indigo-500">Capabilities</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300 text-center max-w-3xl mx-auto">
          We combine engineering precision with adaptive intelligence to build systems that evolve,
          scale, and deliver measurable business impact.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900/40 border border-white/5 hover:border-indigo-500 
              hover:shadow-[0_0_25px_-4px_#4f46e5] transition-all rounded-xl p-7"
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

export default Capabilities;