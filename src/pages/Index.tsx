import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuCategories from "@/components/MenuCategories";
import ScrollingReviews from "@/components/ScrollingReviews";
import FullMenu from "@/components/FullMenu";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Aurora from "@/components/Aurora";
import OrderModal from "@/components/OrderModal";

const Index = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const openOrderModal = () => setOrderModalOpen(true);
  const closeOrderModal = () => setOrderModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setShowFloatingBtn(rect.bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
        <Aurora
          colorStops={["#ffa366", "#f55e47", "#ffe2db"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      <Navbar onOrderClick={() => setShowOrderPopup(true)} />
      <Hero onOrderClick={() => setShowOrderPopup(true)} />
      <MenuCategories />
      <ScrollingReviews />
      <FullMenu />
      <LocationSection />
      <ContactSection />
      <Footer />
      <OrderModal open={orderModalOpen} onClose={closeOrderModal} />

      {/* Floating Order Button */}
      {showFloatingBtn && (
        <button
          onClick={() => setShowOrderPopup(true)}
          className="fixed bottom-6 right-4 z-50 flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-primary/50 hover:scale-110 active:scale-95 transition-all duration-200 text-sm animate-bounce-slow"
          style={{ animation: "pulse 2s infinite" }}
        >
          🛒 Order
        </button>
      )}

      {/* Centered Order Popup with blurred backdrop */}
      {showOrderPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          onClick={(e) => { if (e.target === e.currentTarget) setShowOrderPopup(false); }}
          style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.55)" }}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl animate-slide-up"
            style={{
              background: "linear-gradient(135deg, rgba(30,12,8,0.97) 0%, rgba(50,18,8,0.97) 100%)",
              border: "1px solid rgba(245,94,71,0.4)",
              boxShadow: "0 0 60px rgba(245,94,71,0.3), 0 30px 60px rgba(0,0,0,0.5)"
            }}
          >
            {/* Top accent glow bar */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

            {/* Close button */}
            <button
              onClick={() => setShowOrderPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-lg transition-all duration-200"
            >
              ✕
            </button>

            <div className="px-7 pt-7 pb-8 flex flex-col items-center text-center gap-4">
              {/* Pizza emoji big */}
              <div className="text-5xl mb-1 animate-pizza-spin" style={{ animationDuration: "8s" }}>🍕</div>

              {/* Title */}
              <div>
                <h3 className="font-heading font-bold text-white text-2xl leading-tight mb-1">
                  Ready to Order?
                </h3>
                <p className="text-white/50 text-xs tracking-wide">Fresh & hot to your doorstep</p>
              </div>

              {/* Divider */}
              <div className="w-16 h-px bg-primary/40" />

              {/* Call to action */}
              <div className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-white/60 text-xs mb-1 uppercase tracking-widest">To place your order</p>
                <p className="text-white/80 text-sm mb-2">Give us a call at</p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-primary font-heading font-bold text-xl hover:brightness-110 transition-all"
                >
                  📞 +91 98765 43210
                </a>
              </div>

              {/* Discount code */}
              <div className="w-full bg-primary/10 border border-primary/30 rounded-2xl px-5 py-4">
                <p className="text-white/60 text-xs mb-2 uppercase tracking-widest">Exclusive Discount</p>
                <div className="flex items-center justify-center gap-3">
                  <div
                    className="px-4 py-1.5 rounded-xl font-heading font-black text-primary text-lg tracking-[0.2em] border border-primary/50"
                    style={{ background: "rgba(245,94,71,0.08)", letterSpacing: "0.25em" }}
                  >
                    KIITO
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-2">To avail at the given discounted price, say the code <span className="text-primary font-bold">KIITO</span> on call while placing order</p>
              </div>

              {/* Bottom note */}
              <p className="text-white/30 text-[10px] text-center leading-relaxed">
                📍 Currently delivering in Campus 25 only
              </p>
            </div>

            {/* Bottom accent */}
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
