import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Java", stars: 4 },
  { name: "SQL", stars: 4 },
  { name: "JavaScript", stars: 3 },
  { name: "Python", stars: 3 },
  { name: "TensorFlow", stars: 3 },
  { name: "Pandas", stars: 3 },
  { name: "Excel", stars: 4 },
  { name: "Git", stars: 4 },
  { name: "ServiceNow CSA", stars: 4 },
  { name: "ServiceNow CAD", stars: 3 },
];

const StarRating = ({ count }: { count: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={
            index < count
              ? "fill-primary text-primary"
              : "fill-muted text-muted"
          }
        />
      ))}
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Skills & Tools
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto shadow-glow"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
              Batman Star Proficiency Meter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-4 hover:shadow-lg transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-foreground">
                    {skill.name}
                  </span>
                  <StarRating count={skill.stars} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
