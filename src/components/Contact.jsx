import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { contactInfo, personalInfo } from '../utils/constants';

const Contact = () => {
  const iconComponents = {
    Mail,
    Github, 
    Linkedin
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Interested in collaborating? I'm always open to discussing new projects and opportunities.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = iconComponents[contact.icon];
            return (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6">
                <IconComponent className={`mx-auto mb-4 ${contact.color}`} size={32} />
                <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                <a 
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {contact.value}
                </a>
              </div>
            );
          })}
        </div>
        <a 
          href={`mailto:${personalInfo.email}`}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;