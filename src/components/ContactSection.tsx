import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Craving something delicious? Give us a call!
          </p>

          <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-lg">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-primary" size={32} />
            </div>
            <p className="text-3xl font-heading font-bold text-foreground mb-6">
              📞 07381459162
            </p>
            <a href="tel:07381459162">
              <Button variant="hero" size="xl" className="w-full max-w-xs">
                <Phone size={18} />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
