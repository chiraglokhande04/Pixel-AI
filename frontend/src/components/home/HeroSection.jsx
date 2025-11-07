import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 text-center">
        
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold tracking-tight text-white"
        >
          Engineering Intelligence for the
          <span className="block bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent md:text-7xl md:mt-4">
            Modern Enterprise
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          We build enterprise-grade software and AI automation systems that eliminate inefficiencies,
          boost innovation, and enable truly self-optimizing digital businesses.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 active:scale-95 transition"
          >
            Book Strategy Call <ArrowRight className="size-4" />
          </Link>

          <Link
            to="/solutions"
            className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 text-gray-200 font-medium hover:border-gray-400 hover:text-white active:scale-95 transition"
          >
            View Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
