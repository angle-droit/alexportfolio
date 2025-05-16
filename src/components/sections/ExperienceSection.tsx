import { EXPERIENCE_DATA } from '@/lib/constants';
import type { Experience } from '@/types';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from '@/components/ui/GlassCard';
import { Briefcase, Building, CalendarDays } from 'lucide-react';
import Image from 'next/image';

const ExperienceItem = ({ experience }: { experience: Experience }) => (
  <GlassCard className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30">
    <GlassCardHeader>
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {experience.logoUrl && (
          <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0 border bg-white p-1">
            <Image 
              src={experience.logoUrl} 
              alt={`${experience.company} logo`}
              data-ai-hint={experience.logoHint || "company logo"}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="flex-grow">
          <GlassCardTitle className="text-xl md:text-2xl mb-1">{experience.role}</GlassCardTitle>
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <Building className="h-4 w-4 mr-2" />
            {experience.company}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4 mr-2" />
            {experience.period}
          </div>
        </div>
      </div>
    </GlassCardHeader>
    <GlassCardContent className="flex-grow">
      <ul className="space-y-2 list-disc list-inside text-muted-foreground">
        {experience.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </GlassCardContent>
  </GlassCard>
);

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions in various roles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {EXPERIENCE_DATA.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
