export interface TechStack {
  languages: string[];
  devops: string[];
  infrastructure: string[];
  testing: string[];
  databases: string[];
  systems: string[];
}

export interface Achievement {
  title: string;
  description: string;
  impact: string;
  tech: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  github: string;
  linkedin: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface KeyAchievement {
  icon: string;
  title: string;
  subtitle: string;
}