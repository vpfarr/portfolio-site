"use client";

import React from 'react';
import Navigation from '../components/layout/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';
import { personalInfo, timeline, keyAchievements } from '../data/personal';
import { techStack, currentlyWorkingWith } from '../data/skills';
import { achievements } from '../data/achievements';

const Portfolio = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation onScrollToSection={scrollToSection} />
      <HeroSection personalInfo={personalInfo} onScrollToSection={scrollToSection} />
      <AboutSection timeline={timeline} keyAchievements={keyAchievements} />
      <SkillsSection techStack={techStack} currentlyWorkingWith={currentlyWorkingWith} />
      <AchievementsSection achievements={achievements} />
      <ContactSection linkedinUrl={personalInfo.linkedin} />
      <Footer />
    </div>
  );
};

export default Portfolio;