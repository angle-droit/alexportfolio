import { SKILLS_DATA } from '@/lib/constants';
import type { Skill } from '@/types';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const SkillItem = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg hover:bg-accent/10 transition-colors duration-300">
    {skill.icon && <skill.icon className="h-7 w-7 text-primary" />}
    <div>
      <h4 className="font-semibold text-md">{skill.name}</h4>
      <Badge variant="secondary" className="text-xs">{skill.level}</Badge>
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my technical toolkit and proficiencies.
          </p>
        </div>
        <GlassCard className="overflow-hidden">
          <GlassCardContent className="p-0 md:p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
              {SKILLS_DATA.map((skill) => (
                <SkillItem key={skill.id} skill={skill} />
              ))}
            </div>
          </GlassCardContent>
        </GlassCard>
      </div>
    </section>
  );
}
