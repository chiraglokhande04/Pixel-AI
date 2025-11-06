// src/pages/AboutPage.jsx
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-950 text-white">
      <Hero />
      <AboutUs />
      <Philosophy />
      <EngagementModels />
      <TechStack />
      <WhyChooseUs />
      <Vision />
      <BottomCTA />
    </div>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
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

/* -------------------- ABOUT US -------------------- */
function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
      <p className="mt-6 text-lg text-gray-300 max-w-5xl leading-relaxed">
        We are a technology and innovation partner for enterprises looking to modernize, automate,
        and scale. Our approach blends strong engineering foundations with applied AI, helping
        organizations evolve with intelligence and long-term adaptability.
      </p>

      <p className="mt-4 text-lg text-gray-300 max-w-5xl leading-relaxed">
        We don’t just build software – we architect ecosystems that grow, learn, and improve with data.
        Our solutions are built with precision, future-proofing, and business outcomes at the core.
      </p>
    </section>
  );
}

/* -------------------- PHILOSOPHY -------------------- */
function Philosophy() {
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

/* -------------------- ENGAGEMENT MODELS -------------------- */
function EngagementModels() {
  const models = [
    {
      title: "End-to-End Ownership",
      desc: "We take full responsibility — from product, engineering, data, AI, and platform — delivering outcomes, not just code.",
    },
    {
      title: "Co-Build with Your Team",
      desc: "Our senior engineers and architects work alongside your team to accelerate delivery and uplift engineering maturity.",
    },
    {
      title: "Advisory & Modernization",
      desc: "Architecture reviews, AI adoption strategy, platform upgrades, and transformation roadmaps for scale.",
    },
  ];

  return (
    <section className="bg-gray-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Engagement <span className="text-indigo-500">Models</span></h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((m, i) => (
            <div key={i} className="rounded-xl bg-gray-900/40 border border-white/10 p-7 hover:border-indigo-500 transition">
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TECH STACK -------------------- */
function TechStack() {
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

/* -------------------- WHY CHOOSE US -------------------- */
function WhyChooseUs() {
  const reasons = [
    "Engineering-led foundation, not agency-style development",
    "Enterprise-ready security, compliance, and reliability standards",
    "Systems that evolve with AI, data, and continuous intelligence",
    "Open, transparent, and no vendor lock-in architectures",
    "Outcome-driven delivery with measurable improvements",
  ];

  return (
    <section className="bg-gray-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Why <span className="text-indigo-500">Choose Us</span></h2>
        <ul className="mt-10 space-y-4">
          {reasons.map((p, i) => (
            <li key={i} className="flex gap-3 text-lg text-gray-300">
              <CheckCircle2 className="text-indigo-500 h-6 w-6 mt-1" /> {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------- VISION -------------------- */
function Vision() {
  return (
    <section className="bg-[#111622] py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our <span className="text-indigo-500">Vision</span></h2>
        <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          To empower enterprises with intelligent, scalable, and adaptive digital ecosystems that continuously evolve —
          where software learns, automates, and drives decisions autonomously.
        </p>
      </div>
    </section>
  );
}

/* -------------------- CTA -------------------- */
function BottomCTA() {
  return (
    <section className="bg-slate-100 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Want to build the future of your enterprise with <span className="text-indigo-600">intelligent engineering</span>?
        </h3>
        <p className="mt-3 text-gray-700">
          Let’s transform your digital landscape with a long-term, scalable approach.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-7 py-3 rounded-full text-sm font-medium transition hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
        >
          Book a Strategy Call <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
