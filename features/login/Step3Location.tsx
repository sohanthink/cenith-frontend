"use client";

import { FormData } from "../../app/login/page";
import Button from "@/components/common/Button";
import Image from "next/image";
import Input from "@/components/common/Input";

interface Step3LocationProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
}

export default function Step3Location({
  formData,
  updateFormData,
  onNext,
}: Step3LocationProps) {
  const handleChange = (field: keyof FormData, value: string) => {
    updateFormData({ [field]: value });
  };

  const progress = 60; // Step 3 is 60% of total progress

  return (
    <div>
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <Image src="/logo-main.svg" alt="Logo" width={100} height={100} />
      </div>

      {/* Title */}
      <h3 className="mb-4">Confirm Your Location</h3>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-600">{progress}%</span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mb-6">
        <Input
          type="text"
          placeholder="1317 Edgewater Drive, Suite 6875"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          className="rounded-lg"
        />
      </div>

      {/* Map Display */}
      <div
        className="mb-8 bg-gray-100 rounded-lg overflow-hidden"
        style={{ height: "300px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14736.240867911744!2d88.42299!3d22.576226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1234567890"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
