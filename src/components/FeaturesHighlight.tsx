"use client";

import Image from "next/image";
import OrderButton from "./OrderButton";

export default function FeaturesHighlight() {
  const items = [
    "VOD with English subtitles",
    "Clear TV guide (EPG) for easy planning",
    "Replay to catch up on missed programs",
    "PPV events including sports and live concerts",
    "Works on Smart TV, Android, iOS, laptop and more",
  ];

  return (
    <section id="why-us" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-6">
              The Ultimate IPTV Service of 2026 — All Channels in 4K & Ultra HD
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Get unlimited access to movies, series, sports and a wide selection of international TV channels. Watch in smooth FHD and 4K quality, optimized for all your devices.
            </p>

            <ul className="space-y-4 mb-10">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-slate-500">{item}</span>
                </li>
              ))}
            </ul>

            <OrderButton>View Plans</OrderButton>
          </div>

          <div className="relative lg:flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src="/featured-image-1.webp"
                alt="IPTV service features"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
