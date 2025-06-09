import React from 'react';
import { Globe, Brain, Database } from 'lucide-react';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const iconComponents = {
    Globe,
    Brain,
    Database
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, data], index) => {
            const IconComponent = iconComponents[data.icon];
            return (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <IconComponent className={`mr-3 text-2xl bg-gradient-to-r ${data.color} bg-clip-text text-transparent`} size={28} />
                  <h3 className={`text-2xl font-semibold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                    {category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {data.skills.map((skill, i) => (
                    <div key={i} className="bg-slate-600/50 rounded-lg p-3 text-center hover:bg-slate-600 transition-colors">
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;