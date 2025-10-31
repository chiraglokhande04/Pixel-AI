import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Brain, Database, Cloud, Zap, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Menu, X, Sparkles, Cpu, Globe, Lock, Layers, GitBranch, Award, Target, Rocket, LineChart } from 'lucide-react';

const PixxelAIWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'AI & Automation', id: 'ai' },
    { name: 'Industries', id: 'industries' },
    { name: 'Why Us', id: 'why' },
    { name: 'Contact', id: 'contact' }
  ];

  const NavBar = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PixxelAI
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navigation.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-indigo-200 transition-all transform hover:scale-105">
            Get Started
          </button>

          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navigation.map(item => (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white rounded-full shadow-md border border-indigo-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Enterprise Intelligence • AI-Powered Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Engineering Intelligence for
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              Enterprise Innovation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Full-stack technology solutions combining enterprise software engineering with AI-driven automation. Build smarter, scale faster, innovate with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => setCurrentPage('contact')} className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-indigo-200 transition-all transform hover:scale-105">
              Start Your Project <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
            <button onClick={() => setCurrentPage('solutions')} className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold shadow-lg hover:shadow-xl border-2 border-indigo-100 hover:border-indigo-300 transition-all">
              Explore Solutions
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Code, label: 'Enterprise Software', desc: 'Custom Development', color: 'from-blue-500 to-cyan-500' },
              { icon: Brain, label: 'AI & Automation', desc: 'Intelligent Systems', color: 'from-purple-500 to-pink-500' },
              { icon: Database, label: 'Data Engineering', desc: 'Analytics & Pipelines', color: 'from-indigo-500 to-blue-500' },
              { icon: Cloud, label: 'Cloud Solutions', desc: 'DevOps & Infrastructure', color: 'from-violet-500 to-purple-500' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-100 hover:border-indigo-200">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 font-bold mb-1 text-sm">{item.label}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Three Core Disciplines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern organizations demand integrated intelligence. We build at the intersection of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Code, 
                title: 'Software Engineering', 
                desc: 'Structural strength and reliability through modern architectures and industry best practices',
                color: 'from-blue-500 to-cyan-500',
                bg: 'bg-blue-50'
              },
              { 
                icon: Database, 
                title: 'Data Systems', 
                desc: 'Clarity, visibility, and scalability with real-time pipelines and advanced analytics',
                color: 'from-indigo-500 to-purple-500',
                bg: 'bg-indigo-50'
              },
              { 
                icon: Brain, 
                title: 'Artificial Intelligence', 
                desc: 'Evolution, autonomy, and efficiency with self-optimizing intelligent systems',
                color: 'from-purple-500 to-pink-500',
                bg: 'bg-purple-50'
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 ${item.bg} rounded-3xl hover:shadow-xl transition-all group border-2 border-transparent hover:border-indigo-200`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '99.9%', label: 'Uptime Guarantee' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-indigo-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const SolutionsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Enterprise Solutions
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Software That Scales</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom-built enterprise systems designed for scale, security, and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Layers,
                title: 'Custom Software Development',
                desc: 'Full-cycle development of enterprise-grade web, mobile, and cloud applications using modern, modular architectures.',
                features: ['Microservices Architecture', 'API-First Design', 'Cross-Platform Apps', 'Scalable Backend Systems'],
                color: 'from-blue-500 to-cyan-500',
                bg: 'bg-blue-50'
              },
              {
                icon: Cloud,
                title: 'Cloud Engineering & DevOps',
                desc: 'Design and management of cloud-native systems with automated CI/CD pipelines, monitoring, and scaling.',
                features: ['AWS, Azure, GCP', 'Kubernetes & Docker', 'Infrastructure as Code', 'Auto-Scaling & Monitoring'],
                color: 'from-indigo-500 to-purple-500',
                bg: 'bg-indigo-50'
              },
              {
                icon: Database,
                title: 'Data Engineering & Analytics',
                desc: 'Real-time data pipelines, analytics dashboards, and warehousing to enable data-driven decision-making.',
                features: ['ETL Pipelines', 'Data Warehousing', 'Real-time Analytics', 'BI Dashboards'],
                color: 'from-purple-500 to-pink-500',
                bg: 'bg-purple-50'
              },
              {
                icon: GitBranch,
                title: 'System Integration',
                desc: 'Bridging legacy software, APIs, and microservices into unified digital ecosystems that communicate seamlessly.',
                features: ['API Integration', 'Legacy Modernization', 'Middleware Solutions', 'Event-Driven Architecture'],
                color: 'from-violet-500 to-indigo-500',
                bg: 'bg-violet-50'
              }
            ].map((solution, i) => (
              <div key={i} className={`p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all group border-2 border-gray-100 hover:border-indigo-300`}>
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.desc}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, j) => (
                    <div key={j} className="flex items-center text-indigo-600">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-2xl text-white">
            <div className="flex items-center mb-6">
              <Shield className="w-12 h-12 mr-4" />
              <h3 className="text-3xl font-bold">Enterprise Modernization Consulting</h3>
            </div>
            <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
              Architecture redesign, process automation, and digital transformation strategy for large-scale organizations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Security & Compliance', 'Maintainability', 'Performance Optimization'].map((item, i) => (
                <div key={i} className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AIPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              AI & Automation
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Intelligent Automation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI systems that integrate directly with enterprise infrastructure to optimize and evolve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Cpu,
                title: 'AI Agents & Automation',
                desc: 'Intelligent multi-agent systems handling business workflows autonomously',
                tech: ['LangGraph', 'CrewAI', 'AutoGPT'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Brain,
                title: 'Knowledge Graphs & RAG',
                desc: 'Context-aware AI powered by retrieval-augmented generation',
                tech: ['Neo4j', 'FAISS', 'Elasticsearch'],
                color: 'from-indigo-500 to-purple-500'
              },
              {
                icon: TrendingUp,
                title: 'ML & Predictive Modeling',
                desc: 'Forecasting, anomaly detection, and classification models',
                tech: ['PyTorch', 'TensorFlow', 'Scikit-learn'],
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: Database,
                title: 'Document Intelligence',
                desc: 'Automated extraction and structuring from unstructured data',
                tech: ['NLP', 'OCR', 'Classification'],
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Sparkles,
                title: 'Fine-Tuned AI Models',
                desc: 'Domain-specialized LLMs with SFT and RLHF alignment',
                tech: ['Llama', 'Qwen', 'Hugging Face'],
                color: 'from-pink-500 to-purple-500'
              },
              {
                icon: GitBranch,
                title: 'MLOps Infrastructure',
                desc: 'End-to-end pipelines for model deployment and monitoring',
                tech: ['Kubernetes', 'Docker', 'CI/CD'],
                color: 'from-violet-500 to-indigo-500'
              }
            ].map((solution, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all group border-2 border-gray-100 hover:border-purple-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{solution.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 bg-white rounded-3xl shadow-xl border-2 border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Programming', items: ['Python', 'Node.js', 'React', 'TypeScript'], color: 'text-blue-600', bg: 'bg-blue-50' },
                { title: 'Data & Analytics', items: ['Spark', 'Airflow', 'Databricks', 'PostgreSQL'], color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { title: 'AI & ML', items: ['PyTorch', 'TensorFlow', 'LangChain', 'Llama'], color: 'text-purple-600', bg: 'bg-purple-50' },
                { title: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Kubernetes', 'Terraform'], color: 'text-pink-600', bg: 'bg-pink-50' }
              ].map((stack, i) => (
                <div key={i} className={`p-6 ${stack.bg} rounded-2xl`}>
                  <h4 className={`${stack.color} font-bold text-lg mb-4`}>{stack.title}</h4>
                  <ul className="space-y-2">
                    {stack.items.map((item, j) => (
                      <li key={j} className="text-gray-700 font-medium flex items-center">
                        <div className={`w-2 h-2 ${stack.bg} border-2 ${stack.color.replace('text', 'border')} rounded-full mr-2`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const IndustriesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Industries We Serve
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Domain Expertise</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adaptable frameworks with deep customization across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Healthcare & Life Sciences',
                icon: '🏥',
                solutions: [
                  'Clinical decision support systems',
                  'AI document digitization (ICD/HL7)',
                  'Predictive patient risk modeling',
                  'Claims automation',
                  'Digital health assistants'
                ],
                color: 'from-red-500 to-pink-500'
              },
              {
                title: 'Finance & Insurance',
                icon: '💰',
                solutions: [
                  'Risk assessment & portfolio optimization',
                  'Fraud detection analytics',
                  'Automated underwriting',
                  'Predictive market intelligence'
                ],
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Retail & E-commerce',
                icon: '🛍️',
                solutions: [
                  'AI-powered recommendations',
                  'Dynamic pricing engines',
                  'Demand forecasting',
                  'Customer retention analytics'
                ],
                color: 'from-orange-500 to-yellow-500'
              },
              {
                title: 'Manufacturing & Supply Chain',
                icon: '🏭',
                solutions: [
                  'Predictive maintenance',
                  'Supply chain visibility',
                  'Computer vision QA',
                  'Logistics optimization'
                ],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Energy & Utilities',
                icon: '⚡',
                solutions: [
                  'Smart grid forecasting',
                  'Asset monitoring',
                  'Sustainability analytics',
                  'Resource optimization'
                ],
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Government & Public Sector',
                icon: '🏛️',
                solutions: [
                  'Citizen service automation',
                  'Policy intelligence',
                  'Smart city management',
                  'Infrastructure analytics'
                ],
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((industry, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-indigo-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-lg`}>
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{industry.title}</h3>
                <ul className="space-y-3">
                  {industry.solutions.map((solution, j) => (
                    <li key={j} className="flex items-start text-gray-600">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const WhyUsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">The PixxelAI Advantage</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unified expertise in enterprise engineering and artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Layers,
                title: 'Unified Expertise',
                desc: 'Enterprise software engineering and deep AI capabilities under one roof',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: TrendingUp,
                title: 'Scalable Architecture',
                desc: 'Every system designed for flexibility, interoperability, and future growth',
                color: 'from-indigo-500 to-blue-500'
              },
              {
                icon: Shield,
                title: 'Security & Compliance',
                desc: 'Alignment with HIPAA, GDPR, and ISO 27001 standards for data protection',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Target,
                title: 'Outcome-Oriented',
                desc: 'Delivering measurable results in efficiency, cost reduction, and intelligence',
                color: 'from-pink-500 to-red-500'
              },
              {
                icon: Award,
                title: 'End-to-End Ownership',
                desc: 'From idea to deployment with complete accountability and continuous support',
                color: 'from-violet-500 to-purple-500'
              },
              {
                icon: Rocket,
                title: 'Innovation with Stability',
                desc: 'Research-driven problem-solving built on enterprise-grade reliability',
                color: 'from-cyan-500 to-blue-500'
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all group border-2 border-gray-100 hover:border-indigo-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-10 bg-white rounded-3xl shadow-xl border-2 border-gray-100 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Engagement Models</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'End-to-End Delivery', desc: 'Full-cycle project ownership from strategy to deployment', icon: Rocket, color: 'from-blue-500 to-cyan-500' },
                { title: 'Dedicated Teams', desc: 'Cross-functional teams integrated into your operations', icon: Users, color: 'from-indigo-500 to-purple-500' },
                { title: 'Consulting & Advisory', desc: 'Strategic guidance for automation and modernization', icon: LineChart, color: 'from-purple-500 to-pink-500' },
                { title: 'Co-Development', desc: 'Joint product development and IP creation', icon: GitBranch, color: 'from-violet-500 to-indigo-500' }
              ].map((model, i) => (
                <div key={i} className="text-center p-6 hover:bg-indigo-50 rounded-2xl transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${model.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <model.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-gray-900 font-bold mb-2 text-lg">{model.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-2xl text-white">
            <h3 className="text-4xl font-bold mb-6">Our Vision</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto text-indigo-100">
              To redefine how organizations build and evolve technology by unifying{' '}
              <span className="font-bold text-white">software engineering</span> and{' '}
              <span className="font-bold text-white">artificial intelligence</span> into systems that are{' '}
              <span className="font-bold text-white">intelligent by design</span> and{' '}
              <span className="font-bold text-white">scalable by architecture</span>.
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Building Self-Optimizing Digital Enterprises</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's Build Together</h1>
            <p className="text-xl text-gray-600">
              Start your journey towards intelligent enterprise systems
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 overflow-hidden">
            <div className="p-10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors">
                    <option>Enterprise Software Development</option>
                    <option>AI & Automation Solutions</option>
                    <option>Cloud Engineering & DevOps</option>
                    <option>Data Engineering & Analytics</option>
                    <option>System Integration</option>
                    <option>Consulting & Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none resize-none transition-colors"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-indigo-200 transition-all transform hover:scale-[1.02]"
                >
                  Send Message <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 border-t-2 border-gray-100">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Globe,
                    title: 'Global Reach',
                    desc: 'Serving enterprises worldwide',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: Zap,
                    title: 'Fast Response',
                    desc: '24-48 hour initial response',
                    color: 'from-indigo-500 to-purple-500'
                  },
                  {
                    icon: Lock,
                    title: 'Confidential',
                    desc: 'NDA-protected discussions',
                    color: 'from-purple-500 to-pink-500'
                  }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-gray-900 font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Prefer email?</p>
            <a href="mailto:hello@pixxelai.com" className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold shadow-lg hover:shadow-xl border-2 border-indigo-100 hover:border-indigo-300 transition-all">
              hello@pixxelai.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  const Footer = () => (
    <footer className="bg-white border-t-2 border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">PixxelAI</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Engineering intelligence for enterprise innovation through unified software and AI solutions. Building self-optimizing digital enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Enterprise Software</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">AI & Automation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Cloud Engineering</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Finance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Retail</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Manufacturing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 PixxelAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'solutions': return <SolutionsPage />;
      case 'ai': return <AIPage />;
      case 'industries': return <IndustriesPage />;
      case 'why': return <WhyUsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default PixxelAIWebsite;