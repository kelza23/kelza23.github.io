import React, { useState, useEffect } from 'react';
import {
  Activity,
  Award,
  BookOpen,
  ChevronDown,
  Code,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Mic,
  MapPin,
} from 'lucide-react';
import { profile, experience, aiSpecialties, projects } from './content';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'experience', 'research', 'projects', 'contact'];
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 antialiased">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => scrollToSection('home')}>
            KELVIN<span className="text-blue-600">CHOO</span>
          </div>
          <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest text-slate-500">
            {['Experience', 'Research', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-200 hover:text-blue-600 ${activeSection === item.toLowerCase() ? 'text-blue-600' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          <a href={`mailto:${profile.email}`} className="hidden sm:block px-6 py-2 border-2 border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all rounded-none">
            Hire Me
          </a>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-blue-600 mb-6 font-bold text-xs uppercase tracking-widest">
              <span className="w-8 h-px bg-blue-600"></span>
              <span>Technical Specialist & AI Researcher</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter uppercase">
              Strategic <br/> Research <br/> <span className="text-blue-600">Leader.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-6">
              <button onClick={() => scrollToSection('experience')} className="px-10 py-4 bg-slate-900 text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl">
                View Experience
              </button>
              <div className="flex items-center space-x-6 text-slate-400">
                <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin className="w-6 h-6"/></a>
                <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors"><Github className="w-6 h-6"/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-black text-slate-900 mb-6 sticky top-32">Professional <br/>Trajectory</h2>
            </div>
            <div className="md:w-2/3 space-y-20">
              {experience.map((job, index) => (
                <div key={index} className="group">
                  <span className="text-sm font-black text-blue-600 uppercase tracking-widest">{job.period}</span>
                  <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{job.role}</h3>
                  <div className="text-lg font-bold text-slate-400 mb-6 uppercase tracking-wider">{job.company}</div>
                  <p className="text-slate-600 mb-8 leading-relaxed italic">{job.description}</p>
                  <ul className="grid grid-cols-1 gap-4">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-slate-500 bg-slate-50 p-4 border-l-4 border-slate-200">
                        <span className="mr-3 font-bold text-blue-600">/</span>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="py-32 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 uppercase">Research Focus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiSpecialties.map((item, idx) => (
              <div key={idx} className="border border-slate-800 p-8 hover:bg-slate-900 transition-all group">
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon === 'Database' && <Database className="w-6 h-6" />}
                  {item.icon === 'Cpu' && <Cpu className="w-6 h-6" />}
                  {item.icon === 'Code' && <Code className="w-6 h-6" />}
                  {item.icon === 'Activity' && <Activity className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 uppercase">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 p-12 border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6">{project.tag}</div>
                  <h3 className="text-3xl font-black mb-6 leading-tight">{project.title}</h3>
                  <p className="text-slate-500 mb-10 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-400">#{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">Let's Build <br/>Together.</h2>
          <a href={`mailto:${profile.email}`} className="inline-block px-12 py-5 bg-white text-blue-600 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
            Email Me Directly
          </a>
        </div>
      </section>

      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm font-bold text-slate-400">© {new Date().getFullYear()} KELVIN CHOO.</div>
          <div className="flex items-center text-xs font-black uppercase tracking-widest text-slate-900">
            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
            {profile.location}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;