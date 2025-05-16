import ProjectList from '@/components/projects/ProjectList';
import { Code2 } from 'lucide-react';

export const metadata = {
  title: 'Projects | PortfolioPro',
  description: 'Explore a collection of my projects.',
};

export default function ProjectsPage() {
  return (
    <div className="py-8 md:py-12">
      <header className="text-center mb-12 md:mb-16">
        <Code2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Here&apos;s a showcase of my work, demonstrating my skills in various technologies and domains.
        </p>
      </header>
      <ProjectList />
    </div>
  );
}
