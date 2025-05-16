export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: React.ElementType; 
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  sourceCodeUrl?: string;
  liveDemoUrl?: string;
  category: string;
}

export interface Experience {
  id:string;
  role: string;
  company: string;
  period: string;
  description: string[];
  logoUrl?: string;
  logoHint?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}
