export default function TechStack() {
  const stack = [
    "React / Next.js", "Node.js / Python / Java",
    "AWS / Azure / GCP", "Kubernetes & Docker",
    "PostgreSQL / MongoDB / Redis",
    "Snowflake / Databricks",
    "Airflow / Kafka",
    "LangChain / RAG / LLMs / Vector DBs",
  ];

  return (
    <section className="bg-[#0f1320] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
        
        {/* Left Section */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Technology <span className="text-indigo-500">Stack</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="mt-4 text-lg text-gray-300 max-w-xl"
          >
            We leverage modern, scalable, and secure technologies to build reliable and intelligent systems.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-gray-300">
            {stack.map((x, i) => (
              <li
                key={i}
                data-aos="fade-up"
                data-aos-delay={180 + i * 80}
                className="flex gap-2"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" /> {x}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <h3 className="text-xl font-semibold text-white">Engineering Focus</h3>

          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-300">
            {["Scalability", "Security", "Performance", "Interoperability"].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={260 + i * 120}
                className="rounded-lg bg-black/20 border border-white/10 p-4 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
