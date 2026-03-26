import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

interface MenuItem {
  name: string;
  prices: string;
}

interface MenuSection {
  title: string;
  image: string;
  subtitle?: string;
  items: MenuItem[];
  note?: string;
}

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Helper: double every ₹ price in a price string
function doublePrice(priceStr: string): string {
  return priceStr.replace(/₹(\d+)/g, (_, num) => `₹${parseInt(num) * 2}`);
}

// Renders current price below a crossed-out doubled "original" price
function PriceDisplay({ prices }: { prices: string }) {
  const isFree = prices.toLowerCase() === "free";
  if (isFree) {
    return <span className="font-heading font-semibold text-green-500 whitespace-nowrap ml-4">Free</span>;
  }
  const original = doublePrice(prices);
  return (
    <span className="flex flex-col items-end ml-4 gap-0 min-w-max">
      <span className="text-xs text-muted-foreground/70 line-through leading-tight">{original}</span>
      <span className="font-heading font-semibold text-primary whitespace-nowrap leading-tight">{prices}</span>
    </span>
  );
}

const menuData: MenuSection[] = [
  {
    title: "Veg Pizza",
    image: "/images/categories/veg-pizza.png",
    subtitle: '7" Personal | 10" Medium',
    items: [
      { name: "Classic Margherita Pizza", prices: "₹120 | ₹310" },
      { name: "Corn Cheese Pizza", prices: "₹120 | ₹315" },
      { name: "Farmhouse Pizza", prices: "₹120 | ₹315" },
      { name: "Corn Exotica Pizza", prices: "₹120 | ₹325" },
      { name: "Veggie Lover Pizza", prices: "₹120 | ₹335" },
      { name: "Paneer Pineapple Pizza", prices: "₹120 | ₹335" },
      { name: "Veggie Delight Pizza", prices: "₹120 | ₹335" },
      { name: "Chatpata Paneer Pizza", prices: "₹120 | ₹340" },
      { name: "Paneer Tikka Pizza", prices: "₹120 | ₹340" },
      { name: "Tandoori Paneer Pizza", prices: "₹120 | ₹340" },
      { name: "Mom's Special Veg Pizza", prices: "₹120 | ₹340" },
      { name: "Maharani Veg Overloaded", prices: "₹120 | ₹340" },
    ],
  },
  {
    title: "Non-Veg Pizza",
    image: "/images/categories/non-veg-pizza.png",
    subtitle: '7" Personal | 10" Medium',
    items: [
      { name: "Chicken Tikka & Onion Pizza", prices: "₹140 | ₹300" },
      { name: "Barbecue Grilled Chicken Pizza", prices: "₹150 | ₹330" },
      { name: "Smoky Chicken Sausage Pizza", prices: "₹150 | ₹330" },
      { name: "Maharaja Chicken Pizza", prices: "₹150 | ₹330" },
      { name: "Chicken Sausage & Tikka Pizza", prices: "₹150 | ₹330" },
      { name: "Chicken Delight Pizza", prices: "₹150 | ₹330" },
      { name: "Chicken Maximus Pizza", prices: "₹150 | ₹330" },
      { name: "Mom's Special Non-Veg Pizza", prices: "₹150 | ₹330" },
      { name: "Chicken Feast", prices: "₹150 | ₹330" },
    ],
  },
  {
    title: "Choice of Crust",
    image: "/images/categories/crust.png",
    subtitle: "Extra",
    items: [
      { name: "Hand Made Regular Crust", prices: "Free" },
      { name: "Fresh Pan Toast", prices: "Free" },
      { name: "Thin Crust", prices: "Free" },
      { name: "Cheese Burst", prices: "₹40 | ₹70" },
    ],
  },
  {
    title: "Toast Garlic Bread",
    image: "/images/categories/garlic-bread.png",
    subtitle: "4 pcs",
    items: [
      { name: "Butter Garlic Bread", prices: "₹99" },
      { name: "Stuff Cheese Garlic Bread", prices: "₹119" },
      { name: "Veg Stuff Cheese Garlic Bread", prices: "₹128" },
      { name: "Chicken Stuff Cheese Garlic Bread", prices: "₹128" },
    ],
  },
  {
    title: "Fried Chicken",
    image: "/images/categories/fried-chicken.png",
    items: [
      { name: "Chicken Popcorn (10 pcs)", prices: "₹130" },
      { name: "Chicken Popcorn (15 pcs)", prices: "₹150" },
      { name: "Crispy Chicken Strips (10 pcs)", prices: "₹175" },
      { name: "Crispy Chicken Strips (15 pcs)", prices: "₹200" },
    ],
  },
  {
    title: "Non-Veg Burgers",
    image: "/images/categories/burgers.png",
    items: [
      { name: "Crispy Chicken Zinger Burger", prices: "₹100" },
      { name: "Chicken Single Patty Burger", prices: "₹119" },
      { name: "Chicken Double Patty Burger", prices: "₹129" },
      { name: "Maharaja Chicken Burger", prices: "₹139" },
      { name: "Mom's Special Chicken Burger", prices: "₹169" },
    ],
  },
  {
    title: "Veg Burgers",
    image: "/images/categories/burgers.png",
    items: [
      { name: "Crispy Veg Single Patty Burger", prices: "₹129" },
      { name: "Crispy Veg Double Patty Burger", prices: "₹189" },
    ],
    note: "Extra cheese — ₹20",
  },
  {
    title: "Non-Veg Grilled Sandwich",
    image: "/images/categories/sandwiches.png",
    subtitle: "with cheese / without cheese",
    items: [
      { name: "Crispy Chicken Sandwich", prices: "₹148 / ₹129" },
      { name: "Tandoori Chicken Sandwich", prices: "₹148 / ₹129" },
      { name: "Chicken Keema Sandwich", prices: "₹148 / ₹129" },
      { name: "Butter Chicken Sandwich", prices: "₹148 / ₹129" },
      { name: "Mom's Special Chicken Sandwich", prices: "₹148 / ₹129" },
    ],
  },
  {
    title: "Veg Grilled Sandwich",
    image: "/images/categories/sandwiches.png",
    subtitle: "with cheese / without cheese",
    items: [
      { name: "Mashed Potato Mayo Sandwich", prices: "₹148 / ₹129" },
      { name: "Paneer Makhani Sandwich", prices: "₹148 / ₹129" },
      { name: "Corn Cheese Sandwich", prices: "₹148 / ₹129" },
    ],
  },
  {
    title: "Veg Maggi",
    image: "/images/categories/maggi.png",
    items: [
      { name: "Veg Masala Fried Maggi", prices: "₹129" },
      { name: "Mushroom Masala Maggi", prices: "₹148" },
    ],
  },
  {
    title: "Non-Veg Maggi",
    image: "/images/categories/maggi.png",
    items: [
      { name: "Egg Masala Fried Maggi", prices: "₹148" },
      { name: "Chicken Masala Fried Maggi", prices: "₹148" },
      { name: "Maggi with Chicken Popcorn", prices: "₹148" },
    ],
    note: "Extra cheese — ₹30",
  },
  {
    title: "Desserts",
    image: "/images/categories/desserts.png",
    items: [{ name: "Hazelnut Brownie", prices: "₹70" }],
  },
  {
    title: "Beverages",
    image: "/images/categories/beverages.png",
    items: [
      { name: "Any PET Bottle 250ml", prices: "₹40" },
      { name: "Mineral Water 500ml", prices: "₹40" },
    ],
  },
];

export { menuData, slugify };

const FullMenu = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All", "Pizza", "Burger", "Sandwich", "Maggi", "Sides"];

  const filteredData = menuData
    .filter((section) => {
      if (activeFilter === "All") return true;
      if (activeFilter === "Pizza") return section.title.toLowerCase().includes("pizza") || section.title.includes("Crust");
      if (activeFilter === "Burger") return section.title.toLowerCase().includes("burger");
      if (activeFilter === "Sandwich") return section.title.toLowerCase().includes("sandwich");
      if (activeFilter === "Maggi") return section.title.toLowerCase().includes("maggi");
      if (activeFilter === "Sides") return ["Fried Chicken", "Toast Garlic Bread", "Desserts", "Beverages"].includes(section.title);
      return true;
    })
    .map((section) => {
      if (!searchQuery.trim()) return section;
      const q = searchQuery.toLowerCase();
      const matchedItems = section.items.filter((item) => item.name.toLowerCase().includes(q));
      if (matchedItems.length > 0) return { ...section, items: matchedItems };
      if (section.title.toLowerCase().includes(q)) return section;
      return null;
    })
    .filter(Boolean) as MenuSection[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeFilter, searchQuery]);

  return (
    <section id="full-menu" className="py-20 bg-transparent" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Full <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg">Something for everyone</p>
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-8 reveal">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-card border border-border/50 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-heading font-medium text-sm transition-all duration-300 ${activeFilter === f
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Menu sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredData.length === 0 && (
            <div className="text-center py-12 reveal visible">
              <p className="text-muted-foreground text-lg font-body">No items found for &ldquo;{searchQuery}&rdquo;</p>
            </div>
          )}
          {filteredData.map((section, si) => (
            <div
              key={section.title}
              id={slugify(section.title)}
              className="reveal bg-card/40 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ transitionDelay: `${si * 60}ms` }}
            >
              {/* Section header */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 px-6 py-4 border-b border-border/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-xl">
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <p className="text-muted-foreground text-sm">{section.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="divide-y divide-border/30">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="px-6 py-3 flex items-center justify-between group hover:bg-primary/[0.02] transition-colors duration-200"
                  >
                    <span className="font-body text-foreground group-hover:text-primary transition-colors duration-200 pr-2">
                      {item.name}
                    </span>
                    <PriceDisplay prices={item.prices} />
                  </div>
                ))}
              </div>

              {/* Note */}
              {section.note && (
                <div className="px-6 py-3 bg-secondary/10 text-sm text-muted-foreground font-body italic">
                  {section.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullMenu;
