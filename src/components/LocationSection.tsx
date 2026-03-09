import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
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
    <section id="location" className="py-20 bg-card relative overflow-hidden" ref={sectionRef}>
      {/* Scooter animation */}
      <div className="absolute bottom-4 left-0 w-full pointer-events-none z-10">
        <span className="animate-scooter inline-block text-4xl" style={{ animationDuration: "12s" }}>
          🛵💨
        </span>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg flex items-center justify-center gap-2">
            <MapPin className="text-primary" size={20} />
            Come visit us for a warm, cheesy welcome!
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.487532353155!2d77.60830789781806!3d12.971598681729377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16709848e42f%3A0xc3f8f907e868c2d6!2sMom&#39;s%20Pizzeria!5e0!3m2!1sen!2sin!4v1710016625890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mom's Pizzateria Location"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/zHadvQ5qdsTjnvCA8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                <Navigation size={18} />
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
