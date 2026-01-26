"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const ClosestLocations = () => {
  const [bags, setBags] = useState(1);
  return (
    <div className="flex items-center justify-between gap-1.5 sm:gap-2">
      <button
        onClick={() => setBags(Math.max(1, bags - 1))}
        className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Decrease bag count"
      >
        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" color="var(--color-yellow)" />
      </button>
      <span className="text-xs sm:text-sm font-medium text-accent whitespace-nowrap">
        {bags} Bags
      </span>
      <button
        onClick={() => setBags(bags + 1)}
        className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Increase bag count"
      >
        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" color="var(--color-yellow)" />
      </button>
    </div>
  );
};

export default ClosestLocations;
