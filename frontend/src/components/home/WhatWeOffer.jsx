export default function WhatWeOffer() {
  const offers = [
    {
      title: "Custom Enterprise Software",
      desc: "End-to-end development of secure, scalable web, mobile, and cloud platforms tailored to complex business environments.",
      tag: "Enterprise Engineering",
    },
    {
      title: "AI & Intelligent Automation",
      desc: "Multi-agent systems, workflow automation, and decision-intelligent AI that reduce manual effort and accelerate operations.",
      tag: "AI + Automation",
    },
    {
      title: "Data Engineering & Analytics",
      desc: "Modern data pipelines, warehousing, and analytics dashboards enabling real-time insights and data-driven decisions.",
      tag: "Data Systems",
    },
    {
      title: "Cloud & DevOps",
      desc: "Cloud-native architecture, CI/CD, infrastructure automation, and monitoring engineered for reliability and scale.",
      tag: "Cloud & Infra",
    },
    {
      title: "System Integration",
      desc: "Unifying legacy systems, APIs, and microservices into cohesive ecosystems that communicate seamlessly.",
      tag: "Integration",
    },
    {
      title: "AI Advisory & Modernization",
      desc: "Strategy, architecture, and roadmap for digital transformation and AI adoption that delivers measurable business impact.",
      tag: "Consulting",
    },
  ];

  return (
    <section className="bg-gray-800 py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            What We <span className="text-indigo-500">Offer</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Precision engineering meets adaptive intelligence — delivering technology that drives real business outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((item, i) => (
            <div
              key={i}
              className="group bg-gray-900/40 border border-white/5 rounded-xl p-7 hover:border-indigo-500 hover:shadow-[0_0_25px_-4px_#4f46e5] transition-all cursor-pointer"
            >
              <span className="text-xs font-semibold text-indigo-400 tracking-wide uppercase">
                {item.tag}
              </span>
              <h3 className="text-lg font-semibold text-white mt-3 group-hover:text-indigo-400 transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
