export default function SocialProof() {
  const stats = [
    { value: "40+", label: "Enterprise Solutions Delivered" },
    { value: "30–70%", label: "Ops Cost Reduction via Automation" },
    { value: "99.95%", label: "System Uptime & Reliability" },
  ];

  const logos = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fdummy-business-logo&psig=AOvVaw3ClhdbcRxY6CLPOXTQAnqa&ust=1762373388876000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJihktCm2ZADFQAAAAAdAAAAABAE",
    "/logos/company2.svg",
    "/logos/company3.svg",
    "/logos/company4.svg",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold text-indigo-400 uppercase tracking-wider">
          Trusted By Forward-Thinking Teams
        </h3>
        <p className="mt-3 text-xl text-gray-700 max-w-2xl mx-auto">
          Organizations rely on PixxelAI to modernize systems and accelerate intelligence at scale.
        </p>

        {/* Logos */}
        <div className="mt-12 flex items-center justify-center gap-10 flex-wrap opacity-80">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="client logo"
              className="h-10 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blaack">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
