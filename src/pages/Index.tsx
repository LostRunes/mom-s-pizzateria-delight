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
import { Pizza } from "lucide-react";

const Index = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{name: string, prices: string} | null>(null);

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
      <Navbar onOrderClick={() => { setSelectedItem(null); setShowOrderPopup(true); }} />
      <Hero onOrderClick={() => { setSelectedItem(null); setShowOrderPopup(true); }} />
      <MenuCategories />
      <ScrollingReviews />
      <FullMenu onItemClick={(item) => { setSelectedItem(item); setShowOrderPopup(true); }} />
      <LocationSection />
      <ContactSection />
      <Footer />
      <OrderModal open={orderModalOpen} onClose={closeOrderModal} />

      {/* Floating Order Button */}
      {showFloatingBtn && (
        <button
          onClick={() => { setSelectedItem(null); setShowOrderPopup(true); }}
          className="fixed bottom-6 right-4 z-50 flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-700 text-black font-heading font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-black/30 hover:scale-110 active:scale-95 transition-all duration-200 text-sm"
        >
          <Pizza size={20} className="text-black" strokeWidth={2.5} /> Order Now
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
              {/* Black Pizza icon logo on white background for visibility */}
              <div className="mb-1 animate-pizza-spin" style={{ animationDuration: "8s" }}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary/20">
                  <Pizza size={36} className="text-black" strokeWidth={2.5} />
                </div>
              </div>

              {/* Title & Price Information */}
              <div>
                <h3 className="font-heading font-bold text-white text-2xl leading-tight mb-2">
                  {selectedItem ? `Order ${selectedItem.name}` : "Ready to Order?"}
                </h3>
                {selectedItem ? (
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-white/50 text-[11px] uppercase tracking-wider font-medium">Available at 50% off for only</p>
                    <div className="px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-700 text-black font-heading font-black text-xl shadow-xl shadow-black/30 transform hover:scale-105 transition-all">
                      {selectedItem.prices}
                    </div>
                  </div>
                ) : (
                  <p className="text-white/50 text-xs tracking-wide">Fresh & hot to your doorstep</p>
                )}
              </div>

              {/* Divider */}
              <div className="w-16 h-px bg-primary/40" />

              {/* Call to action */}
              <div className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-white/60 text-xs mb-1 uppercase tracking-widest">To place your order</p>
                <p className="text-white/80 text-sm mb-3">Call us now at</p>
                <a
                  href="tel:+917381459162"
                  className="inline-flex items-center gap-2 text-primary font-heading font-bold text-xl hover:brightness-110 transition-all mb-1"
                >
                  📞 +91 73814 59162
                </a>
              </div>

              {/* Discount code & Instructions */}
              <div className="w-full bg-primary/10 border border-primary/30 rounded-2xl px-5 py-4 space-y-3">
                <div className="flex flex-col items-center">
                  <p className="text-white/60 text-[10px] mb-1 uppercase tracking-widest leading-none">Use Discount Code</p>
                  <div
                    className="px-4 py-1 rounded-xl font-heading font-black text-primary text-lg tracking-[0.2em] border border-primary/40 bg-primary/10"
                    style={{ letterSpacing: "0.25em" }}
                  >
                    KIITO
                  </div>
                </div>
                
                <div className="pt-1 border-t border-primary/10">
                  <p className="text-white/70 text-xs leading-relaxed">
                    Say the code <span className="text-primary font-bold">KIITO</span> on call to avail 50% discount!
                  </p>
                  <p className="text-green-400 font-medium text-xs mt-1">
                    FREE Delivery to Campus 25
                  </p>
                </div>
              </div>
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
