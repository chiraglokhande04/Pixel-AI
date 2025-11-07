import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient */}
      <div
        data-aos="fade-in"
        className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent"
      />

      {/* Subtle grid overlay */}
      <div
        data-aos="fade-in"
        data-aos-delay="80"
        className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-size-[26px_26px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="120"
          className="text-4xl md:text-6xl font-bold tracking-tight text-white"
        >
          Core{" "}
          <span
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-indigo-500"
          >
            Verticals
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="260"
          className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Two powerful verticals that combine engineering excellence with
          intelligence — transforming how modern enterprises operate, scale,
          and innovate.
        </p>
      </div>
    </section>
  );
}
