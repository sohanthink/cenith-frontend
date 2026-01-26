"use client";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const reviews = [
    { name: "Traveler", date: "November 2024", rating: 5 },
    { name: "Annoula", date: "November 2024", rating: 5 },
    { name: "Anne", date: "November 2024", rating: 5 },
  ];

  return (
    <div className="border-b border-gray/50 pb-4 sm:pb-5 md:pb-6 my-6 sm:my-8 md:my-10">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left gap-2"
      >
        <div className="flex items-center gap-2">
          <Star size={18} className="text-yellow fill-yellow shrink-0" />
          <span className="font-medium">Review and Rating</span>
        </div>
        {isExpanded ? (
          <ChevronUp size={18} className="shrink-0" />
        ) : (
          <ChevronDown size={18} className="shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-3 sm:mt-4 space-y-3">
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="font-medium text-sm">{review.name}</div>
              <div className="text-xs text-black mb-1">{review.date}</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow fill-yellow shrink-0"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
