import React from 'react';
import InteractiveTerminalHero from '../components/InteractiveTerminalHero';
import About from '../components/About';
import RetroExperience from '../components/RetroExperience';
import RetroSkills from '../components/RetroSkills';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <InteractiveTerminalHero />
      <About />
      <RetroExperience />
      <RetroSkills />
      <Contact />
    </div>
  );
};

export default HomePage;