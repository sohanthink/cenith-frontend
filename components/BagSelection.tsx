"use client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const BagSelection = () => {
  const [bags, setBags] = useState({
    small: 2,
    regular: 4,
    oddSized: 2,
  });

  const updateBagCount = (type: string, delta: number) => {
    setBags((prev) => ({
      ...prev,
      [type as keyof typeof bags]: Math.max(
        0,
        prev[type as keyof typeof bags] + delta,
      ),
    }));
  };
  return (
    <div className="px-4 sm:px-5 md:px-6">
      <p className="text-lg font-semibold text-black mb-3 sm:mb-4">
        Choose the number and type of bags
      </p>

      <div className="space-y-2 sm:space-y-3">
        {/* Small Bags */}
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-3 sm:p-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-primary shrink-0">
              <Image
                src="/small-bag.png"
                alt="small bag"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-gray-900">Small</div>
              <div className="text-xs text-gray-500">Purses, tote bags</div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => updateBagCount("small", -1)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Minus className="w-3 h-3 text-gray-600" />
            </button>
            <span className="w-6 sm:w-7 text-center text-sm font-medium">
              {bags.small}
            </span>
            <button
              onClick={() => updateBagCount("small", 1)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-3 h-3 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Regular Bags */}
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-3 sm:p-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-primary shrink-0">
              <Image
                src="/small-bag.png"
                alt="small bag"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-gray-900">Regular</div>
              <div className="text-xs text-gray-500">Suitcases, backpacks</div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => updateBagCount("regular", -1)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Minus className="w-3 h-3 text-gray-600" />
            </button>
            <span className="w-6 sm:w-7 text-center text-sm font-medium">
              {bags.regular}
            </span>
            <button
              onClick={() => updateBagCount("regular", 1)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-3 h-3 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Odd-sized Bags */}
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-3 sm:p-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-primary shrink-0">
              <Image
                src="/small-bag.png"
                alt="small bag"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-gray-900">Odd-sized</div>
              <div className="text-xs text-gray-500">
                Surfboards, bikes, golf bags
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => updateBagCount("oddSized", -1)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Minus className="w-3 h-3 text-gray-600" />
            </button>
            <span className="w-6 sm:w-7 text-center text-sm font-medium">
              {bags.oddSized}
            </span>
            <button
              onClick={() => updateBagCount("oddSized", 1)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-3 h-3 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagSelection;
