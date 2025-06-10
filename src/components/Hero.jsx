import React from 'react';
import { Code, Globe, Brain, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useScrollToSection } from '../hooks/useScrollspy';

const Hero = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6 flex items-center justify-center">
            <Code size={48} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {personalInfo.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {personalInfo.subtitle}
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2">
              <Globe className="text-cyan-400" size={20} />
              <span>Web Dev</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2">
              <Brain className="text-purple-400" size={20} />
              <span>AI/ML</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-gray-600 hover:border-cyan-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400/10"
          >
            Contact Me
          </button>
        </div>
        
        <div className="mt-16">
          <ChevronDown className="mx-auto animate-bounce text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;