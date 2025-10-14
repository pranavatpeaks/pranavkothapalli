import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lightning from '@/components/Lightning';

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Lightning Effect */}
      <div className="absolute inset-0 opacity-30">
        <Lightning
          hue={45}
          xOffset={0}
          speed={0.55}
          intensity={0.4}
          size={2}
        />
      </div>

      {/* Dark overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-background/80"></div> */}

      {/* Gotham Silhouette Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,400 L100,350 L150,380 L200,340 L250,360 L300,320 L350,340 L400,300 L450,320 L500,280 L550,300 L600,260 L650,280 L700,240 L750,260 L800,220 L850,240 L900,200 L950,220 L1000,180 L1050,200 L1100,160 L1150,180 L1200,140 L1200,800 L0,800 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div> */}
      
      <div className="container-responsive relative z-10 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8"
        >
          {/* Left column: Text (left-aligned) */}
          <motion.div variants={itemVariants} className="space-y-4 text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tight">
              Pranav Kothapalli
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full shadow-glow"></div>

            <p className="text-lg md:text-l font-sans font-light text-muted-foreground  leading-relaxed tracking-wide max-w-xl">
              "It's not who I am underneath, but what I do that defines me."
              <cite className="block text-sm md:text-sm text-muted-foreground font-normal italic mt-2">
                  – Bruce Wayne / Batman, Batman Begins
              </cite>
            </p>
          </motion.div>

          {/* Right column: CTAs + Socials (right-aligned) */}
          <motion.div variants={itemVariants} className="flex flex-col items-end">
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-end items-center pt-8">
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open("/PK_Resume.pdf", "_blank")}
                className="min-w-[200px]"
              >
                Explore My Work
              </Button>
              <Button
                variant="heroBorder"
                size="lg"
                onClick={scrollToProjects}
                className="min-w-[200px] group"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 justify-end pt-8">
              <a
                href="https://linkedin.com/in/pranavkothapalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-md"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:kothapallipranav90@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-md"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-muted-foreground" size={32} />
      </motion.div>
    </section>
  );
};
