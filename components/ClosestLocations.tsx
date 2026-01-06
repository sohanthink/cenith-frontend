"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const ClosestLocations = () => {
  const [bags, setBags] = useState(1);
  return (
    <div className="flex items-center justify-between gap-2">
      <button
        onClick={() => setBags(Math.max(1, bags - 1))}
        className="w-6 h-6 flex items-center justify-center"
      >
        <Minus className="w-4 h-4" color="var(--color-yellow)" />
      </button>
      <span className="text-sm font-medium text-accent text-nowrap">{bags} Bags</span>
      <button
        onClick={() => setBags(bags + 1)}
        className="w-6 h-6 flex items-center justify-center"
      >
        <Plus className="w-4 h-4" color="var(--color-yellow)" />
      </button>
    </div>
  );
};

export default ClosestLocations;
