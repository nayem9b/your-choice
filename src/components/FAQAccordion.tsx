"use client";

import { useState } from "react";
import { faqItems } from "@/data/products";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wide text-black text-center mb-8">
        Frequently asked questions
      </h2>
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span className="font-sans font-bold text-sm md:text-base text-black pr-4">
                {item.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 flex-shrink-0 text-black transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="font-serif text-sm text-slate-gray leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
