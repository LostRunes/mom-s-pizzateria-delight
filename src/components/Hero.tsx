import { Button } from "@/components/ui/button";
import heroPizza from "@/assets/hero-pizza.png";

const floatingIngredients = [
  { emoji: "🍅", className: "top-[15%] left-[8%] animate-float text-4xl", delay: "0s" },
  { emoji: "🌿", className: "top-[25%] right-[10%] animate-float-reverse text-3xl", delay: "1s" },
  { emoji: "🫒", className: "bottom-[30%] left-[12%] animate-float text-2xl", delay: "0.5s" },
  { emoji: "🍄", className: "bottom-[20%] right-[8%] animate-float-reverse text-3xl", delay: "1.5s" },
  { emoji: "🧀", className: "top-[40%] left-[3%] animate-float text-2xl", delay: "2s" },
  { emoji: "🌶️", className: "top-[10%] right-[25%] animate-float-reverse text-2xl", delay: "0.8s" },
];

const steamLines = [0, 1, 2, 3, 4];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent"
    >
      {/* Oven glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full animate-glow-pulse"
          style={{
            background:
              "radial-gradient(ellipse, hsl(30 80% 55% / 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating ingredients */}
      {floatingIngredients.map((item, i) => (
        <span
          key={i}
          className={`absolute ${item.className} pointer-events-none select-none opacity-60`}
          style={{ animationDelay: item.delay }}
        >
          {item.emoji}
        </span>
      ))}

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
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 mx-auto lg:mx-0">
            Welcome to Mom's Pizzateria — where every slice feels like home.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="xl">
              🍕 View Menu
            </Button>
            <Button variant="heroOutline" size="xl">
              🛒 Order Now
            </Button>
          </div>
        </div>

        {/* Pizza */}
        <div className="flex-1 flex justify-center relative">
          {/* Steam */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4">
            {steamLines.map((i) => (
              <div
                key={i}
                className="w-1 h-8 bg-muted-foreground/10 rounded-full animate-steam"
                style={{
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${2 + i * 0.3}s`,
                }}
              />
            ))}
          </div>

          <div className="relative group cursor-pointer">
            <img
              src={heroPizza}
              alt="Delicious pizza from Mom's Pizzateria"
              className="w-[320px] md:w-[450px] lg:w-[500px] animate-pizza-spin drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
              style={{ animationDuration: "20s" }}
            />
            {/* Hover toppings pop */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="absolute top-[20%] left-[25%] text-3xl animate-float" style={{ animationDelay: "0s" }}>🍅</span>
              <span className="absolute top-[15%] right-[25%] text-3xl animate-float-reverse" style={{ animationDelay: "0.3s" }}>🌿</span>
              <span className="absolute bottom-[25%] left-[20%] text-2xl animate-float" style={{ animationDelay: "0.6s" }}>🧀</span>
              <span className="absolute bottom-[20%] right-[20%] text-2xl animate-float-reverse" style={{ animationDelay: "0.9s" }}>🫒</span>
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border-4 border-secondary/20 animate-glow-pulse pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-sm font-body">Scroll Down</span>
        <span className="text-xl">↓</span>
      </div> */}
    </section>
  );
};

export default Hero;
