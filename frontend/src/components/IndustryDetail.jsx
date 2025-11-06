import { ArrowRight, ArrowLeft } from "lucide-react";

export default function IndustryDetail({ data }) {
  if (!data) return <div className="text-white p-20">Industry not found.</div>;

  const { title, heroDescription, challenges, solutions, impact, stack, cases } = data;

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-6 pb-20 md:pb-24">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <a
            href="/industries"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium mb-6 transition"
          >
            <ArrowLeft size={16} /> Back to Industries
          </a>

          <p className="text-indigo-400 font-semibold tracking-wide uppercase">Industry</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">{title}</h1>
          <p className="mt-3 text-lg text-gray-300 max-w-3xl">{heroDescription}</p>

          <div className="mt-8 flex gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
            >
              Book Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-slate-100 text-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold">Key Challenges</h2>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {challenges.map((c, i) => (
              <li key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                • {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold">What We Deliver</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-gray-900/50 p-6 hover:border-indigo-500 transition"
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact + Stack + Case Studies */}
    <section className="bg-slate-800 py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
    
    {/* Impact + Case Studies */}
    <div className="lg:col-span-2">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Business Impact</h2>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {impact.map((m, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 text-center"
          >
            <div className="text-2xl font-bold text-white">{m.k}</div>
            <div className="text-xs text-gray-200 mt-1">{m.v}</div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-10 text-white">Sample Case Studies</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-6"
          >
            <p className="text-white font-medium">{c.name}</p>
            <p className="text-gray-200 text-sm mt-2">
              <span className="font-semibold text-white">Before: </span>{c.before}
            </p>
            <p className="text-gray-200 text-sm mt-1">
              <span className="font-semibold text-white">After: </span>{c.after}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Tech Stack */}
   <div className="lg:sticky lg:top-28">
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-[0_0_15px_-4px_rgba(0,0,0,0.5)]">
    <h2 className="text-2xl md:text-3xl font-bold text-white">Tech Stack</h2>
    <ul className="mt-6 space-y-2 text-sm text-gray-200">
      {stack.map((s, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
          {s}
        </li>
      ))}
    </ul>
  </div>
</div>

  </div>
</section>


      {/* Bottom CTA */}
      <section className="bg-slate-100 text-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready to modernize <span className="text-indigo-500">{title}</span> operations?
          </h3>
          <p className="mt-3 text-gray-700">
            We design interoperable, compliant, and intelligent systems — built to scale.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-7 py-3 rounded-full text-sm font-medium transition hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
          >
            Book a Strategy Call <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
