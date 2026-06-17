import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  link: string;
  story: string[];
  images: string[];
}

const projects: Project[] = [
  {
    title: "The Nectar Brew",
    category: "Full-Stack Development",
    description: "Developed a Flask-based application integrated with the Groq API to deliver curated Vedic quotes and send daily inspirations via automated email notifications.",
    technologies: ["Flask", "Groq API", "Python", "Email Automation"],
    role: "Full-Stack Developer",
    link: "",
    story: [
      "I built The Nectar Brew to bring ancient wisdom into everyday habit formation. My goal was to create a lightweight Flask experience that surfaced curated Vedic quotes with a modern daily email reminder.",
      "This project required balancing server-side content scheduling, API integration, and responsive UI design. I learned how to structure backend tasks reliably and deliver a delightful frontend experience.",
      "The biggest payoff was seeing the idea evolve from a simple quote generator into a meaningful daily routine tool that could inspire users each morning."
    ],
    images: []
  },
  {
    title: "My Instruments Newsletter App",
    category: "Full-Stack Development",
    description: "Built a responsive newsletter registration platform using Next.js and Tailwind CSS, integrating with Google Sheets API for subscriber data storage and management.",
    technologies: ["Next.js", "Tailwind CSS", "Google Sheets API", "JavaScript"],
    role: "Full-Stack Developer",
    link: "https://my-instruments.vercel.app/",
    story: [
      "I created this newsletter platform to simplify event communication using Google Sheets as a lightweight subscriber database. The challenge was to build a polished onboarding flow without a heavy CMS.",
      "I wrote Tailwind-powered pages and connected the form to Google Sheets with API calls that felt native and responsive. The result was a smooth registration experience for users and a maintenance-friendly backend for organizers.",
      "This project reinforced how much impact a good form journey has on conversion, especially in newsletter signup flows."
    ],
    images: []
  },
  {
    title: "Eisenhower Matrix Productivity App",
    category: "Automation & UI Development",
    description: "Created a Tkinter-based productivity tool to organize and visualize tasks using the Eisenhower Matrix framework. Automated desktop wallpaper updates using AppleScript and macOS LaunchAgents.",
    technologies: ["Python", "Tkinter", "AppleScript", "Automation"],
    role: "Software Developer",
    link: "https://github.com/pranavatpeaks/eisen-wallpaper-app.git",
    story: [
      "This productivity tool was born from my own need to organize tasks more clearly. I built the Eisenhower Matrix app in Python and added automated wallpaper updates to keep users motivated throughout the day.",
      "The integration with AppleScript and macOS LaunchAgents was a highlight; it turned a static task planner into an ambient productivity system that changed how people engaged with their workflows.",
      "I came away with a deeper appreciation for the small UX details that make automation feel intuitive and empowering."
    ],
    images: []
  },
  {
    title: "RShiny Lottery Predictor",
    category: "Data Science & Visualization",
    description: "Developed an interactive RShiny app that simulated lottery draws to analyze probability distributions and behavioral biases in gambling outcomes.",
    technologies: ["R", "RShiny", "Data Visualization", "Statistics"],
    role: "Data Analyst",
    link: "https://github.com/pranavatpeaks/649-Lottery-Predictor.git",
    story: [
      "The RShiny Lottery Predictor was an experiment in probability and visualization. I used simulation to expose how human biases can distort the way people perceive randomness.",
      "Building the app taught me how to translate statistical insight into interactive visuals that feel approachable for non-technical audiences.",
      "It was a great reminder that data science is as much about storytelling as it is about math."
    ],
    images: []
  },
  {
    title: "Moneyball Player Analysis",
    category: "Data Analytics",
    description: "Analyzed Major League Baseball data using SQLite, writing 12+ SQL queries to extract insights on player salaries and efficiency. Generated actionable insights for roster decisions.",
    technologies: ["Python", "Tkinter", "SQLite", "SQL"],
    role: "Data Analyst",
    link: "https://github.com/pranavatpeaks/MoneyBall-Analysis",
    story: [
      "This data analytics project helped me uncover insights about how roster value and player performance can reshape team strategy. I used SQL to surface patterns in salary efficiency and explain them through simple visual summaries.",
      "I learned that even in sports analytics, clear communication is what turns numbers into decisions. The project became a case study in making complex data feel compelling and practical.",
      "The experience sharpened my ability to build analytics pipelines and derive meaningful takeaways from large datasets."
    ],
    images: []
  },
  {
    title: "Disaster Resilience Skit – SDG 13 Climate Action",
    category: "Social Innovation & Sustainability",
    description: "Conceptualized and presented a creative skit blending traditional and modern methods for disaster resilience. Focused on sustainable community development and social inclusion.",
    technologies: ["Event Design", "Community Engagement"],
    role: "Team Lead",
    link: "https://www.canva.com/design/DAFmI7DZ5bU/QlAh7g5mwL00gtQ3Qyx_JQ/view?utm_content=DAFmI7DZ5bU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=had6f8d5c2a",
    story: [
      "The social innovation skit was a chance to blend storytelling with disaster resilience. I led the project concept and helped shape the narrative to show how sustainable community practices can strengthen climate action.",
      "I focused on making the message both emotional and educational, using stagecraft to bring abstract concepts to life for the audience.",
      "It taught me how creative formats can amplify technical ideas and motivate social change."
    ],
    images: []
  },
  {
    title: "Srusta - A healthcare equipment provider",
    category: "Machine Learning & Sustainability",
    description: "Developed a machine learning prototype addressing oxygen cylinder challenges during health emergencies. Collaborated in a cross-functional team as a designer and won first prize in the ML domain.",
    technologies: ["Python", "Machine Learning", "Figma"],
    role: "Web Designer",
    link: "https://www.figma.com/deck/Tuq91HTG5l56QkZX3hVGxE/TECK-HACK--3?node-id=1-27&t=cIIsYhFaIgl6gQ4S-1",
    story: [
      "The Srusta project taught me how to design for a real-world healthcare challenge. I contributed to a prototype that aimed to streamline oxygen equipment delivery in crisis conditions.",
      "Working with a cross-functional team helped me bring user empathy into a machine learning solution and communicate technical design choices clearly.",
      "The project reinforced how AI and ML can be applied responsibly in emergency response scenarios."
    ],
    images: []
  },
  {
    title: "nuovo bags - ads on green bags – HDSE Camp (Agastya Foundation)",
    category: "Social Entrepreneurship",
    description: "Designed a sustainable solution printing ads on paper bags as an alternative to plastic usage in weekly markets. Awarded second place for innovation and impact.",
    technologies: ["Design Thinking", "Sustainability", "Social Innovation"],
    role: "Team Lead",
    link: "https://www.figma.com/deck/3YAtpAv3EbbdAJEtxd0khM/Group-A---HDSE?node-id=55-250&t=cIIsYhFaIgl6gQ4S-1",
    story: [
      "The nuovo bags project let me combine sustainability with social entrepreneurship. We designed a low-cost alternative to plastic bags by printing ads on green paper bags and built a story around community adoption.",
      "I led the design and crafted the pitch to show how small behavioral nudges can reduce plastic waste at scale.",
      "This project reinforced the power of product design in creating sustainable everyday alternatives."
    ],
    images: []
  },
  {
    title: "Program Designer – AUNSF (AUISC Chapter)",
    category: "Event Design & Content Strategy",
    description: "Designed student workbooks along with AUISC R&D Team and coordinated documentaries exploring various domains to prompt SDGs.",
    technologies: ["Event Management", "Content Strategy"],
    role: "Program Designer, R&D Team",
    link: "https://www.canva.com/design/DAGsLjxAjQI/JZ8Kc8SofIPfZTDr9OQfSA/edit",
    story: [
      "As program designer, I developed workbooks and documentary content to showcase student-led research on sustainable development goals.",
      "The work was deeply collaborative; I coordinated with the R&D team to align visual storytelling with technical content.",
      "It broadened my understanding of how education design and research documentation can spark curiosity and action."
    ],
    images: []
  },
  {
    title: "CSR Summit – Branding & Communications Manager",
    category: "Event Branding & Strategy",
    description: "Led branding, communications, and documentation for a university CSR Summit. Created reports, newsletters, and visual identity materials to align with the event’s objectives.",
    technologies: ["Branding", "Communication Strategy", "Documentation"],
    role: "Branding & Communications Manager",
    link: "https://www.canva.com/design/DAGjXvVUp7s/oALezEVNvAJcwprmd1uRuw/view?utm_content=DAGjXvVUp7s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd9a6d42529",
    story: [
      "For the CSR Summit, I crafted the branding and communications roadmap to ensure the event told a cohesive story.",
      "I created visual identity assets, newsletter templates, and documentation that elevated the event’s social impact messaging.",
      "The project sharpened my ability to translate purpose-driven goals into polished branding and strategic content."
    ],
    images: []
  },
  {
  title: "Urban Ladder Test Automation Framework",
  category: "Software Testing & Automation",
  description: "Built a hybrid Selenium automation framework for Urban Ladder that automates end-to-end e-commerce user journeys using Page Object Model, Keyword-Driven, and Data-Driven testing. Supports parallel cross-browser execution with comprehensive reporting and CI/CD integration.",
  technologies: [
    "Java",
    "Selenium WebDriver",
    "TestNG",
    "Maven",
    "Apache POI",
    "Log4j2",
    "ExtentReports",
    "Allure Reports",
    "WebDriverManager",
    "Jenkins",
    "GitHub Actions"
  ],
  role: "Automation Test Engineer",
  link: "",
  story: [
    "Developed a scalable hybrid automation framework combining Page Object Model, Keyword-Driven, and Data-Driven testing methodologies to automate critical user workflows on Urban Ladder.",
    "Automated multiple end-to-end scenarios including bookshelf filtering, collections exploration, and gift card form validation while supporting parallel execution across Chrome, Edge, and Firefox browsers.",
    "Implemented reusable page objects, Excel-driven test execution, ThreadLocal WebDriver management, automated screenshot capture, logging, and rich reporting through ExtentReports and Allure.",
    "Integrated CI/CD pipelines using Jenkins and GitHub Actions to enable automated test execution, reporting, and maintainable regression testing at scale.",
    "This project strengthened my expertise in test automation architecture, framework design, cross-browser testing, reporting, and continuous integration practices."
  ],
  images: []
}
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const isDialogOpen = Boolean(selectedProject);

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

                      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Role:</span> {project.role}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => project.link && window.open(project.link, "_blank")}
                            disabled={!project.link}
                          >
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setSelectedProject(project)}
                          >
                            Read Journey
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        if (!open) setSelectedProject(null);
      }}>
        <DialogContent className="max-w-5xl overflow-hidden p-0 sm:p-0">
          {selectedProject ? (
            <div className="grid gap-6 bg-background sm:grid-cols-[1.3fr_0.7fr]">
              <div className="space-y-6 p-6 sm:p-8">
                <DialogHeader>
                  <DialogTitle className="text-3xl md:text-4xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    {selectedProject.category}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-5 text-sm leading-7 text-muted-foreground">
                  <p>{selectedProject.description}</p>
                  {selectedProject.story.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Role: <span className="font-medium text-foreground">{selectedProject.role}</span>
                    </p>
                  </div>
                  {selectedProject.link ? (
                    <Button
                      variant="secondary"
                      onClick={() => window.open(selectedProject.link, "_blank")}
                    >
                      Open Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  ) : null}
                </div>
              </div>

              {selectedProject.images.length > 0 ? (
                <div className="space-y-4 overflow-hidden border-l border-border bg-slate-950/80 p-6 sm:p-8">
                  {selectedProject.images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
                      <img
                        src={src}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="h-56 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center border-l border-border bg-[#09101c] p-6 text-center text-sm text-muted-foreground sm:p-8">
                  Add project images to the <code className="rounded bg-muted/20 px-2 py-1 text-xs text-foreground">images</code> array to show visual storytelling.
                </div>
              )}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};
