import { Button } from "@/components/ui/button";
import heroPizza from "@/assets/hero-pizza.png";

interface HeroProps {
  onOrderClick: () => void;
}

const Hero = ({ onOrderClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20 lg:pt-24"
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

      {/* ── Desktop layout ── */}
      <div className="container mx-auto px-4 relative z-10 hidden lg:flex flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 text-shadow-warm">
            Hot, Fresh &<br />
            <span className="text-primary">Made With Love</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 mx-auto lg:mx-0">
            Welcome to Mom's Pizzateria — where every slice feels like home.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#menu-categories">
              <Button variant="hero" size="xl">🍕 View Menu</Button>
            </a>
            <Button variant="heroOutline" size="xl" onClick={onOrderClick}>🛒 Order Now</Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-12 rounded-full bg-primary/10 blur-[80px] animate-pulse pointer-events-none" />
            <div className="absolute -inset-8 rounded-full bg-secondary/5 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
            <div className="absolute -inset-6 rounded-full border border-primary/40 blur-sm animate-pizza-spin pointer-events-none" style={{ animationDuration: "25s" }} />
            <div className="absolute -inset-4 rounded-full border-2 border-primary shadow-[0_0_40px_rgba(245,94,71,0.8),inset_0_0_20px_rgba(245,94,71,0.4)] animate-pizza-spin-reverse pointer-events-none" style={{ animationDuration: "20s" }} />
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

      {/* ── Mobile layout ── */}
      <div className="lg:hidden flex flex-col items-center text-center px-5 relative z-10 w-full animate-slide-up pt-12 pb-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-foreground leading-tight mb-4 text-shadow-warm">
          Hot, Fresh &<br />
          <span className="text-primary">Made With Love</span>
        </h1>

        <p className="text-sm text-muted-foreground max-w-xs mb-8">
          Welcome to Mom's Pizzateria — where every slice feels like home.
        </p>



        {/* Pizza animation — large & centred */}
        <div className="relative flex justify-center mb-12">
          <div className="relative group cursor-pointer">
            {/* Glow */}
            <div className="absolute -inset-10 rounded-full bg-primary/10 blur-[70px] animate-pulse pointer-events-none" />
            {/* Outer slow ring */}
            <div
              className="absolute rounded-full border border-primary/35 blur-[1px] animate-pizza-spin pointer-events-none"
              style={{ inset: "-22px", animationDuration: "25s" }}
            />
            {/* Inner glowing ring */}
            <div
              className="absolute rounded-full border-2 border-primary shadow-[0_0_30px_rgba(245,94,71,0.8),inset_0_0_15px_rgba(245,94,71,0.3)] animate-pizza-spin-reverse pointer-events-none"
              style={{ inset: "-12px", animationDuration: "20s" }}
            />
            <img
              src={heroPizza}
              alt="Delicious pizza from Mom's Pizzateria"
              className="w-[310px] animate-pizza-spin drop-shadow-2xl relative z-10"
              style={{ animationDuration: "20s" }}
            />
          </div>
        </div>

        {/* FREE Delivery */}
        <p className="text-sm font-heading font-semibold text-primary mb-1 tracking-wide">
          🚀 FREE Delivery in Campus 25
        </p>

        {/* Discount line */}
        <p className="text-xs font-heading font-medium text-foreground/80 mb-5 tracking-wide">
          🎉 Available at <span className="text-primary font-bold">50% Discount</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <a href="#menu-categories" className="w-full">
            <Button variant="hero" size="lg" className="w-full text-sm py-2.5">
              🍕 View Menu
            </Button>
          </a>
          <Button variant="heroOutline" size="lg" className="w-full text-sm py-2.5" onClick={onOrderClick}>
            🛒 Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
