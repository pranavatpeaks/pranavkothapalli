import { Card } from "@/components/ui/card";
import { Users, Megaphone, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "EPICS Lead",
    organization: "IUCEE Student Chapter (AUISC)",
    period: "Active Member",
    description: "Led community-impact engineering projects blending sustainability and innovation. Mentored teams on sustainable design, problem-solving, and applied engineering.",
    icon: Users,
  },
  {
    title: "Branding & Communications Manager",
    organization: "CSR Summit 2025",
    period: "2025",
    description: "Managed brand strategy and event communications for the CSR Summit, driving engagement and strategic messaging.",
    icon: Megaphone,
  },
  {
    title: "Active Member",
    organization: "IUCEE & EPICS",
    period: "Ongoing",
    description: "Contributing to community engineering projects with a focus on sustainability, social innovation, and human-centered design thinking.",
    icon: Briefcase,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Experience & Leadership
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto shadow-glow"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
              Building impact through innovation and collaboration
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card
                  key={exp.title}
                  className="p-6 hover:shadow-lg transition-all hover:scale-102 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-base font-medium text-primary">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
