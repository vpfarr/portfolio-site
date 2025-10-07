'use client';

import React from 'react';
import { TechStack } from '../../types';

interface SkillsSectionProps {
  techStack: TechStack;
  currentlyWorkingWith: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ techStack, currentlyWorkingWith }) => {
  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        {/* Current Focus */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-slate-900/30 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              🔧 Currently Working With
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {currentlyWorkingWith.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.languages.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.devops.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Testing Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.testing.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.infrastructure.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.databases.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Operating Systems</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.systems.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;