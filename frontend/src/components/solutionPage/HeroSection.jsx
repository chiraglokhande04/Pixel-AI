export default function HeroSection() {
  return (
    <div className="bg-gray-950 text-white">
      {/* Solutions Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent pointer-events-none" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[26px_26px]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Intelligent <span className="text-indigo-500">Solutions</span> for the Modern Enterprise
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Designed to accelerate transformation, automate operations, and enable data-driven,
            AI-powered decision making across the enterprise.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Book Strategy Call
            </a>
            <a
              href="#solutions-tabs"
              className="inline-block border border-gray-600 hover:border-gray-400 hover:text-white text-gray-300 px-6 py-3 rounded-lg font-medium transition"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
