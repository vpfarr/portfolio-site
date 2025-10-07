'use client';

import React from 'react';
import { Achievement } from '../../types';

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Key Achievements
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-slate-900/50 rounded-lg overflow-hidden hover:bg-slate-900/70 transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-gray-400 mb-3">{achievement.description}</p>
                <p className="text-green-400 mb-4 font-medium">{achievement.impact}</p>
                
                <div className="flex flex-wrap gap-2">
                  {achievement.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;