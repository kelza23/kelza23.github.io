import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Cpu, 
  Activity, 
  Database, 
  Mic,
  MapPin,
  Trophy,
  Briefcase,
  Lightbulb,
  Quote,
  ExternalLink,
  Star
} from 'lucide-react';
import { profile, experience, aiSpecialties, projects, capabilities, philosophy, talks } from './content';

// ==========================================
// ICON MAP
// ==========================================

const IconMap = {
  Database: <Database className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'philosophy', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 antialiased">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-2" 
            onClick={() => scrollToSection('home')}
          >
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg font-black text-xs">KC</div>
            <span>KELVIN<span className="text-blue-600">CHOO</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            {['Philosophy', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-200 hover:text-blue-600 ${activeSection === item.toLowerCase() ? 'text-blue-600' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          <a href={`mailto:${profile.email}`} className="hidden sm:block px-5 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all rounded-md shadow-lg">
            Connect
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 skew-x-12 origin-top hidden lg:block"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-8 font-bold text-[10px] uppercase tracking-widest border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>{profile.title}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Engineering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Future of AI.</span>
            </h1>
            <div className="pl-6 border-l-4 border-blue-600 mb-10">
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                {profile.summary}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <button onClick={() => scrollToSection('experience')} className="px-8 py-4 bg-slate-900 text-white font-bold uppercase text-xs tracking-[0.15em] hover:bg-blue-600 transition-all shadow-xl rounded-lg">
                View The Playbook
              </button>
              <div className="h-px w-10 bg-slate-300 hidden sm:block"></div>
              <div className="flex items-center space-x-4 text-slate-400">
                <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"><Linkedin className="w-5 h-5"/></a>
                <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors p-2 hover:bg-slate-100 rounded-full"><Github className="w-5 h-5"/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Quote className="w-8 h-8 text-blue-600 mx-auto mb-4 opacity-50" />
            <h2 className="text-3xl font-black text-slate-900 mb-4">The Modern Researcher's Playbook</h2>
            <p className="text-slate-500 italic">"{profile.motto}"</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  {idx === 0 ? <Briefcase className="w-5 h-5"/> : idx === 1 ? <Lightbulb className="w-5 h-5"/> : <Trophy className="w-5 h-5"/>}
                </div>
                <h3 className="font-bold text-lg mb-3 text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column: Header (sticky with opaque background to prevent overlap) */}
            <div className="lg:w-1/3">
              <div className="md:sticky md:top-28 bg-white/95 backdrop-blur-sm border border-slate-100 shadow-sm rounded-2xl p-6">
                <h2 className="text-4xl font-black text-slate-900 mb-4 leading-tight">
                  Professional <br/>
                  <span className="text-blue-600">Trajectory.</span>
                </h2>
                <p className="text-slate-500 mb-8 font-medium">
                  A non-linear path from academic labs to industrial sites and athletic fields.
                </p>
                
                <div className="grid gap-4">
                  {aiSpecialties.map((item, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-blue-600 mr-3">{IconMap[item.icon]}</div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-900">{item.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div className="lg:w-2/3 space-y-16">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-600"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{job.role}</h3>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">{job.period}</span>
                  </div>
                  
                  <div className="flex items-center text-sm font-bold text-slate-500 mb-6 uppercase tracking-wide">
                    {job.company}
                    <span className="mx-2">•</span>
                    <span className="text-blue-400">{job.type}</span>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    {job.description}
                  </p>

                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Key Impact</h4>
                    <ul className="space-y-3">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-slate-600 text-sm">
                          <Star className="w-4 h-4 text-blue-500 mr-3 mt-0.5 shrink-0" fill="currentColor" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black mb-4">Tangible Impact</h2>
              <p className="text-slate-400 max-w-xl">
                Highlighting projects where AI theory met real-world constraints to deliver measurable value.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-3xl font-black text-blue-500">{'>'}AUD 2M</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">In Grants Secured</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-all border border-slate-700 hover:border-blue-500/50">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1 block">{project.partner}</span>
                    <h3 className="text-2xl font-bold group-hover:text-blue-100 transition-colors">{project.title}</h3>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-lg text-slate-400 group-hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-300 bg-slate-700/50 px-3 py-1.5 rounded-full border border-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Engagement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-10 space-x-4">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center">
              <Mic className="w-4 h-4 mr-2 text-blue-600" /> Speaking & Thought Leadership
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {talks.map((talk, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 hover:bg-slate-50 rounded-2xl transition-colors">
                <span className="text-xs font-black text-blue-600 uppercase mb-2 bg-blue-50 px-3 py-1 rounded-full">{talk.date}</span>
                <h4 className="font-bold text-lg mb-2 text-slate-900">{talk.title}</h4>
                <p className="text-sm text-slate-500 font-medium">{talk.venue}</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">{talk.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none opacity-90">
            Let's <br/> Collaborate.
          </h2>
          <p className="text-blue-100 mb-12 max-w-lg mx-auto text-lg font-medium">
            Available for technical consultation, industry-aligned research partnerships, and strategic speaking engagements.
          </p>
          <a href={`mailto:${profile.email}`} className="inline-block px-10 py-4 bg-white text-blue-600 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all shadow-2xl rounded-lg">
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded font-bold text-[10px]">KC</div>
            <span className="text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} Kelvin Choo</span>
          </div>
          <div className="flex items-center text-xs font-bold uppercase tracking-widest group cursor-pointer hover:text-blue-600 transition-colors">
            <MapPin className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            {profile.location}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
