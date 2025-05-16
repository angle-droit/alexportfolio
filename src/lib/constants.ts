import type { Skill, Project, Experience, Education } from '@/types';
import { Lightbulb, Code2, Database, Cloud, Palette, GitBranch, Briefcase, Building, CalendarDays, GraduationCap, Shell, Cpu } from 'lucide-react';

export const SKILLS_DATA: Skill[] = [
  { id: 'react', name: 'Sys Admin', level: 'Intermediate', icon: Lightbulb },
  { id: 'nextjs', name: 'DevOps', level: 'Beginner', icon: Code2 },
  { id: 'typescript', name: 'ASM', level: 'Beginner', icon: Code2 },
  { id: 'tailwind', name: 'Docker', level: 'Beginner', icon: Cpu },
  { id: 'nodejs', name: 'HTML & CSS', level: 'Intermediate', icon: Database },
  { id: 'python', name: 'Python', level: 'Intermediate', icon: Code2 },
  { id: 'git', name: 'Git & GitHub', level: 'Intermediate', icon: GitBranch },
  { id: 'bash', name: 'Shell BASH', level: 'Beginner', icon: Shell },

];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-alpha',
    title: 'CrystalSky',
    description: 'A minecraft server based on the skyblock game mode on the theme of feudal japan',
    longDescription: 'Developed a comprehensive e-commerce platform using Next.js, TypeScript, and Stripe for payments. Features include product listings, user authentication, shopping cart, and order management. Implemented responsive design with Tailwind CSS ensuring a seamless experience across all devices.',
    imageUrl: 'https://i.imgur.com/6E92Hcr.jpeg',
    imageHint: 'online store',
    tags: ['Yaml', 'Shell', 'Docker', 'JVM', 'Pterodactyl'],
    category: 'Games',
  },
  {
    id: 'orion-project',
    title: 'OrionOS',
    description: 'A stable Debian-based Linux operating system',
    longDescription: 'Developed a comprehensive e-commerce platform using Next.js, TypeScript, and Stripe for payments. Features include product listings, user authentication, shopping cart, and order management. Implemented responsive design with Tailwind CSS ensuring a seamless experience across all devices.',
    imageUrl: 'https://i.imgur.com/b9Ro4ec.jpeg',
    imageHint: 'online store',
    tags: ['Configuration', 'Shell', 'live-build'],
    category: 'Developement',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp1',
    role: 'System Administrator',
    company: 'CrystalSkyMC',
    period: 'Jan 2025 - Present',
    description: [
      'Setting up the infrastructure',
      'Implementation of various network security tools',
      'Configuration/Development of server plugins to provide a structure',
      'On-site and remote equipment maintenance'
    ],
    logoUrl: 'https://i.imgur.com/GUnEejy.png',
    logoHint: 'company logo'
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu1',
    degree: 'CAP - Production plant operator',
    institution: 'High school',
    period: '2022 - 2024',
    description: 'Specializing in the operation of production plants for various products',
  },
];

export const RESUME_INFO = {
  name: "Axel",
  title: "Versatile autodidact | System Administrator",
  summary: "ow-level explorer (Linux, ASM), creator of distributions and system tools, passionate about cybersecurity and systems-oriented development.",
  contact: {
    email: "pro.axelmertz@gmail.com",
    phone: "+33 750513159",
    github: "github.com/angle-droit",
    website: "yourportfolio.com"
  },
  skills: SKILLS_DATA,
  experience: EXPERIENCE_DATA,
  education: EDUCATION_DATA,
  projects: PROJECTS_DATA.slice(0,2) // Showcase a few key projects on resume
}
