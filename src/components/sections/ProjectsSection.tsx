import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "The Nectar Brew",
    category: "Full-Stack Development",
    description: "Developed a Flask-based application integrated with the Groq API to deliver curated Vedic quotes and send daily inspirations via automated email notifications.",
    technologies: ["Flask", "Groq API", "Python", "Email Automation"],
    role: "Full-Stack Developer",
    link: ""
  },
  {
    title: "My Instruments Newsletter App",
    category: "Full-Stack Development",
    description: "Built a responsive newsletter registration platform using Next.js and Tailwind CSS, integrating with Google Sheets API for subscriber data storage and management.",
    technologies: ["Next.js", "Tailwind CSS", "Google Sheets API", "JavaScript"],
    role: "Full-Stack Developer",
    link: "https://my-instruments.vercel.app/"
  },
  {
    title: "Eisenhower Matrix Productivity App",
    category: "Automation & UI Development",
    description: "Created a Tkinter-based productivity tool to organize and visualize tasks using the Eisenhower Matrix framework. Automated desktop wallpaper updates using AppleScript and macOS LaunchAgents.",
    technologies: ["Python", "Tkinter", "AppleScript", "Automation"],
    role: "Software Developer",
    link: "https://github.com/pranavatpeaks/eisen-wallpaper-app.git"
  },
  {
    title: "RShiny Lottery Predictor",
    category: "Data Science & Visualization",
    description: "Developed an interactive RShiny app that simulated lottery draws to analyze probability distributions and behavioral biases in gambling outcomes.",
    technologies: ["R", "RShiny", "Data Visualization", "Statistics"],
    role: "Data Analyst",
    link: "https://github.com/pranavatpeaks/649-Lottery-Predictor.git"
  },
  {
    title: "Moneyball Player Analysis",
    category: "Data Analytics",
    description: "Analyzed Major League Baseball data using SQLite, writing 12+ SQL queries to extract insights on player salaries and efficiency. Generated actionable insights for roster decisions.",
    technologies: ["Python", "Tkinter", "SQLite", "SQL"],
    role: "Data Analyst",
    link: "https://github.com/pranavatpeaks/MoneyBall-Analysis"
  },
  {
    title: "Disaster Resilience Skit – SDG 13 Climate Action",
    category: "Social Innovation & Sustainability",
    description: "Conceptualized and presented a creative skit blending traditional and modern methods for disaster resilience. Focused on sustainable community development and social inclusion.",
    technologies: ["Event Design", "Community Engagement"],
    role: "Team Lead",
    link: "https://www.canva.com/design/DAFmI7DZ5bU/QlAh7g5mwL00gtQ3Qyx_JQ/view?utm_content=DAFmI7DZ5bU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=had6f8d5c2a"
  },
  {
    title: "Srusta - A healthcare equipment provider",
    category: "Machine Learning & Sustainability",
    description: "Developed a machine learning prototype addressing oxygen cylinder challenges during health emergencies. Collaborated in a cross-functional team as a designer and won first prize in the ML domain.",
    technologies: ["Python", "Machine Learning", "Figma"],
    role: "Web Designer",
    link: "https://www.figma.com/deck/Tuq91HTG5l56QkZX3hVGxE/TECK-HACK--3?node-id=1-27&t=cIIsYhFaIgl6gQ4S-1"
  },
  {
    title: "nuovo bags - ads on green bags – HDSE Camp (Agastya Foundation)",
    category: "Social Entrepreneurship",
    description: "Designed a sustainable solution printing ads on paper bags as an alternative to plastic usage in weekly markets. Awarded second place for innovation and impact.",
    technologies: ["Design Thinking", "Sustainability", "Social Innovation"],
    role: "Team Lead",
    link: "https://www.figma.com/deck/3YAtpAv3EbbdAJEtxd0khM/Group-A---HDSE?node-id=55-250&t=cIIsYhFaIgl6gQ4S-1"
  },
  {
    title: "Program Designer – AUNSF (AUISC Chapter)",
    category: "Event Design & Content Strategy",
    description: "Designed student workbooks along with AUISC R&D Team and coordinated documentaries exploring various domains to prompt SDGs.",
    technologies: ["Event Management", "Content Strategy"],
    role: "Program Designer, R&D Team",
    link: "https://www.canva.com/design/DAGsLjxAjQI/JZ8Kc8SofIPfZTDr9OQfSA/edit"
  },
  {
    title: "CSR Summit – Branding & Communications Manager",
    category: "Event Branding & Strategy",
    description: "Led branding, communications, and documentation for a university CSR Summit. Created reports, newsletters, and visual identity materials to align with the event’s objectives.",
    technologies: ["Branding", "Communication Strategy", "Documentation"],
    role: "Branding & Communications Manager",
    link: "https://www.canva.com/design/DAGjXvVUp7s/oALezEVNvAJcwprmd1uRuw/view?utm_content=DAGjXvVUp7s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd9a6d42529"
  }
];


export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique];
  }, []);
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Projects
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto shadow-glow"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
              Building solutions that merge data, AI, and human impact
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-1 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all hover:scale-102">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {project.title}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Role:</span> {project.role}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
