import { Card } from "@/components/ui/card";
import { Trophy, Award, Brain, Briefcase } from "lucide-react";

const awards = [
  {
    title: "First Place – SDG 13 Climate Action",
    organization: "AUNSF (AUISC Chapter)",
    description: "Innovative disaster resilience solution blending modern and traditional practices.",
    icon: Trophy,
  },
  {
    title: "First Prize – SDG Hackathon (ML Domain)",
    organization: "Anurag University",
    description: "ML-based solution addressing sustainability problems (Oxygen Cylinder Booking Chatbot).",
    icon: Trophy,
  },
  {
    title: "Second Place – HDSE Challenge",
    organization: "Agastya Foundation",
    description: "Designed plastic-substitute paper bags embedding local ads.",
    icon: Award,
  },
  {
    title: "First Place – Paper Presentation",
    organization: "HITAM Innofiesta",
    description: "Recognized for clarity and innovation.",
    icon: Trophy,
  },
  {
    title: "Special Mention – AUNSF (AUISC Chapter)",
    organization: "Product Design Category",
    description: "Redesigning an air fryer with respect to the sustainability canvas.",
    icon: Award,
  },
  {
    title: "Deloitte Australia Data Analytics Simulation",
    organization: "Forage (2025)",
    description: "Completed Tableau, Excel, Python-based analytics projects.",
    icon: Brain,
  },
  {
    title: "ServiceNow Certified System Administrator",
    organization: "ServiceNow (2025)",
    description: "Certified in system administration and platform configuration.",
    icon: Briefcase,
  },
  {
    title: "ServiceNow Certified Application Developer",
    organization: "ServiceNow (2025)",
    description: "Certified in application development on the ServiceNow platform.",
    icon: Briefcase,
  },
];

export const AwardsSection = () => {
  return (
    <section id="awards" className="section-padding bg-background">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Awards & Achievements
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto shadow-glow"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
              Recognition for innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <Card
                  key={award.title}
                  className="p-6 hover:shadow-lg transition-all hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {award.title}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {award.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {award.description}
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
