"use client";

import { useState, useEffect } from "react";
import OrderButton from "./OrderButton";

const STATS = [
  { num: "24", suffix: "K+", label: "Channels" },
  { num: "125", suffix: "K", label: "VOD Library" },
  { num: "4", suffix: "K", label: "Ultra HD" },
  { num: "99", suffix: "%", label: "Uptime" },
];

const PILLS = [
  { emoji: "🎬", label: "Movies" },
  { emoji: "📺", label: "Series" },
  { emoji: "⚽", label: "Football" },
  { emoji: "🏆", label: "Sports" },
  { emoji: "📡", label: "Live TV" },
  { emoji: "🎭", label: "Kids" },
  { emoji: "🎵", label: "Music" },
];

const ROTATING_WORDS = [
  "Live Sports",
  "Blockbuster Movies",
  "Premium Series",
  "4K Quality",
  "24/7 Support",
];

export default function Hero() {
  const [activePill, setActivePill] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white" style={{ minHeight: "85vh" }}>

      <svg width="0" height="0" className="absolute">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
          />
        </filter>
      </svg>

      <div className="absolute inset-0 pointer-events-none" style={{ filter: "url(#gooey)" }}>
        <div
          className="absolute rounded-full bg-blue-600"
          style={{
            width: 300,
            height: 300,
            opacity: 0.5,
            animation: "goo-move-1 20s infinite alternate ease-in-out",
          }}
        />
        <div
          className="absolute rounded-full bg-blue-400"
          style={{
            width: 300,
            height: 300,
            opacity: 0.5,
            animation: "goo-move-2 25s infinite alternate ease-in-out",
          }}
        />
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: 300,
            height: 300,
            opacity: 0.5,
            animation: "goo-move-3 30s infinite alternate ease-in-out",
          }}
        />
      </div>

      {/* Gradient veil — smooths blobs across the full viewport */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.2) 50%, transparent 80%)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-12 lg:pb-16 z-10">
        <div className="w-full text-center">
          <div className="fade-up-1 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-blink" />
            Premium IPTV Streaming
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-blink" style={{ animationDelay: "0.6s" }} />
          </div>

          <h1 className="fade-up-2 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[0.9] mb-6">
            Your Premium IPTV
          </h1>

          <div className="fade-up-3 text-2xl sm:text-4xl font-bold text-slate-900 mb-4">
            for{" "}
            <span className="text-blue-600">
              {ROTATING_WORDS[wordIndex]}
            </span>
          </div>

          <p className="fade-up-4 text-lg sm:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed mb-10">
            Movies · TV Series · Live Sports · 4K Quality — all in one place. No buffering. No limits.
          </p>

          <div className="fade-up-5 flex items-center justify-center gap-8 sm:gap-12 mb-10">
            {STATS.map((stat, i) => (
              <div key={i} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-10 bg-slate-200" />}
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 leading-none">
                    {stat.num}
                    <span className="text-blue-600">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-up-6 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-wider text-sm rounded-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 transition-all cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span className="w-4 h-4 bg-white flex-shrink-0" style={{ clipPath: "polygon(15% 0%, 100% 50%, 15% 100%)" }} />
              <span className="relative z-10">Start Watching</span>
            </a>
            <OrderButton className="!bg-transparent !border !border-slate-300 !text-slate-600 hover:!bg-slate-50 hover:!border-slate-400 !py-4 !px-8 !text-sm !font-bold !uppercase !tracking-wider">
              View Packages
            </OrderButton>
          </div>

          <div className="fade-up-7 flex flex-wrap items-center justify-center gap-2">
            {PILLS.map((pill, i) => (
              <button
                key={i}
                onClick={() => setActivePill(i)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                  i === activePill
                    ? "border-blue-300 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700"
                }`}
              >
                {pill.emoji} {pill.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
