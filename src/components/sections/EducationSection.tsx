import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Education
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto shadow-glow"></div>
          </div>

          <Card className="p-8 hover:shadow-lg transition-all animate-fade-in-up">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  B.Tech in Engineering
                </h3>
                <p className="text-lg font-medium text-primary">
                  Anurag University
                </p>
                <p className="text-muted-foreground">
                  Expected Graduation: 2026
                </p>
                <div className="pt-2">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Focus Areas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["AI", "Data Science", "Human-Centered Engineering", "IUCEE", "EPICS"].map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  Active in IUCEE and EPICS Chapters, focusing on sustainable engineering solutions and community impact projects.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
