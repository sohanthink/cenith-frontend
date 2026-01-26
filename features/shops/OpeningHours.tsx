"use client";
import { ChevronDown, ChevronUp, Clock } from "lucide-react";
import { useState } from "react";

const OpeningHours = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const hours = [
    "Friday 29 Nov",
    "Friday 29 Nov",
    "Friday 29 Nov",
    "Friday 29 Nov",
    "Friday 29 Nov",
    "Friday 29 Nov",
    "Friday 29 Nov",
  ];

  return (
    <div className="border-b border-gray/50 pb-4 sm:pb-5 md:pb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left gap-2"
      >
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-green-600 shrink-0" />
          <span className="font-medium">Opening hours</span>
        </div>
        {isExpanded ? (
          <ChevronUp size={18} className="shrink-0" />
        ) : (
          <ChevronDown size={18} className="shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-3 sm:mt-4 space-y-2">
          {hours.map((day, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-2 text-sm"
            >
              <span className="text-black">{day}</span>
              <span className="font-medium">8:00 am - 10:00 pm</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OpeningHours;
