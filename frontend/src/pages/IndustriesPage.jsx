import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    blurb:
      "Clinical intelligence, document digitization (ICD/HL7), personalized care, and claims automation.",
    bullets: ["Clinical decision support", "Document & knowledge graphs", "Claims automation"],
  },
  {
    slug: "finance",
    title: "Finance & Insurance",
    blurb:
      "Risk analytics, fraud detection, automated underwriting, and portfolio intelligence.",
    bullets: ["Risk & fraud analytics", "Automated claims/underwriting", "Market intelligence"],
  },
  {
    slug: "retail",
    title: "Retail & E-commerce",
    blurb: "Personalization, demand forecasting, and lifecycle retention analytics.",
    bullets: ["Recommendations", "Dynamic pricing & demand", "Segmentation & retention"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Supply Chain",
    blurb: "Predictive maintenance, quality vision, and end-to-end supply visibility.",
    bullets: ["Predictive maintenance", "Logistics optimization", "Computer vision QA"],
  },
  {
    slug: "energy",
    title: "Energy & Utilities",
    blurb: "Forecasting, optimization, asset monitoring, and sustainability analytics.",
    bullets: ["Smart grid forecasting", "Asset monitoring", "Sustainability analytics"],
  },
  {
    slug: "government",
    title: "Government & Public Sector",
    blurb: "Citizen platforms, policy intelligence, and smart city management.",
    bullets: ["Citizen service automation", "Policy/urban planning intel", "Smart city ops"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-size-[26px_26px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Industries <span className="text-indigo-500">We Serve</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            AI-driven, enterprise-grade solutions tailored to sector-specific challenges and outcomes.
          </p>
        </div>
      </section>

      {/* Short intro */}
      <section className="bg-slate-100 text-gray-900 py-10 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl text-gray-700">
            We blend <span className="font-semibold">engineering precision</span> with{" "}
            <span className="font-semibold">adaptive AI</span> to deliver measurable impact across
            regulated and high-scale industries.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((it) => (
              <a
                key={it.slug}
                href={`/industries/${it.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 hover:border-indigo-500 transition"
              >
                {/* Base content */}
                <div className="p-6 min-h-[210px]">
                  <h3 className="text-xl font-semibold text-white">{it.title}</h3>
                  <p className="mt-2 text-sm text-gray-300 max-w-prose">{it.blurb}</p>
                </div>

                {/* Slide-up reveal */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-indigo-600/90 backdrop-blur-sm px-6 py-5">
                    <ul className="text-sm text-white/90 space-y-1.5">
                      {it.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 inline-flex items-center gap-2 text-white font-medium">
                      Learn more <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-14">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white text-white px-7 py-3 rounded-full text-sm font-medium transition hover:bg-indigo-600 hover:border-indigo-600"
            >
              Talk to an Industry Expert <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
