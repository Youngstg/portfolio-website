import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { socialLinks } from '../utils/constants';

const About = () => {
  const iconComponents = {
    Github,
    Linkedin, 
    Mail
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-300 mb-6">
              {personalInfo.bio2}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = iconComponents[social.icon];
                return (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors ${social.color}`}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Projects Completed</span>
                <span className="font-bold text-purple-400">{personalInfo.stats.projectsCompleted}</span>
              </div>
              <div className="flex justify-between">
                <span>Years Experience</span>
                <span className="font-bold text-purple-400">{personalInfo.stats.yearsExperience}</span>
              </div>
              <div className="flex justify-between">
                <span>Technologies Mastered</span>
                <span className="font-bold text-purple-400">{personalInfo.stats.technologiesMastered}</span>
              </div>
              <div className="flex justify-between">
                <span>AI Models Deployed</span>
                <span className="font-bold text-purple-400">{personalInfo.stats.aiModelsDeployed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;