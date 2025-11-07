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
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Technology <span className="text-indigo-500">Stack</span></h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            We leverage modern, scalable, and secure technologies to build reliable and intelligent systems.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-gray-300">
            {stack.map((x, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" /> {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-semibold">Engineering Focus</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="rounded-lg bg-black/20 border border-white/10 p-4">Scalability</div>
            <div className="rounded-lg bg-black/20 border border-white/10 p-4">Security</div>
            <div className="rounded-lg bg-black/20 border border-white/10 p-4">Performance</div>
            <div className="rounded-lg bg-black/20 border border-white/10 p-4">Interoperability</div>
          </div>
        </div>
      </div>
    </section>
  );
}