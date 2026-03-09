import { useEffect, useRef, useState } from "react";

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

const menuData: MenuSection[] = [
  {
    title: "Veg Pizza",
    image: "/images/categories/veg-pizza.png",
    subtitle: '7" Personal | 10" Medium',
    items: [
      { name: "Classic Margherita Pizza", prices: "₹219 | ₹419" },
      { name: "Corn Cheese Pizza", prices: "₹229 | ₹449" },
      { name: "Farmhouse Pizza", prices: "₹229 | ₹449" },
      { name: "Corn Exotica Pizza", prices: "₹239 | ₹479" },
      { name: "Veggie Lover Pizza", prices: "₹249 | ₹499" },
      { name: "Paneer Pineapple Pizza", prices: "₹249 | ₹499" },
      { name: "Veggie Delight Pizza", prices: "₹249 | ₹499" },
      { name: "Chatpata Paneer Pizza", prices: "₹249 | ₹499" },
      { name: "Paneer Tikka Pizza", prices: "₹249 | ₹499" },
      { name: "Tandoori Paneer Pizza", prices: "₹249 | ₹499" },
      { name: "Mom's Special Veg Pizza", prices: "₹249 | ₹499" },
      { name: "Maharani Veg Overloaded", prices: "₹249 | ₹499" },
    ],
  },
  {
    title: "Non-Veg Pizza",
    image: "/images/categories/non-veg-pizza.png",
    subtitle: '7" Personal | 10" Medium',
    items: [
      { name: "Chicken Tikka & Onion Pizza", prices: "₹239 | ₹499" },
      { name: "Barbecue Grilled Chicken Pizza", prices: "₹249 | ₹549" },
      { name: "Smoky Chicken Sausage Pizza", prices: "₹249 | ₹549" },
      { name: "Maharaja Chicken Pizza", prices: "₹249 | ₹549" },
      { name: "Chicken Sausage & Tikka Pizza", prices: "₹249 | ₹549" },
      { name: "Chicken Delight Pizza", prices: "₹249 | ₹549" },
      { name: "Chicken Maximus Pizza", prices: "₹249 | ₹549" },
      { name: "Mom's Special Non-Veg Pizza", prices: "₹249 | ₹549" },
      { name: "Chicken Feast", prices: "₹249 | ₹549" },
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
      { name: "Cheese Burst", prices: "₹70 | ₹100" },
    ],
  },
  {
    title: "Toast Garlic Bread",
    image: "/images/categories/garlic-bread.png",
    subtitle: "4 pcs",
    items: [
      { name: "Butter Garlic Bread", prices: "₹119" },
      { name: "Stuff Cheese Garlic Bread", prices: "₹139" },
      { name: "Veg Stuff Cheese Garlic Bread", prices: "₹148" },
      { name: "Chicken Stuff Cheese Garlic Bread", prices: "₹148" },
    ],
  },
  {
    title: "Fried Chicken",
    image: "/images/categories/fried-chicken.png",
    items: [
      { name: "Chicken Popcorn (10 pcs)", prices: "₹148" },
      { name: "Chicken Popcorn (15 pcs)", prices: "₹219" },
      { name: "Crispy Chicken Strips (10 pcs)", prices: "₹299" },
      { name: "Crispy Chicken Strips (15 pcs)", prices: "₹399" },
    ],
  },
  {
    title: "Non-Veg Burgers",
    image: "/images/categories/burgers.png",
    items: [
      { name: "Crispy Chicken Zinger Burger", prices: "₹148" },
      { name: "Chicken Single Patty Burger", prices: "₹148" },
      { name: "Chicken Double Patty Burger", prices: "₹249" },
      { name: "Maharaja Chicken Burger", prices: "₹249" },
      { name: "Mom's Special Chicken Burger", prices: "₹249" },
    ],
  },
  {
    title: "Veg Burgers",
    image: "/images/categories/burgers.png",
    items: [
      { name: "Crispy Veg Single Patty Burger", prices: "₹139" },
      { name: "Crispy Veg Double Patty Burger", prices: "₹249" },
    ],
    note: "Extra cheese — ₹30",
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
    items: [{ name: "Hazelnut Brownie", prices: "₹129" }],
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

const FullMenu = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Pizza", "Burger", "Sandwich", "Maggi", "Sides"];

  const filteredData = menuData.filter((section) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Pizza") return section.title.toLowerCase().includes("pizza") || section.title.includes("Crust");
    if (activeFilter === "Burger") return section.title.toLowerCase().includes("burger");
    if (activeFilter === "Sandwich") return section.title.toLowerCase().includes("sandwich");
    if (activeFilter === "Maggi") return section.title.toLowerCase().includes("maggi");
    if (activeFilter === "Sides") return ["Fried Chicken", "Toast Garlic Bread", "Desserts", "Beverages"].includes(section.title);
    return true;
  });

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
  }, [activeFilter]);

  return (
    <section id="specials" className="py-20 bg-transparent" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Full <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg">Something for everyone</p>
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
          {filteredData.map((section, si) => (
            <div
              key={section.title}
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
                    <span className="font-body text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.name}
                    </span>
                    <span className="font-heading font-semibold text-primary whitespace-nowrap ml-4">
                      {item.prices}
                    </span>
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
