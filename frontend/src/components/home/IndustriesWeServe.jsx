import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ArrowRight, Building2, Heart, ShoppingCart, Factory, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustriesWeServe() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const industries = [
    {
      name: "Healthcare & Life Sciences",
      points: ["Clinical AI", "Care Personalization", "Claims Automation"],
      icon: Heart,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
    },
    {
      name: "Finance & Insurance",
      points: ["Risk & Fraud Intelligence", "Automated Underwriting"],
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      name: "Retail & E-commerce",
      points: ["Personalization", "Demand Forecasting"],
      icon: ShoppingCart,
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
    },
    {
      name: "Manufacturing & Supply Chain",
      points: ["Predictive Maintenance", "Supply Chain Visibility"],
      icon: Factory,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      name: "Energy & Utilities",
      points: ["Smart Grid Optimization"],
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
    },
    {
      name: "Enterprise & Startups",
      points: ["Digital Transformation", "Innovation Acceleration"],
      icon: Building2,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">

      {/* Background visuals (no aos, don't animate everything like an amateur) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-indigo-600/20 backdrop-blur-sm border border-indigo-500/30 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 size={16} />
            <span>Cross-Industry Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Industries <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">We Serve</span>
          </h2>
          <div className="h-1 w-32 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6" />
          
          <p className="text-xl text-gray-300 leading-relaxed">
            AI-driven solutions built for specific industry challenges and transformative growth.
          </p>
        </div>

        {/* Industry Cards */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 
                hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-600/20 hover:-translate-y-2 
                transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${item.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative mb-5">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-24 h-24 bg-linear-to-br ${item.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {item.name}
                </h3>

                <ul className="space-y-2.5">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-300 text-sm group/item">
                      <span className={`mt-0.5 h-1.5 w-1.5 rounded-full bg-linear-to-r ${item.gradient} group-hover/item:w-3 transition-all`} />
                      <span className="group-hover/item:text-white transition-colors">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div 
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-12"
          data-aos="fade-up"
          data-aos-delay={industries.length * 120 + 200}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "6+", label: "Industries" },
              { value: "50+", label: "Projects Delivered" },
              { value: "100%", label: "Client Retention" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div 
                key={i} 
                data-aos="zoom-in"
                data-aos-delay={industries.length * 120 + 300 + i * 120}
                className="text-center group cursor-default"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          data-aos="fade-up"
          data-aos-delay={industries.length * 120 + 800}
        >
          <Link to='/industries'
            className="group relative inline-flex items-center gap-3 bg-linear-to-r from-indigo-600 to-indigo-700 text-white 
            px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 
            hover:shadow-2xl hover:shadow-indigo-600/50 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">Explore All Industries</span>
            <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link to='/contact'
            className="group inline-flex items-center gap-3 bg-transparent border-2 border-indigo-500/50 text-indigo-300 
            px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 
            hover:bg-indigo-600/10 hover:border-indigo-400"
          >
            <span>Schedule Consultation</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
