import { Navigation } from "@/components/Navigation";
import Lightning from '@/components/Lightning';
import React, { useEffect, useState } from 'react';
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
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    // Render Lightning only on desktop and when user hasn't requested reduced motion.
    // Defer mounting until the browser is idle to avoid competing with initial paint.
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 768;
    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    // Query param takes precedence for quick testing
    if (urlParams && urlParams.get('noLightning') === '1') return;

    // Respect persistent user pref stored in localStorage
    try {
      const stored = localStorage.getItem('noLightning');
      if (stored === '1') return;
    } catch (e) {}

    if (!prefersReduced && isDesktop) {
      const idleCb = (window as any).requestIdleCallback || function (cb: any) { return window.setTimeout(cb, 1000); };
      const id = idleCb(() => setShowLightning(true));

      const onToggle = (e: any) => {
        const disable = !!e?.detail;
        setShowLightning(!disable);
      };
      window.addEventListener('noLightning:change', onToggle as EventListener);

      return () => {
        if ((window as any).cancelIdleCallback) (window as any).cancelIdleCallback(id);
        else clearTimeout(id);
        window.removeEventListener('noLightning:change', onToggle as EventListener);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Site-wide animated background (conditionally rendered) */}
      <div className="absolute inset-0 opacity-30 -z-10">
        {showLightning ? (
          <Lightning hue={45} xOffset={0} speed={0.55} intensity={0.35} size={2} />
        ) : null}
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
