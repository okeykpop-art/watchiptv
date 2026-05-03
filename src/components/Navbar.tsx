"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, SITE } from "@/lib/config";
import OrderButton from "./OrderButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-16 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-slate-900 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
W
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <OrderButton className="!py-2 !px-4 text-sm" />
        </div>

        <button
          className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-5 h-4">
            <span className={`absolute left-0 block h-0.5 w-5 bg-current transform transition-all duration-300 ${mobileOpen ? "rotate-45 top-1.5" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 block h-0.5 w-5 bg-current transform transition-all duration-300 ${mobileOpen ? "-rotate-45 top-1.5" : "top-3"}`} />
          </div>
        </button>
      </div>

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-white border-l border-slate-200 shadow-2xl transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col p-6 pt-20 gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-lg text-slate-500 hover:text-slate-900 transition-colors py-2" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <OrderButton className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
