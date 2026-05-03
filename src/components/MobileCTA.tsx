"use client";

import { useEffect, useState } from "react";
import OrderButton from "./OrderButton";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 px-4 py-3 animate-slide-up">
      <div className="flex items-center gap-3">
        <a href="#pricing" className="flex-1 text-center rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-900 text-sm hover:bg-slate-50 transition-colors cursor-pointer">
          View Plans
        </a>
        <OrderButton className="flex-1 !py-3 text-sm">Order Now</OrderButton>
      </div>
    </div>
  );
}
