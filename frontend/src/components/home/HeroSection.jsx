import { ArrowRight } from "lucide-react";
import {Link} from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Engineering Intelligence for the
          <span className="text-indigo-500"> Modern Enterprise</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          PixxelAI builds scalable enterprise software and AI-driven automation systems
          that transform operations, accelerate innovation, and enable self-optimizing digital businesses.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transition"
          >
            Book Strategy Call <ArrowRight className="size-4" />
          </Link>

          <Link
            to="/solutions"
            className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 text-gray-200 font-medium hover:border-gray-400 hover:text-white transition"
          >
            View Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
