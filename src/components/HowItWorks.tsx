import OrderButton from "./OrderButton";

const STEPS = [
  {
    step: 1,
    title: "Place Your Order",
    description: "Choose your ideal subscription and complete the payment securely.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Activate Your Account",
    description: "You'll receive your login details by email within 5 minutes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Start Watching",
    description: "Start streaming on all your devices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 mb-4">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">Get Started in 3 Easy Steps</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Simple and fast — start watching within minutes.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative">

          {STEPS.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 border-blue-200 text-blue-600 mb-5 relative z-10 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                {step.icon}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 w-full relative z-10">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                  {step.step}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Step</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm mb-4">Need help? Our support team is available 24/7 via WhatsApp.</p>
          <OrderButton>Choose Your Plan</OrderButton>
        </div>
      </div>
    </section>
  );
}
