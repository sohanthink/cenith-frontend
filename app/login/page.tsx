"use client";

import { useState } from "react";
import Step1YourDetails from "@/features/login/Step1YourDetails";
import Step2Business from "@/features/login/Step2Business";
import Step3Location from "@/features/login/Step3Location";
import Step4Describe from "@/features/login/Step4Describe";
import Step5BusinessHours from "@/features/login/Step5BusinessHours";
import FormSidebar from "@/features/login/FormSidebar";
import Step6Photos from "@/features/login/Step6Photos";

export interface FormData {
  // Step 1: Your Details
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  email: string;
  otpCode: string; // OTP verification code (5 digits)

  // Step 2: Business
  businessName: string;
  legalBusinessName: string;
  vatNumber: string;
  businessPhoneNumber: string;
  businessAddress: string;
  city: string;
  postalCode: string;
  dailyLuggageLimit: string;

  // Step 3: Location
  address: string;
  additionalInformation: string;

  // Step 4: Describe
  businessType: string;

  // Step 5: Business Hours
  businessHours: {
    [key: string]: {
      enabled: boolean;
      timeSlots: Array<{ start: string; end: string }>;
    };
  };

  // Step 6: Photos
  photos: File[];
}

const STEPS = [
  { id: 1, title: "Your Details" },
  { id: 2, title: "Business" },
  { id: 3, title: "Location" },
  { id: 4, title: "Describe" },
  { id: 5, title: "Business hour" },
  { id: 6, title: "Add Photos" },
];

export default function LoginPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    email: "",
    otpCode: "",
    businessName: "",
    legalBusinessName: "",
    vatNumber: "",
    businessPhoneNumber: "",
    businessAddress: "",
    city: "",
    postalCode: "",
    dailyLuggageLimit: "",
    address: "",
    additionalInformation: "",
    businessType: "",
    businessHours: {
      monday: { enabled: false, timeSlots: [] },
      tuesday: { enabled: false, timeSlots: [] },
      wednesday: { enabled: false, timeSlots: [] },
      thursday: { enabled: false, timeSlots: [] },
      friday: { enabled: false, timeSlots: [] },
      saturday: { enabled: false, timeSlots: [] },
      sunday: { enabled: false, timeSlots: [] },
    },
    photos: [],
  });

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    // Handle form submission here
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1YourDetails
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2Business
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 3:
        return (
          <Step3Location
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 4:
        return (
          <Step4Describe
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 5:
        return (
          <Step5BusinessHours
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 6:
        return (
          <Step6Photos
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center pt-20">
      <div className="w-full overflow-hidden flex">
        <FormSidebar
          steps={STEPS}
          currentStep={currentStep}
          title="Tel Us About Yourself"
        />
        <div className="flex-1 bg-white p-14 overflow-y-auto">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}
