import { useEffect, useRef } from "react";

interface Category {
  name: string;
  image: string;
  color: string;
}

const categories: Category[] = [
  { name: "Veg Pizza", image: "/images/categories/veg-pizza.png", color: "from-primary/10 to-secondary/10" },
  { name: "Non-Veg Pizza", image: "/images/categories/non-veg-pizza.png", color: "from-primary/15 to-primary/5" },
  { name: "Burgers", image: "/images/categories/burgers.png", color: "from-secondary/15 to-secondary/5" },
  { name: "Sandwiches", image: "/images/categories/sandwiches.png", color: "from-accent/10 to-accent/5" },
  { name: "Fried Chicken", image: "/images/categories/fried-chicken.png", color: "from-primary/10 to-secondary/10" },
  { name: "Maggi", image: "/images/categories/maggi.png", color: "from-secondary/15 to-primary/5" },
  { name: "Garlic Bread", image: "/images/categories/garlic-bread.png", color: "from-secondary/10 to-secondary/5" },
  { name: "Desserts", image: "/images/categories/desserts.png", color: "from-crust/10 to-secondary/10" },
  { name: "Beverages", image: "/images/categories/beverages.png", color: "from-accent/10 to-accent/5" },
];

const MenuCategories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="specials" className="py-20 bg-transparent" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Signature <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Handcrafted with love, served with a smile
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="#menu"
              className={`reveal group relative bg-gradient-to-br ${cat.color} rounded-2xl p-6 md:p-8 text-center cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 border border-border/50`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm md:text-base">
                {cat.name}
              </h3>
              {/* Floating ingredient on hover */}
              <span className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-1">
                ✨
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
