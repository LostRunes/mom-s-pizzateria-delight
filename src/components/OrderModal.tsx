import { useState } from "react";
import { X, Phone, Truck, Clock } from "lucide-react";

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
}

const OrderModal = ({ open, onClose }: OrderModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-card border border-border/50 rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="text-primary" size={36} />
          </div>

          <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
            Just Call Us! 📞
          </h3>
          <p className="text-muted-foreground font-body mb-6">
            Place your order with a quick call
          </p>

          <a
            href="tel:+917381459162"
            className="inline-block bg-primary text-primary-foreground font-heading font-bold text-2xl px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 mb-6"
          >
            📞 +91 73814 59162
          </a>

          <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full inline-flex items-center justify-center gap-2 mb-8 font-heading font-medium text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Currently only delivering in CAMPUS 25
          </div>

          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Truck size={18} className="text-accent" />
              <span className="font-body font-semibold">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock size={18} className="text-secondary" />
              <span className="font-body font-semibold">Available All Night</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
