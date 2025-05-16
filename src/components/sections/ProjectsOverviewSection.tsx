import { PROJECTS_DATA } from '@/lib/constants';
import ProjectCard from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/button';
import { Code2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsOverviewSection() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3); // Show first 3 projects

  return (
    <section id="projects-overview" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Code2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="default" className="shadow-lg hover:shadow-primary/50 transition-shadow">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
