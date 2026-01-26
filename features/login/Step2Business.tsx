"use client";

import { FormData } from "../../app/login/page";
import Button from "@/components/common/Button";
import Image from "next/image";
import Input from "@/components/common/Input";

interface Step2BusinessProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
}

export default function Step2Business({
  formData,
  updateFormData,
  onNext,
}: Step2BusinessProps) {
  const handleChange = (field: keyof FormData, value: string) => {
    updateFormData({ [field]: value });
  };

  const progress = 40; // Step 2 is 40% of total progress

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
      <h3 className="mb-3 sm:mb-4">Your Business Details</h3>

      {/* Progress Bar */}
      <div className="mb-6 sm:mb-7 md:mb-8">
        <div className="flex items-center gap-3 sm:gap-4 mb-2">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FDCB6E] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 shrink-0">
            {progress}%
          </span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7 md:mb-8">
        <Input
          type="text"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={(e) => handleChange("businessName", e.target.value)}
          className="rounded-lg"
        />
        <div>
          <Input
            type="text"
            placeholder="Legal Business Name*"
            value={formData.legalBusinessName}
            onChange={(e) => handleChange("legalBusinessName", e.target.value)}
            className="rounded-lg"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="VAT Number / Tax Code"
            value={formData.vatNumber}
            onChange={(e) => handleChange("vatNumber", e.target.value)}
            className="rounded-lg"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Business Phone Number"
            value={formData.businessPhoneNumber}
            onChange={(e) =>
              handleChange("businessPhoneNumber", e.target.value)
            }
            className="rounded-lg"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Business Address*"
            value={formData.businessAddress}
            onChange={(e) => handleChange("businessAddress", e.target.value)}
            className="rounded-lg"
          />
        </div>
        <Input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) => handleChange("city", e.target.value)}
          className="rounded-lg"
        />
        <Input
          type="text"
          placeholder="Postal Code (ZIP Code)"
          value={formData.postalCode}
          onChange={(e) => handleChange("postalCode", e.target.value)}
          className="rounded-lg"
        />
        <Input
          type="text"
          placeholder="Daily Luggage Limit"
          value={formData.dailyLuggageLimit}
          onChange={(e) => handleChange("dailyLuggageLimit", e.target.value)}
          className="rounded-lg"
        />
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
