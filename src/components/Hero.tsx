import { Button } from "@/components/ui/button";
import heroPizza from "@/assets/hero-pizza.png";

interface HeroProps {
  onOrderClick: () => void;
}

const Hero = ({ onOrderClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent"
    >
      {/* Flour particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`flour-${i}`}
          className="absolute w-1.5 h-1.5 bg-secondary/30 rounded-full animate-flour pointer-events-none"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${30 + Math.random() * 50}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 text-shadow-warm">
            Hot, Fresh &<br />
            <span className="text-primary">Made With Love</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-4 mx-auto lg:mx-0">
            Welcome to Mom's Pizzateria — where every slice feels like home.
          </p>
          <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full inline-flex items-center gap-2 mb-8 mx-auto lg:mx-0 font-heading font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Currently only delivering in CAMPUS 25
          </div>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#menu-categories">
              <Button variant="hero" size="xl">
                🍕 View Menu
              </Button>
            </a>
            <Button variant="heroOutline" size="xl" onClick={onOrderClick}>
              🛒 Order Now
            </Button>
          </div>
        </div>

        {/* Pizza */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative group cursor-pointer">
            {/* Professional Glowing Rings */}
            <div className="absolute -inset-12 rounded-full bg-primary/10 blur-[80px] animate-pulse pointer-events-none" />
            <div className="absolute -inset-8 rounded-full bg-secondary/5 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />

            <div className="absolute -inset-6 rounded-full border border-primary/40 blur-sm animate-pizza-spin pointer-events-none"
              style={{ animationDuration: "25s" }} />

            <div className="absolute -inset-4 rounded-full border-2 border-primary shadow-[0_0_40px_rgba(245,94,71,0.8),inset_0_0_20px_rgba(245,94,71,0.4)] animate-pizza-spin-reverse pointer-events-none"
              style={{ animationDuration: "20s" }} />

            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-cheese/10 blur-2xl animate-pulse pointer-events-none" />

            <img
              src={heroPizza}
              alt="Delicious pizza from Mom's Pizzateria"
              className="w-[320px] md:w-[450px] lg:w-[500px] animate-pizza-spin drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 relative z-10"
              style={{ animationDuration: "20s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
