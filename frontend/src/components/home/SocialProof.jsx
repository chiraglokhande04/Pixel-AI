export default function SocialProof() {
  const stats = [
    { value: "40+", label: "Enterprise Solutions Delivered" },
    { value: "30–70%", label: "Ops Cost Reduction via Automation" },
    { value: "99.95%", label: "System Uptime & Reliability" },
  ];

  const logos = [
    "/logos/company1.svg",
    "/logos/company2.svg",
    "/logos/company3.svg",
    "/logos/company4.svg",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h3
          data-aos="fade-up"
          className="text-lg font-semibold text-indigo-400 uppercase tracking-wider"
        >
          Trusted By Forward-Thinking Teams
        </h3>

        <p
          data-aos="fade-up"
          data-aos-delay="120"
          className="mt-3 text-xl text-gray-700 max-w-2xl mx-auto"
        >
          Organizations rely on PixxelAI to modernize systems and accelerate intelligence at scale.
        </p>

        {/* Logos */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 flex items-center justify-center gap-10 flex-wrap opacity-80"
        >
          {logos.map((logo, i) => (
            <img
              key={i}
              data-aos="zoom-in"
              data-aos-delay={250 + i * 120} // stagger logos
              src={logo}
              alt="client logo"
              className="h-10 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>

        {/* Stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={350 + i * 150} // stagger stats
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-black">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
