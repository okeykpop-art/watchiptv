"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Everything you want to know before choosing a subscription.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300">
              <button onClick={() => toggle(i)} className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group">
                <span className="text-slate-900 font-medium pr-4 group-hover:text-blue-600 transition-colors">{faq.question}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-out overflow-hidden ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
