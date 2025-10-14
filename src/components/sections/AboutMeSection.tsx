import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Download } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
};

const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Muted Batman emblem in the background (decorative) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-20">
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[36rem] md:w-[56rem] text-primary opacity-20 mix-blend-soft-light transform -rotate-6"
          aria-hidden="true"
        >
          <g fill="currentColor">
            <path d="M256 32c-20 0-40 8-56 24-16 16-24 36-24 56 0 20 8 40 24 56 16 16 36 24 56 24s40-8 56-24c16-16 24-36 24-56 0-20-8-40-24-56-16-16-36-24-56-24zm192 176c-8 4-18 8-28 10-24 6-54 8-82 8-12 0-24 0-36 2-8 0-16 0-24 0-8 0-16 0-24-2-12-2-24-2-36-2-28 0-58-2-82-8-10-2-20-6-28-10-8-4-14-8-20-6-8 2-12 12-12 22v2c0 64 52 116 116 116h176c64 0 116-52 116-116v-2c0-10-4-20-12-22-6-2-12 2-20 6z" />
            <path d="M48 320c0 0 52-16 96-32 44-16 92-24 128-24s84 8 128 24c44 16 96 32 96 32s-8 56-56 96c-24 20-68 44-152 44s-128-24-152-44c-48-40-56-96-56-96z" />
          </g>
        </svg>
      </div>

      <div className="container-responsive">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              About Me
            </h2>
            <div className="h-1 w-16 mx-auto bg-primary rounded-full shadow-glow"></div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              In the shadows of ambition lies purpose.
              I am Pranav Kothapalli, final year B.Tech (Data Science) at Anurag University — by day a student, by mission a problem-solver.
              In campus labs and society halls, I have worn many masks: leader in IUCEE & EPICS, branding strategist, innovator of sustainable impact.
              My real identity is not defined by titles, but by action. I seek to wield algorithms, data, and design not as trophies, but as tools — to create, to uplift, to engineer change.
              This is more than a portfolio — it's a signal. If you can see it, you are not just witnessing progress, but partnering in it.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button
              variant="secondary"
              size="default"
              onClick={() => window.open('/PK_Resume.pdf', '_blank')}
              className="min-w-[160px]"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>

            <Button
              variant="outline"
              size="default"
              onClick={() => (window.location.href = 'mailto:kothapallipranav90@gmail.com')}
              className="min-w-[160px]"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
