import { ArrowUp } from "lucide-react";

export default function EnterpriseSoftware() {
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

        {/* Header */}
        <p
          data-aos="fade-up"
          className="text-indigo-400 font-medium uppercase tracking-wide"
        >
          Vertical 01
        </p>

        <h2
          data-aos="fade-up"
          data-aos-delay="120"
          className="text-3xl md:text-5xl font-bold mt-2 text-white"
        >
          Enterprise <span className="text-indigo-500">Software Solutions</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-5 text-lg text-gray-300 max-w-4xl"
        >
          We engineer scalable, secure enterprise systems built with strong architecture foundations designed
          for long-term evolution — not short-term patchwork.
        </p>

        {/* Offerings */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={250 + i * 120}
              className="rounded-xl bg-white/5 border border-white/10 p-6 text-gray-300 
                         hover:border-indigo-500 hover:shadow-[0_0_20px_-4px_#4f46e5] 
                         transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Business Impact */}
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl font-semibold mt-14 text-white"
        >
          Business Impact
        </h3>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {impacts.map((m, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={260 + i * 120}
              className="rounded-xl bg-indigo-600/10 border border-indigo-500/40 p-6 text-center"
            >
              <div className="text-3xl font-bold text-indigo-400">{m.k}</div>
              <div className="text-sm text-gray-300 mt-1">{m.v}</div>
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl font-semibold mt-14 text-white"
        >
          Why It Matters
        </h3>

        <ul className="mt-6 space-y-4">
          {[
            "Robust architecture enables faster innovation & reduced maintenance cost",
            "Modern systems integrate seamlessly with AI & automation later",
            "Improves security, performance, maintainability, and compliance posture",
          ].map((point, i) => (
            <li
              key={i}
              data-aos="fade-up"
              data-aos-delay={260 + i * 150}
              className="flex gap-3 text-gray-300 text-sm"
            >
              <span className="text-indigo-500">•</span> {point}
            </li>
          ))}
        </ul>

        {/* Back to Top */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 px-6 py-3 
                       bg-white/5 hover:bg-indigo-500/10 
                       border border-white/10 hover:border-indigo-500/50
                       rounded-full text-sm font-medium text-indigo-400 
                       hover:text-indigo-300 hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.4)]
                       transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
