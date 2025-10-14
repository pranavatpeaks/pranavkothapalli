import { Navigation } from "@/components/Navigation";
import Lightning from '@/components/Lightning';
import { HeroSection } from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import WhatAmIReadingSection from "@/components/sections/WhatAmIReadingSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Site-wide animated background */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <Lightning hue={45} xOffset={0} speed={0.55} intensity={0.35} size={2} />
      </div>
      <Navigation />
      <main>
  <HeroSection />
  <AboutMeSection />
  <WhatAmIReadingSection />
  <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AwardsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
