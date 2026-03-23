import { Star } from "lucide-react";

const reviewItems = [
  {
    type: "review",
    text: "Really loved it!",
    author: "Shashwat Joshi",
  },
  {
    type: "review",
    text: "Great Pizzas",
    author: "Sayan Pal",
  },
  {
    type: "marketing",
    text: "You will forget Dominos when you taste our pizzas 🍕",
  },
  {
    type: "review",
    text: "Far better than any other pizzeria",
    author: "Pratyusha Mohanty",
  },
  {
    type: "marketing",
    text: "KFC Zinger ❌ Our Zinger Burger ✅",
  },
  {
    type: "review",
    text: "Mitro, Best Solution for night cravings",
    author: "Modi Ji",
  },
  {
    type: "marketing",
    text: "Taste our brownie hot and fresh 🍫",
  },
  {
    type: "review",
    text: "Order karo bhaijaan jldi, you wont regret",
    author: "Rehman Dakait",
  },
  {
    type: "review",
    text: "dude I order everyday (its true 💀)",
    author: "Subham Shah",
  },
  {
    type: "review",
    text: "Absolutely addicted to these pizzas",
    author: "Tywin Lannister",
  },
];

const ScrollingReviews = () => {
  return (
    <section className="py-12 bg-primary/5 border-y border-border/50 relative overflow-hidden flex items-center">
      {/* Gradient masks for smooth fade in/out */}
      <div className="absolute left-0 w-24 md:w-48 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 w-24 md:w-48 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee container */}
      <div className="flex w-max flex-nowrap animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex gap-6 px-3 items-center flex-shrink-0 flex-nowrap shrink-0">
            {reviewItems.map((item, index) => (
              <div
                key={`${groupIndex}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[350px] bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col justify-center gap-2 transition-transform duration-300 hover:scale-105"
              >
                {item.type === "review" ? (
                  <>
                    <div className="flex text-amber-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="font-heading font-bold text-foreground text-lg leading-tight">
                      "{item.text}"
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      — {item.author}
                    </p>
                  </>
                ) : (
                  <p className="font-heading font-bold text-primary text-xl leading-tight text-center py-2 relative flex items-center justify-center h-full gap-2">
                    <span className="text-2xl animate-pulse">✨</span>
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollingReviews;
