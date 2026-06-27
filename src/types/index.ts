export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  color: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  type: "internship" | "education" | "project" | "milestone";
  description: string;
  highlights: string[];
  tech?: string[];
}

export interface Achievement {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
