import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    "Engineering-led foundation, not agency-style development",
    "Enterprise-ready security, compliance, and reliability standards",
    "Systems that evolve with AI, data, and continuous intelligence",
    "Open, transparent, and no vendor lock-in architectures",
    "Outcome-driven delivery with measurable improvements",
  ];

  return (
    <section className="bg-gray-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Why <span className="text-indigo-500">Choose Us</span>
        </h2>

        <ul className="mt-10 space-y-4">
          {reasons.map((p, i) => (
            <li
              key={i}
              data-aos="fade-up"
              data-aos-delay={120 + i * 120}
              className="flex gap-3 text-lg text-gray-300"
            >
              <CheckCircle2 className="text-indigo-500 h-6 w-6 mt-1" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
