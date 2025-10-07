'use client';

import React from 'react';
import { Server, Code, Database, Globe } from 'lucide-react';
import { TimelineItem, KeyAchievement } from '../../types';

interface AboutSectionProps {
  timeline: TimelineItem[];
  keyAchievements: KeyAchievement[];
}

const iconMap = {
  Server,
  Code,
  Database,
  Globe
};

const AboutSection: React.FC<AboutSectionProps> = ({ timeline, keyAchievements }) => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Professional Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">{item.period}: {item.title}</h4>
                  <p className="text-gray-400 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Key Achievements</h3>
            <div className="space-y-6">
              {keyAchievements.map((achievement, index) => {
                const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{achievement.title}</p>
                      <p className="text-sm text-gray-400">{achievement.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;