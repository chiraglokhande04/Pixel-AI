export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          About <span className="text-indigo-500">Us</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          We engineer scalable digital systems and intelligent automation for forward-thinking enterprises.
        </p>
      </div>
    </section>
  );
}