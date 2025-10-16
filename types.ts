
export interface NavLink {
  name: string;
  href: string;
}

export interface Experience {
  title: string;
  institution: string;
  dates: string;
  description: string[];
  image?: string; 
}

export interface Project {
  id: number;
  title: string;
  techStack: string[];
  imageUrl: string;
  screenshots?: string[];
  description: string;
  longDescription: string;
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: (string | Certification)[];
}