import Image from "next/image";
import OrderButton from "./OrderButton";

export default function PrivacySecurity() {
  const items = [
    "Less risk of blocks by your internet provider",
    "More stable IPTV streams during peak hours",
    "Enhanced privacy when using IPTV",
    "No extra software or VPN needed",
    "Works directly on all your IPTV devices",
  ];

  return (
    <section id="privacy" className="bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative lg:flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src="/featured-image-2.webp"
                alt="Safe IPTV streaming privacy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-600 mb-4">🔒 Privacy First</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-6">Safe & Anonymous IPTV Streaming</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Your privacy is our priority. Our IPTV service includes network-level privacy protection so your viewing habits stay shielded. No data collection, no tracking — just worry-free streaming.
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
            <OrderButton>Try IPTV Now</OrderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
