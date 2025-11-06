import { ArrowRight } from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      name: "Healthcare & Life Sciences",
      points: ["Clinical AI", "Care Personalization", "Claims Automation"],
    },
    {
      name: "Finance & Insurance",
      points: ["Risk & Fraud Intelligence", "Automated Underwriting"],
    },
    {
      name: "Retail & E-commerce",
      points: ["Personalization", "Demand Forecasting"],
    },
    {
      name: "Manufacturing & Supply Chain",
      points: ["Predictive Maintenance", "Supply Chain Visibility"],
    },
    {
      name: "Energy & Utilities",
      points: ["Smart Grid Optimization"],
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Industries <span className="text-indigo-500">We Serve</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            AI-driven solutions built for specific industry challenges and growth.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm 
              hover:shadow-xl hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                {item.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/industries"
            className="inline-flex items-center gap-2 border border-white text-white 
            px-7 py-3 rounded-full text-sm font-medium transition 
            hover:bg-indigo-600 hover:border-indigo-600"
          >
            Explore All Industries <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
