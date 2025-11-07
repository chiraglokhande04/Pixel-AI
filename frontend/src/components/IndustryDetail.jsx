import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ArrowRight, ArrowLeft, Check, TrendingUp, Users, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustryDetail({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  if (!data) return <div className="text-white p-20">Industry not found.</div>;

  const { title, heroDescription, challenges, solutions, impact, stack, cases } = data;

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-6 pb-28 md:pb-36">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <Link
            to="/industries"
            data-aos="fade-right"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-10 transition-all duration-300"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Industries
          </Link>

          <div className="max-w-4xl" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4" data-aos="zoom-in" data-aos-delay="150">
              <div className="h-10 w-10 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Award size={20} className="text-white" />
              </div>
              <p className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">Industry Solutions</p>
            </div>
            
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mt-3 bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {title}
            </h1>

            <p 
              className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              {heroDescription}
            </p>

            <div className="mt-12 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="450">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/40 hover:shadow-indigo-600/60 hover:scale-105"
              >
                Book Consultation 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <TrendingUp size={18} />
                View Impact Metrics
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap gap-8 text-sm text-gray-400" data-aos="fade-up" data-aos-delay="600">
              <div className="flex items-center gap-2"><Check size={16} className="text-indigo-400" /> <span>Enterprise-Grade Security</span></div>
              <div className="flex items-center gap-2"><Check size={16} className="text-indigo-400" /> <span>99.9% Uptime SLA</span></div>
              <div className="flex items-center gap-2"><Check size={16} className="text-indigo-400" /> <span>24/7 Support</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-slate-100 text-gray-900 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap size={16} />
              Challenges We Solve
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Complex Problems Demand Expert Solutions</h2>
            <p className="mt-5 text-gray-600 text-lg">We understand the unique challenges facing your industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((c, i) => (
              <div 
                key={i}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 120}
                className="group bg-white rounded-2xl border-2 border-gray-200 p-7 hover:shadow-2xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <div className="h-10 w-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">{c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-gray-950 py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-indigo-500/20">
              <Award size={16} />
              Our Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Comprehensive Solutions Tailored to Your Needs</h2>
            <p className="mt-5 text-gray-400 text-lg">End-to-end capabilities designed for your industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <div
                key={i}
                data-aos="zoom-in-up"
                data-aos-delay={i * 150}
                className="group relative rounded-2xl border border-white/10 bg-linear-to-br from-gray-900/90 to-gray-900/50 p-8 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-500" />
                
                <div className="relative">
                  <div className="h-14 w-14 rounded-xl bg-linear-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
                    <div className="h-7 w-7 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact + Case Studies */}
      <section id="impact" className="bg-slate-800 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Impact + Case Studies */}
          <div className="lg:col-span-2">
            <div className="mb-14" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-green-500/20">
                <TrendingUp size={16} />
                Proven Results
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Measurable Business Impact</h2>
              <p className="mt-4 text-gray-400 text-lg">Real results that drive sustainable growth</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
              {impact.map((m, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 150}
                  className="group rounded-2xl bg-linear-to-br from-white/15 to-white/5 backdrop-blur-sm border-2 border-white/20 p-6 text-center hover:border-indigo-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">{m.k}</div>
                  <div className="text-sm text-gray-300 leading-snug">{m.v}</div>
                </div>
              ))}
            </div>

            <div className="mb-8" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
                <Users size={16} />
                Success Stories
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Client Transformations</h3>
              <p className="mt-3 text-gray-400">See how we've helped businesses achieve their goals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cases.map((c, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 150}
                  className="group rounded-2xl bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20 p-7 hover:border-indigo-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-12 w-12 rounded-xl bg-linear-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center border border-indigo-500/30">
                      <div className="h-6 w-6 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600" />
                    </div>
                    <p className="text-white font-bold text-lg">{c.name}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-3 border-red-400/50 bg-red-500/5 py-3 rounded-r">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                        Before
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed">{c.before}</p>
                    </div>
                    <div className="pl-4 border-l-3 border-green-400/50 bg-green-500/5 py-3 rounded-r">
                      <span className="text-xs font-bold text-green-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                        After
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed">{c.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="lg:sticky lg:top-28 h-fit" data-aos="fade-left" data-aos-delay="250">
            <div className="rounded-2xl border-2 border-white/20 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 shadow-2xl">
              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center mb-4 border border-indigo-500/30">
                <Zap size={24} className="text-indigo-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Technology Stack</h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Enterprise-grade tools and frameworks powering your success</p>
              <ul className="space-y-3.5">
                {stack.map((s, i) => (
                  <li 
                    key={i} 
                    data-aos="fade-left" 
                    data-aos-delay={350 + i * 100}
                    className="flex items-start gap-3 group hover:text-white transition-colors text-gray-200"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500 shrink-0 group-hover:ring-4 group-hover:ring-indigo-500/30 transition-all" />
                    <span className="leading-relaxed text-sm font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-100 text-gray-900 py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award size={16} />
            Get Started Today
          </div>
          <h3 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Transform Your <br className="hidden md:block" />
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{title}</span> Operations?
          </h3>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Partner with us to build interoperable, compliant, and intelligent systems designed to scale with your ambitions and exceed expectations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              data-aos="zoom-in"
              data-aos-delay="150"
              className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-indigo-600/40 hover:shadow-indigo-600/60 hover:scale-105"
            >
              Book a Strategy Call 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              data-aos="zoom-in"
              data-aos-delay="300"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-xl text-base font-bold transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
