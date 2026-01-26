"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Faq = ({
  faqsData,
}: {
  faqsData: { id: number; question: string; answer: string }[];
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
      <div>
        <div>
          <h2 className="text-center text-black mb-8 sm:mb-12 md:mb-14 px-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {faqsData.map((faq) => (
              <div
                key={faq.id}
                className="border-b-2 border-b-text/50 pb-3 sm:pb-4 md:pb-5"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                  className="w-full flex items-center justify-between p-3 sm:p-4 md:p-5 text-left hover:bg-gray-50 transition-colors gap-3 sm:gap-4"
                >
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                    <h4
                      className={`shrink-0 ${
                        expandedFaq === faq.id ? "text-primary" : "text-black"
                      }`}
                    >
                      0{faq.id}
                    </h4>
                    <h4
                      className={`${
                        expandedFaq === faq.id ? "text-primary" : "text-black"
                      } text-left`}
                    >
                      {faq.question}
                    </h4>
                  </div>
                  <div className="shrink-0">
                    {expandedFaq === faq.id ? (
                      <Minus
                        className={`${
                          expandedFaq === faq.id ? "text-primary" : "text-black"
                        } w-4 h-4 sm:w-5 sm:h-5`}
                      />
                    ) : (
                      <Plus
                        className={`${
                          expandedFaq === faq.id ? "text-primary" : "text-black"
                        } w-4 h-4 sm:w-5 sm:h-5`}
                      />
                    )}
                  </div>
                </button>

                {expandedFaq === faq.id && (
                  <p className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 text-black pt-2 sm:pt-3 md:pt-4 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
