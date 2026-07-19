"use client";

import { useState } from "react";
import { faqItems } from "@/data/products";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-5 lg:px-8 py-14 lg:py-20 scroll-mt-40">
      <div className="text-center mb-10">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-muted font-medium mb-3">
          Support
        </p>
        <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "border-foreground/20 bg-surface"
                : "border-border hover:border-foreground/10"
            }`}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span className="font-sans text-[13px] md:text-sm font-semibold text-foreground/80 pr-4 group-hover:text-foreground transition-colors">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-foreground border-foreground rotate-180"
                    : "group-hover:border-foreground/30"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-3.5 w-3.5 transition-colors duration-300 ${
                    openIndex === index ? "text-white" : "text-foreground/40"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-48" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5">
                <p className="font-serif text-sm text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
