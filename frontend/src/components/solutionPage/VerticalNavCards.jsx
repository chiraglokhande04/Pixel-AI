import { ArrowRight } from "lucide-react";

export default function VerticalNavCards() {
  const cards = [
    {
      id: "enterprise-section",
      title: "Enterprise Software Solutions",
      desc: "Modern, scalable, secure platforms architected for mission-critical enterprise operations.",
    },
    {
      id: "ai-section",
      title: "AI & Intelligent Automation",
      desc: "Autonomous systems, AI agents, and data intelligence that automate and amplify business execution.",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(c.id)}
            className="group relative overflow-hidden rounded-2xl p-8 text-left border border-white/10 bg-white/5 backdrop-blur-md 
                       hover:border-indigo-500 hover:shadow-[0_0_25px_-2px_rgba(79,70,229,0.6)] transition-all cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition" />
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition">
              {c.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2 max-w-sm">{c.desc}</p>
            <span className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium mt-6 group-hover:underline">
              Explore <ArrowRight size={15} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
