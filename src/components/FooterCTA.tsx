import { SITE, NAV_LINKS } from "@/lib/config";
import OrderButton from "./OrderButton";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "DMCA", href: "#" },
];

export default function FooterCTA() {
  return (
    <>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">Ready to Try IPTV?</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            Discover a user-friendly IPTV solution. Choose a plan that fits your needs and start watching with clear terms and support when you need it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
              View Plans →
            </a>
            <OrderButton className="!bg-transparent !border !border-blue-300 !text-blue-600 hover:!bg-blue-50 !py-3">Contact via WhatsApp</OrderButton>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <span>🔒 Secure Payment</span>
            <span>📋 Clear Terms</span>
            <span>💬 Support Available</span>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            <div>
              <a href="#" className="flex items-center gap-2 text-xl font-black tracking-tight text-slate-900 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">W</span>
                {SITE.name}
              </a>
              <p className="text-slate-500 text-sm leading-relaxed">Premium IPTV subscription service. Quality, speed, and service — optimized for European viewers.</p>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Menu</h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}><a href={link.href} className="text-slate-500 text-sm hover:text-slate-900 transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Contact</h4>
              <ul className="space-y-2.5">
                <li><a href={`mailto:${SITE.email}`} className="text-slate-500 text-sm hover:text-slate-900 transition-colors">{SITE.email}</a></li>
                <li><a href={`tel:${SITE.phone}`} className="text-slate-500 text-sm hover:text-slate-900 transition-colors">{SITE.phone}</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-slate-200">
            <p className="text-slate-400 text-sm">&copy; 2026 {SITE.name}. Premium IPTV Subscriptions.</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {FOOTER_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="text-slate-400 hover:text-slate-500 transition-colors">{link.label}</a>
              ))}
            </div>
          </div>
          <p className="text-slate-400 text-xs mt-6 leading-relaxed max-w-3xl">
            {SITE.name} does not host or stream any copyrighted content. All content is provided by external providers. Users are responsible for compliance with applicable laws in their jurisdiction.
          </p>
        </div>
      </footer>
    </>
  );
}
