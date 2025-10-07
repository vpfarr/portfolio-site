import { PersonalInfo, TimelineItem, KeyAchievement } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Valentin Pfarr',
  title: 'Developer, DevOps Engineer & IT Specialist',
  description: `I have a diverse background spanning the complete lifecycle of enterprise software systems.
  I develop, build, test, deploy and operate software in a variety of environments.
  I'm passionate about system design, design patterns and clean architecture to build robust state of the art software
  with a focus on reliably and swiftly delivering value to users.`,
  github: 'https://github.com/vpfarr',
  linkedin: 'https://linkedin.com/in/valentin-pfarr-115ba4223'
};

export const timeline: TimelineItem[] = [
  {
    period: '2023 - Present',
    title: 'DevOps Engineer',
    description: 'Developing enterprise-grade automation tools and applications for software testing and deployment. Building robust CI/CD pipelines and containerizing applications across 60+ VMs with comprehensive monitoring and deployment strategies.'
  },
  {
    period: '2022 - 2023',
    title: 'Software & Systems Engineer',
    description: 'Architected and maintained enterprise-scale test automation framework across 5 major projects. Developed fullstack Python applications with comprehensive test coverage, refactored legacy codebases, and built Java-based GUI testing solutions.'
  },
  {
    period: '2021 - 2022',
    title: 'Systems Administrator',
    description: 'Operation and extension of enterprise multi-site Hyper-V infrastructure and 200+ client systems. Designed and built fullstack web applications: Single-page App, web-based product configurator, etc.'
  },
  {
    period: '2018 - 2021',
    title: 'Apprenticeship',
    description: 'Completed Fachinformatiker certification while gaining hands-on experience in system integration and network administration.'
  }
];

export const keyAchievements: KeyAchievement[] = [
  {
    icon: 'Server',
    title: '60+ VMs Managed',
    subtitle: 'Across 4 private cloud environments'
  },
  {
    icon: 'Code',
    title: 'Enterprise Test Frameworks',
    subtitle: 'Comprehensive Python framework for automotive test automation'
  },
  {
    icon: 'Database',
    title: '200+ Clients',
    subtitle: 'Enterprise AD management'
  },
  {
    icon: 'Globe',
    title: '3+ Years Experience',
    subtitle: 'DevOps & Infrastructure'
  }
];