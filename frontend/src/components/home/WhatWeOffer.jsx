import { Link } from "react-router-dom";

export default function WhatWeOffer() {
  const offers = [
    {
      title: "Custom Enterprise Software",
      desc: "End-to-end development of secure, scalable web, mobile, and cloud platforms tailored to complex business environments.",
      tag: "Enterprise Engineering",
      icon: "🏗️",
    },
    {
      title: "AI & Intelligent Automation",
      desc: "Multi-agent systems, workflow automation, and decision-intelligent AI that reduce manual effort and accelerate operations.",
      tag: "AI + Automation",
      icon: "🤖",
    },
    {
      title: "Data Engineering & Analytics",
      desc: "Modern data pipelines, warehousing, and analytics dashboards enabling real-time insights and data-driven decisions.",
      tag: "Data Systems",
      icon: "📈",
    },
    {
      title: "Cloud & DevOps",
      desc: "Cloud-native architecture, CI/CD, infrastructure automation, and monitoring engineered for reliability and scale.",
      tag: "Cloud & Infra",
      icon: "☁️",
    },
    {
      title: "System Integration",
      desc: "Unifying legacy systems, APIs, and microservices into cohesive ecosystems that communicate seamlessly.",
      tag: "Integration",
      icon: "🔗",
    },
    {
      title: "AI Advisory & Modernization",
      desc: "Strategy, architecture, and roadmap for digital transformation and AI adoption that delivers measurable business impact.",
      tag: "Consulting",
      icon: "💡",
    },
  ];

  return (
    <section className="bg-gray-800 py-32 relative overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-950/50 via-transparent to-gray-950/50 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-br from-indigo-900/10 via-transparent to-indigo-900/10 pointer-events-none" />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* blur accents */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div data-aos="fade-up" className="inline-block mb-6">
            <span className="px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider">
              OUR SERVICES
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="120"
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            What We{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-indigo-600">
              Offer
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-xl text-gray-400 leading-relaxed"
          >
            Precision engineering meets adaptive intelligence —{" "}
            <span className="text-gray-300">delivering technology that drives real business outcomes.</span>
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={220 + i * 120}
              className="group relative bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 
              hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/0 via-indigo-600/0 to-indigo-700/0 
                group-hover:from-indigo-500/5 group-hover:via-indigo-600/5 group-hover:to-indigo-700/5 transition-all duration-500" />

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "0 0 35px -5px rgba(99, 102, 241, 0.4)" }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
                    {item.tag}
                  </span>

                  <div className="flex items-center justify-center w-10 h-10 text-2xl bg-gray-800/50 rounded-lg 
                    group-hover:bg-indigo-500/10 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                <div className="mt-5 flex items-center text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/solutions" className="text-sm font-medium">
                    Learn more
                  </Link>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900/60 border border-white/5 backdrop-blur-sm">
            <span className="text-gray-400 text-sm">Need a custom solution?</span>
            <a href="#contact" className="text-indigo-400 font-semibold text-sm hover:text-indigo-300 transition-colors">
              Let's discuss your project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
