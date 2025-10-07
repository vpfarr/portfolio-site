'use client';

import React from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { PersonalInfo } from '../../types';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo, onScrollToSection }) => {
  return (
    <section id="me" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          {personalInfo.title}
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          {personalInfo.description}
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href={personalInfo.github} className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-200">
            <Github size={24} />
          </a>
          <a href={personalInfo.linkedin} className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200">
            <Linkedin size={24} />
          </a>
        </div>

        <button
          onClick={() => onScrollToSection('skills')}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;