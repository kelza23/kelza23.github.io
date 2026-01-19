import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Talks } from './components/Talks';
import { Contact, Footer } from './components/Footer';

const App = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <Experience />
      <Projects />
      <Talks />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
