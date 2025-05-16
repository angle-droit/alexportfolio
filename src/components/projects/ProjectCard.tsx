import type { Project } from '@/types';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription, GlassCardFooter } from '@/components/ui/GlassCard';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard className="overflow-hidden h-full flex flex-col group transform transition-all duration-300 hover:scale-105 hover:shadow-primary/30">
      <GlassCardHeader className="p-0 relative">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            data-ai-hint={project.imageHint || "project image"}
            width={600}
            height={400}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
      </GlassCardHeader>
      <GlassCardContent className="pt-6 flex-grow">
        <GlassCardTitle className="text-xl mb-2">{project.title}</GlassCardTitle>
        <GlassCardDescription className="text-sm mb-4 h-20 overflow-y-auto"> {/* Fixed height for description */}
          {project.description}
        </GlassCardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </GlassCardContent>
      <GlassCardFooter className="mt-auto">
        <div className="flex items-center space-x-2 w-full">
          {project.liveDemoUrl && (
            <Button asChild variant="default" size="sm" className="flex-1">
              <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.sourceCodeUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Link>
            </Button>
          )}
        </div>
      </GlassCardFooter>
    </GlassCard>
  );
}
