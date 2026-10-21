import React, { useState } from 'react';
import { FAQS } from '../data/salonData';
import { ChevronDownIcon, SparklesIcon } from './Icons';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#28101E] relative border-t border-[#3D1426]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#321422] border border-[#5A243D] text-[#E6C280] text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5 text-[#E6C280]" />
            Questions & Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Everything You Need <span className="font-script text-[#E6C280] font-normal lowercase text-5xl sm:text-7xl px-2">to Know</span>
          </h2>
          <p className="mt-3 text-[#D4BCC7] text-sm sm:text-base max-w-xl mx-auto">
            Clear information on consultations, appointments, bridal packages, and treatments at Spalon.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const numStr = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-[#321422] border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#E6C280]/60 shadow-lg' : 'border-[#5A243D] hover:border-[#881337]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-sm font-light text-[#E6C280] tracking-widest">{numStr}</span>
                    <span className="font-serif text-base sm:text-lg text-white group-hover:text-[#F4CCD8] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full border transition-all duration-300 shrink-0 ${
                    isOpen 
                      ? 'rotate-180 bg-[#1B0A13] text-[#E6C280] border-[#E6C280]' 
                      : 'bg-[#1B0A13] text-[#D4BCC7] border-[#5A243D] group-hover:border-[#E6C280]'
                  }`}>
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-[#D4BCC7] text-sm leading-relaxed border-t border-[#4A1A30] ml-9">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
