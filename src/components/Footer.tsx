const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-heading text-3xl font-bold text-primary-foreground mb-2">
            Mom's Pizzateria 🍕
          </h3>
          <p className="text-primary-foreground/60 font-body text-lg mb-8 italic">
            "Serving slices of happiness."
          </p>

          <div className="flex justify-center gap-8 mb-8">
            {[
              { label: "Menu", href: "#menu-categories" },
              { label: "Location", href: "#location" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/60 hover:text-primary transition-colors duration-300 font-body"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-primary-foreground/40 font-body text-sm mb-2">
            📞 +91 73814 59162
          </p>
          <p className="text-primary-foreground/30 font-body text-xs">
            © 2026 KIITO. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
