"use client";

import { useState, useRef, useEffect } from "react";
import { PRICING_DATA } from "@/lib/data";
import OrderButton from "./OrderButton";

export default function Pricing() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [activePlan, setActivePlan] = useState(1);
  const plans = PRICING_DATA[activeScreen];
  const screens = PRICING_DATA;
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el || typeof window === "undefined" || window.innerWidth >= 1024) return;
    const handleScroll = () => {
      const cardWidth = el.clientWidth - 32;
      const index = Math.round(el.scrollLeft / (cardWidth + 16));
      setActivePlan(Math.min(index, plans.plans.length - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [activeScreen, plans.plans.length]);

  const scrollToPlan = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth - 32;
    el.scrollTo({ left: index * (cardWidth + 16), behavior: "smooth" });
    setActivePlan(index);
  };

  return (
    <section id="pricing" className="bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 mb-4">
            IPTV Subscription
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">
            Choose the Plan That Fits You
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Affordable IPTV subscriptions with instant activation
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl p-1 border border-slate-200">
            {screens.map((screen, i) => (
              <button
                key={i}
                onClick={() => { setActiveScreen(i); setActivePlan(1); }}
                className={`px-3 sm:px-6 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${i === activeScreen ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-900"}`}
              >
                {screen.label}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="lg:hidden relative">
          <button
            onClick={() => scrollToPlan(Math.max(0, activePlan - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all cursor-pointer"
            aria-label="Previous plan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => scrollToPlan(Math.min(plans.plans.length - 1, activePlan + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all cursor-pointer"
            aria-label="Next plan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div ref={sliderRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-8 pt-5 pb-4" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
            {plans.plans.map((plan) => (
              <div key={plan.id} className="min-w-[calc(100vw-32px)] sm:min-w-[380px] snap-center">
                <PricingCard plan={plan} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {plans.plans.map((_, i) => (
              <button key={i} onClick={() => scrollToPlan(i)} className={`h-2.5 rounded-full transition-all cursor-pointer ${i === activePlan ? "w-6 bg-blue-600" : "w-2.5 bg-slate-300"}`} />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mt-6">Prices are exclusive of VAT.</p>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: typeof PRICING_DATA[0]["plans"][0] }) {
  const isBest = plan.badge === "Best Value";
  return (
    <div className={`relative rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${isBest ? "border-blue-300 bg-white ring-1 ring-blue-200 shadow-lg" : "border-slate-200 bg-white"}`}>
      {plan.badge && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold ${isBest ? "bg-blue-600 text-white" : "bg-blue-600 text-white"}`}>
          {isBest && "⭐ "}{plan.badge}
        </div>
      )}

      <div className="p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{plan.duration}</h3>
        <p className="text-slate-400 text-sm mb-4">{plan.subtitle}</p>
        <div className="mb-1"><span className="text-4xl font-black tracking-tight text-slate-900">{plan.price}</span></div>
        <p className="text-slate-400 text-sm mb-2">Only {plan.monthlyPrice}/month</p>
        {plan.savings && (
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 mb-6">{plan.savings}</span>
        )}
        {!plan.savings && <div className="mb-6" />}

        <ul className="space-y-3 mb-8">
          {plan.features.map((feat, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 flex-shrink-0 mt-0.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-slate-500">{feat}</span>
            </li>
          ))}
        </ul>

        <OrderButton planId={plan.id} className="w-full">{isBest ? "Order Now" : "Choose Plan"}</OrderButton>
        <p className="text-center text-xs text-slate-400 mt-3">14-day money-back guarantee</p>
      </div>
    </div>
  );
}
