"use client";
import { faqs } from "@/data/homeData";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Faq = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <section className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
      <div>
        <div>
          <h2 className="text-center text-black mb-14">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b-2 border-b-text/50 pb-5">
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <h4
                      className={`${
                        expandedFaq === faq.id ? "text-primary" : "text-black"
                      }`}
                    >
                      0{faq.id}
                    </h4>
                    <h4
                      className={`${
                        expandedFaq === faq.id ? "text-primary" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </h4>
                  </div>
                  {expandedFaq === faq.id ? (
                    <Minus
                      className={`${
                        expandedFaq === faq.id ? "text-primary" : "text-black"
                      } w-4 h-4`}
                    />
                  ) : (
                    <Plus
                      className={`${
                        expandedFaq === faq.id ? "text-primary" : "text-black"
                      } w-4 h-4`}
                    />
                  )}
                </button>

                {expandedFaq === faq.id && (
                  <p className="px-5 pb-5 text-black pt-4">{faq.answer}</p>
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
