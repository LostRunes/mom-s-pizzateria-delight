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

              {/* Marketing & Instructions Premium UI */}
              <div className="w-full relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-black via-primary/10 to-black p-5 shadow-[0_0_30px_rgba(245,94,71,0.15)]">
                {/* Decorative background glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
                <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none"></div>
                
                <div className="relative flex flex-col items-center text-center space-y-4">
                  {/* The Comparison Highlight */}
                  <div className="flex flex-col items-center w-full">
                    <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 px-4 py-1 text-[10px] font-black tracking-widest uppercase mb-3 border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                      Unbeatable Value 💥
                    </div>
                    
                    <p className="text-white/90 text-sm font-medium leading-snug">
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-yellow-400 font-black text-2xl mb-1 drop-shadow-sm">
                        50% Cheaper
                      </span>
                      than Swiggy & Zomato
                    </p>
                    
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                      <span className="text-white/60 text-[10px] uppercase tracking-wide">Compare only on</span>
                      <span className="text-white font-bold text-xs bg-white/10 px-1.5 py-0.5 rounded shadow-sm">kiito app</span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-1"></div>
                  
                  {/* Delivery & Call to order */}
                  <div className="w-full flex flex-col items-center gap-2.5">
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-widest">
                      Just call us & place order!
                    </p>
                    
                    <div className="flex items-center gap-2.5 bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10 border border-green-500/30 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                      <span className="text-xl drop-shadow-md pb-1">🛵</span>
                      <p className="text-green-400 font-black text-[12px] uppercase tracking-wide">
                        Free Delivery to Campus 25
                      </p>
                    </div>
                    
                    <div className="mt-1 flex items-center justify-center w-full">
                      <div className="flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full text-yellow-400/90 font-semibold text-[10px] uppercase tracking-widest shadow-[0_0_10px_rgba(234,179,8,0.1)]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-500"></span>
                        </span>
                        Currently only delivers in Campus 25
                      </div>
                    </div>
                  </div>
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
