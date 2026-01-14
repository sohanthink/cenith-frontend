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
    <div className="border-b border-gray/50 pb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-green-600" />
          <span className="font-medium">Opening hours</span>
        </div>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-2">
          {hours.map((day, index) => (
            <div key={index} className="flex justify-between text-sm">
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
