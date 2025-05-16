import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsOverviewSection from '@/components/sections/ProjectsOverviewSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      <HeroSection />
      <SkillsSection />
      <Separator className="my-8 md:my-12" />
      <ExperienceSection />
      <Separator className="my-8 md:my-12" />
      <ProjectsOverviewSection />
    </div>
  );
}
