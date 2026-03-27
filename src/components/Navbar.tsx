import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Pizza } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu-categories" },
  { label: "Specials", href: "#full-menu" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onOrderClick: () => void;
}

const Navbar = ({ onOrderClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg shadow-2xl py-2"
          : "bg-black/20 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="font-heading text-2xl font-bold flex items-center gap-2">
          <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
            Mom's Pizzateria
          </span>
          <Pizza className="text-black" size={28} strokeWidth={2.5} />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <Button variant="hero" size="default" onClick={onOrderClick}>
            Order Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-slide-up">
          <div className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body font-semibold text-foreground/80 hover:text-primary text-lg"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="lg" onClick={() => { setMobileOpen(false); onOrderClick(); }}>
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
