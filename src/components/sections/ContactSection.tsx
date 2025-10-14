import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Let's Connect
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto shadow-glow"></div>
            <p className="text-lg md:text-l font-sans font-light text-muted-foreground  leading-relaxed tracking-wide max-w-x">
              "Let's build something meaningful. Something you will love. Forever."
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="space-y-6 w-full max-w-2xl">
              <Card className="p-6 hover:shadow-lg transition-all w-full max-w-md mx-auto">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:kothapallipranav90@gmail.com"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    kothapallipranav90@gmail.com
                  </a>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all align-top w-full max-w-md mx-auto">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+917893283559"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    +91 7893283559
                  </a>
                </div>
              </Card>

              <div className="flex justify-center gap-4 pt-4">
                <a
                  href="https://linkedin.com/in/pranavkothapalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center justify-center gap-2 shadow-md min-w-[140px]"
                >
                  <Linkedin size={20} />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center justify-center gap-2 shadow-md min-w-[140px]"
                >
                  <Github size={20} />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="block w-full max-w-md mx-auto"
                onClick={() => window.open("/PK_Resume.pdf", "_blank")}
              >
                Download Résumé
              </Button>
            </div>

            {/* <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message (min 10 characters)"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={errors.message ? "border-destructive" : ""}
                    rows={5}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent" : "Send Message"}
                </Button>
              </form>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};
