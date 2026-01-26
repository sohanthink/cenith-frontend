"use client";

import {
  Utensils,
  Scissors,
  Smile,
  Bike,
  Coffee,
  Car,
  Store,
  IceCream,
  WashingMachine,
  Zap,
  Dumbbell,
  Wind,
  Bed,
  Luggage,
  Building,
  Printer,
  Pill,
  ShoppingBag,
  FileText,
} from "lucide-react";
import { FormData } from "../../app/login/page";
import Button from "@/components/common/Button";
import Image from "next/image";

interface Step4DescribeProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
}

const BUSINESS_TYPES = [
  { id: "bar", label: "Bar", icon: Utensils },
  { id: "barber", label: "Barber Shop", icon: Scissors },
  { id: "beauty", label: "Beauty Salon", icon: Smile },
  { id: "bike", label: "Bike Rental", icon: Bike },
  { id: "cafe", label: "Cafe", icon: Coffee },
  { id: "car", label: "Car Rental", icon: Car },
  { id: "convenience", label: "Convenience Store", icon: Store },
  { id: "dessert", label: "Dessert Shop", icon: IceCream },
  { id: "drycleaner", label: "Dry Cleaner", icon: WashingMachine },
  { id: "electronics", label: "Electronics Store", icon: Zap },
  { id: "fitness", label: "Fitness Center", icon: Dumbbell },
  { id: "hair", label: "Hair Salon", icon: Wind },
  { id: "hotel", label: "Hotel", icon: Bed },
  { id: "luggage", label: "Luggage Storage", icon: Luggage },
  { id: "office", label: "Office", icon: Building },
  { id: "print", label: "Print Shop", icon: Printer },
  { id: "pharmacy", label: "E Pharmacy", icon: Pill },
  { id: "restaurant", label: "Restaurant", icon: Utensils },
  { id: "retail", label: "Retail Store", icon: ShoppingBag },
  { id: "other", label: "Other", icon: FileText },
];

export default function Step4Describe({
  formData,
  updateFormData,
  onNext,
}: Step4DescribeProps) {
  const handleSelect = (businessType: string) => {
    updateFormData({ businessType });
  };

  const progress = 80; // Step 4 is 80% of total progress

  return (
    <div>
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
        <Image
          src="/logo-main.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
        />
      </div>

      {/* Title */}
      <h3 className="mb-3 sm:mb-4">Describe Your Business</h3>

      {/* Progress Bar */}
      <div className="mb-6 sm:mb-7 md:mb-8">
        <div className="flex items-center gap-3 sm:gap-4 mb-2">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 shrink-0">
            {progress}%
          </span>
        </div>
      </div>

      {/* Business Type Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
        {BUSINESS_TYPES.map((type) => {
          const Icon = type.icon;
          const isSelected = formData.businessType === type.id;
          return (
            <button
              key={type.id}
              onClick={() => handleSelect(type.id)}
              className={`p-3 sm:p-4 border-2 rounded-lg transition-all flex flex-col items-center gap-1.5 sm:gap-2 cursor-pointer ${
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Icon
                className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${isSelected ? "text-[#1A73E8]" : "text-gray-600"}`}
              />
              <span
                className={`text-xs sm:text-sm font-medium text-center ${isSelected ? "text-[#1A73E8]" : "text-gray-700"}`}
              >
                {type.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Next Step Button */}
      <Button
        onClick={onNext}
        variant="primary"
        fullWidth
        className="bg-primary hover:bg-opacity-90 rounded-lg py-3 text-white font-medium"
      >
        Next Step
      </Button>
    </div>
  );
}
