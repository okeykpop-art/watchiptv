import { TESTIMONIALS } from "@/lib/data";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">What Our Customers Say</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">See what satisfied users have to say about our service.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:-translate-y-1">
              <Stars count={t.rating} />
              <p className="text-slate-500 text-sm leading-relaxed my-4">"{t.text}"</p>
              <div>
                <p className="text-slate-900 text-sm font-semibold">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
