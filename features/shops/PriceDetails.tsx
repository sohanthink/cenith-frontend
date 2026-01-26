"use client";
import Button from "@/components/common/Button";
import {
  Calendar,
  Check,
  ChevronRight,
  CreditCard,
  Minus,
  Plus,
  Tag,
  Clock,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const PriceDetails = ({ onNext }: { onNext: () => void }) => {
  const [bags, setBags] = useState(2);
  const [showPriceDetails, setShowPriceDetails] = useState(true);

  const bagPrice = 5.9;
  const fees = 11.8;
  const totalBagsPrice = bags * bagPrice;
  const total = totalBagsPrice + fees;

  return (
    <div>
      {/* Your booking section */}
      <h4 className="mb-4 sm:mb-5 md:mb-6 font-bold text-black">
        Your booking
      </h4>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <Image
            src="/shop/bag-icon.svg"
            alt="bag"
            width={18}
            height={18}
            className="shrink-0"
          />
          <p className="text-sm text-black">
            Bag,Suitcase, backpack, shopping bag
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setBags(Math.max(1, bags - 1))}
            className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-gray/50 rounded-full hover:border-primary transition-colors"
          >
            <Minus
              className="w-3 h-3 sm:w-4 sm:h-4"
              color="var(--color-primary)"
            />
          </button>
          <span className="text-sm font-medium text-accent text-nowrap min-w-[20px] text-center">
            {bags}
          </span>
          <button
            onClick={() => setBags(bags + 1)}
            className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-primary rounded-full hover:bg-opacity-90 transition-colors"
          >
            <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 border-b border-gray/30 pb-3 sm:pb-4">
        <div className="flex items-center gap-2 min-w-0">
          <Clock className="w-4 h-4 text-green-600 shrink-0" />
          <p className="text-sm text-black">Today. 8:00 Am-10:00 Pm</p>
        </div>
        <button className="text-primary hover:opacity-80 transition-opacity shrink-0">
          <Calendar className="w-4 h-4" />
        </button>
      </div>

      {/* Price details section */}
      <h4 className="mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-5 text-black">
        Price details
      </h4>

      <button
        onClick={() => setShowPriceDetails(!showPriceDetails)}
        className="flex items-center justify-between w-full mb-3 sm:mb-4 hover:opacity-80 transition-opacity cursor-pointer border-b border-gray/30 pb-3 sm:pb-4"
      >
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-primary shrink-0" />
          <span className="text-sm text-black">Price Details</span>
        </div>
        {showPriceDetails ? (
          <ChevronUp className="w-4 h-4 text-black shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-black shrink-0" />
        )}
      </button>

      {showPriceDetails && (
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-black">2 Regular bags ($5.90) x 1 day</p>
            <p className="text-sm text-black">$11.80</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-black">Fees</p>
            <p className="text-sm text-black">$11.80</p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
        <h5 className="text-black">Total</h5>
        <span className="text-base font-bold text-black">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Pay with section */}
      <h4 className="mb-4 sm:mb-5 md:mb-6 font-bold text-black">Pay with</h4>

      <button className="flex items-center justify-between w-full mb-4 sm:mb-5 md:mb-6 hover:opacity-80 transition-opacity border-b border-gray/30 pb-3 sm:pb-4">
        <div className="flex items-center gap-2 min-w-0">
          <CreditCard className="w-4 h-4 text-primary shrink-0" />
          <span className="text-sm text-black">Add Payment Method</span>
        </div>
        <ChevronRight className="w-4 h-4 text-black shrink-0" />
      </button>

      <Button
        onClick={onNext}
        className="w-full mb-3 sm:mb-4"
        variant="secondary"
        size="lg"
      >
        Continue to payment
      </Button>

      <p className="text-sm text-black">
        By continuing to payment, you accept Cenith&apos;s Terms of Service and
        Privacy Policy.
      </p>

      {/* Your booking includes section */}
      <h4 className="mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-5 text-black">
        Your booking includes
      </h4>
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span className="text-sm text-black">$5,000 bag protection</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span className="text-sm text-black">
            Cancel for free before bag drop-off
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span className="text-sm text-black">24/7 customer support</span>
        </div>
      </div>
    </div>
  );
};
export default PriceDetails;
