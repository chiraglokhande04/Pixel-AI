export default function Philosophy() {
  const pillars = [
    {
      title: "Engineering First",
      desc: "Strong architecture, reliability, modularity, and security form the backbone of everything we build.",
    },
    {
      title: "Outcome Driven",
      desc: "Technology only matters when it moves business KPIs. We deliver measurable, tangible outcomes.",
    },
    {
      title: "Intelligence Centric",
      desc: "Software that doesn’t learn becomes obsolete. Our systems evolve with data, automation, and AI.",
    },
    {
      title: "Zero Lock-In",
      desc: "We build transparent, portable, and standards-driven solutions — your team can own and scale them.",
    },
  ];

  return (
    <section className="bg-[#0f1320] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Our <span className="text-indigo-500">Philosophy</span></h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl">
          The principles that define how we build, deliver, and partner with organizations.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-7 hover:border-indigo-500 transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}