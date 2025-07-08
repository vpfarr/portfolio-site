"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Server, Database, Globe, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = {
    languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Bash', 'PowerShell', 'C'],
    devops: ['Ansible', 'Docker', 'Bamboo', 'Jenkins', 'CI/CD', 'Git', 'Linux', 'systemd'],
    infrastructure: ['VMware vSphere', 'Hyper-V', 'Windows Server', 'Active Directory'],
    testing: ['pytest', 'TestNG', 'JUnit', 'TestFX', 'Selenium'],
    databases: ['PostgreSQL', 'MySQL'],
    systems: ['Linux (RHEL/CentOS, Ubuntu)', 'Windows Server 2019/2022', 'Package Management', 'Container Orchestration', 'Virtualization']
  };


  const achievements = [
    {
      title: 'Enterprise Test Automation Platform',
      description: 'Architected comprehensive Python test framework supporting automotive systems across multiple environments',
      impact: 'Processing 1000+ daily test executions with robust error handling and reporting',
      tech: ['Python', 'pytest', 'JavaScript', 'bash', 'CI/CD', 'Docker']
    },
    {
      title: 'Legacy Codebase Modernization',
      description: 'Refactored and extended large-scale Java enterprise applications, improving maintainability and performance',
      impact: 'Reduced technical debt and enhanced system reliability across 5 major projects',
      tech: ['Java', 'JavaFX', 'TestFX', 'JUnit', 'Maven', 'Git']
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Designed and implemented Python-based infrastructure-as-code solutions for multi-environment deployments',
      impact: 'Automated provisioning and configuration of 60+ VMs across 4 private cloud environments',
      tech: ['Python', 'Ansible', 'VMware vSphere', 'Linux', 'Docker']
    }
  ];


  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Me', 'About', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Me', 'About', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium hover:text-purple-300 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Me Section */}
      <section id="me" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Valentin Pfarr
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Developer, DevOps Engineer & IT Specialist
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I architect and maintain enterprise-grade Python applications, build comprehensive test frameworks, 
            and manage scalable infrastructure across multiple environments. 
            Passionate about clean code, robust testing, and automated deployment pipelines.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/vpfarr" className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/valentin-pfarr-115ba4223" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vpfarr@mail.de" className="p-3 bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('skills')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-purple-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
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
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">2023 - Present: DevOps Engineer</h4>
                  <p className="text-gray-400 mt-2">Developing enterprise-grade Python automation tools and fullstack applications for infrastructure management. Building robust CI/CD pipelines and containerizing applications across 60+ VMs with comprehensive monitoring and deployment strategies.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">2022 - 2023: Software & Systems Engineer</h4>
                  <p className="text-gray-400 mt-2">Architected and maintained enterprise-scale test automation frameworks across 5 major projects. Developed fullstack Python applications with comprehensive test coverage, refactored legacy codebases, and built Java-based GUI testing solutions.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">2021 - 2022: Systems Administrator</h4>
                  <p className="text-gray-400 mt-2">Built fullstack web applications including company intranet and single-page applications while managing enterprise Hyper-V infrastructure and 200+ client systems.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">2018 - 2021: Apprenticeship</h4>
                  <p className="text-gray-400 mt-2">Completed Fachinformatiker certification while gaining hands-on experience in system integration and network administration.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Key Achievements</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Server size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">60+ VMs Managed</p>
                    <p className="text-sm text-gray-400">Across 4 private cloud environments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Code size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Enterprise Test Frameworks</p>
                    <p className="text-sm text-gray-400">Comprehensive Python framework for automotive test automation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Database size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">200+ Clients</p>
                    <p className="text-sm text-gray-400">Enterprise AD management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">3+ Years Experience</p>
                    <p className="text-sm text-gray-400">DevOps & Infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
                {['Python', 'Ansible', 'Docker', 'VMware vSphere', 'RedHat Linux', 'PowerShell', 'Bamboo CI/CD'].map((tech) => (
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

      {/* Professional Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Achievements
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


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Interested in collaboration? Let&apos;s discuss your next project, app or DevOps challenge!
          </p>
          
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:vpfarr@mail.de"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>&copy; 2025 Valentin Pfarr. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;