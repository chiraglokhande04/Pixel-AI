import {Link} from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient + grid overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-size-[26px_26px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Core <span className="text-indigo-500">Verticals</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Two powerful verticals that combine engineering excellence with intelligence — transforming how modern enterprises operate, scale, and innovate.
        </p>
      </div>
    </section>
  );
}
