import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="bg-slate-100 text-gray-900 py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to combine <span className="text-indigo-600">Engineering</span> and{" "}
          <span className="text-purple-600">AI</span> for next-level growth?
        </h3>

        <p
          data-aos="fade-up"
          data-aos-delay="160"
          className="mt-3 text-gray-700"
        >
          We’ll architect, modernize, and activate AI across your business with measurable outcomes.
        </p>

        <Link
          to="/contact"
          data-aos="zoom-in"
          data-aos-delay="260"
          className="mt-7 inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium
                     transition hover:bg-indigo-600 hover:shadow-[0_0_20px_-4px_rgba(79,70,229,0.4)] hover:scale-[1.03]"
        >
          Book a Strategy Call <ArrowRight size={16} />
        </Link>

      </div>
    </section>
  );
}
