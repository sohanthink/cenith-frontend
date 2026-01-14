"use client";
import {
  ChevronDown,
  ChevronUp,
  Headphones,
  Package,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProtectionInfo = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-blue-600" />
          <span className="font-medium">Protection up to $30,000</span>
        </div>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Image src="/shop/bag-icon.svg" alt="bag" width={18} height={18} />
            <span>£ 3,000 bag coverage</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Headphones size={16} className="text-blue-600" />
            <span>24/7 customer support</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProtectionInfo;
