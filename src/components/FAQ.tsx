import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, ShieldAlert } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 text-gray-900 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-deep/10 border border-violet-royal/20 text-xs font-semibold text-violet-royal uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-gold-muted" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-violet-deep">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm font-light mt-4">
            Have questions about our root-cause methods, confidentiality protocols, or booking mechanics? Find clarity below.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-violet-royal/20"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="font-display font-semibold text-gray-900 group-hover:text-violet-royal text-sm sm:text-base transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-lg bg-gray-50 group-hover:bg-violet-deep/5 transition-colors shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-violet-royal" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-light border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-violet-deep text-white border border-violet-royal/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4 text-left">
            <ShieldAlert className="w-6 h-6 text-gold-muted shrink-0 mt-1" />
            <div>
              <h4 className="font-display font-bold text-white text-sm sm:text-base">Confidentiality Guarantee</h4>
              <p className="text-xs text-lavender-brand/80 font-light mt-1">
                Your private life circumstances, karmic challenges, and session recordings are kept fully guarded. Testimonials are only shared anonymously with explicit seeker permission.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
