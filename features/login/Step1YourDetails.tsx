"use client";

import { useState, useRef } from "react";
import { Eye, EyeOff, Info } from "lucide-react";
import { FormData } from "../../app/login/page";
import Button from "@/components/common/Button";
import Image from "next/image";
import Input from "@/components/common/Input";

interface Step1YourDetailsProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
}

export default function Step1YourDetails({
  formData,
  updateFormData,
  onNext,
}: Step1YourDetailsProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", ""]);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (field: keyof FormData, value: string) => {
    updateFormData({ [field]: value });
  };

  const handleEmailSubmit = () => {
    if (
      formData.email &&
      formData.firstName &&
      formData.lastName &&
      formData.phoneNumber &&
      formData.password
    ) {
      // Trigger OTP sending logic here
      setShowOTP(true);
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Update form data with complete OTP code
    const otpCode = newOtpValues.join("");
    updateFormData({ otpCode });

    // Auto-focus next input
    if (value && index < 4) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOTPKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 5);
    const newOtpValues = pastedData
      .split("")
      .concat(Array(5 - pastedData.length).fill(""));
    setOtpValues(newOtpValues);
    updateFormData({ otpCode: pastedData });

    // Focus the last filled input or the last input
    const focusIndex = Math.min(pastedData.length, 4);
    otpInputRefs.current[focusIndex]?.focus();
  };

  const handleResendCode = () => {
    // Reset OTP fields
    setOtpValues(["", "", "", "", ""]);
    updateFormData({ otpCode: "" });
    // Trigger resend logic here
    console.log("Resending OTP code...");
  };

  const handleSendSMS = () => {
    // Reset OTP fields
    setOtpValues(["", "", "", "", ""]);
    updateFormData({ otpCode: "" });
    // Trigger SMS sending logic here
    console.log("Sending OTP via SMS...");
  };

  const handleVerifyOTP = () => {
    const otpCode = otpValues.join("");
    if (otpCode.length === 5) {
      updateFormData({ otpCode });
      onNext();
    }
  };

  const progress = showOTP ? 46 : 20; // Progress changes when OTP is shown

  return (
    <div>
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <Image src="/logo-main.svg" alt="Logo" width={100} height={100} />
      </div>

      {!showOTP ? (
        <>
          {/* Title */}
          <h3 className="mb-4">Your Details</h3>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#DC3545] rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-600">
                {progress}%
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 mb-8">
            <Input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="rounded-lg"
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="rounded-lg"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              className="rounded-lg"
            />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="rounded-lg"
            />
          </div>

          {/* Next Step Button */}
          <Button
            onClick={handleEmailSubmit}
            variant="primary"
            fullWidth
            className="bg-primary hover:bg-opacity-90 rounded-lg py-3 text-white font-medium"
          >
            Next Step
          </Button>
        </>
      ) : (
        <>
          {/* OTP Verification Section */}
          <h3 className="mb-4">OTP Verification</h3>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FDCB6E] rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-600">
                {progress}%
              </span>
            </div>
          </div>

          {/* OTP Instructions */}
          <div className="mb-6">
            <h4 className="mb-2">Enter The Confirmation Code</h4>
            <p className="text-text text-sm">
              Enter the code to confirm your email.
            </p>
          </div>

          {/* OTP Input Fields */}
          <div className="flex gap-6 mb-6 justify-center items-center mx-auto w-2/3">
            {otpValues.map((value, index) => (
              <Input
                key={index}
                ref={(el) => {
                  otpInputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={value}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                onKeyDown={(e) => handleOTPKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-16 text-center text-lg font-bold border-2 border-gray/50 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            ))}
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerifyOTP}
            variant="primary"
            fullWidth
            className="mb-4"
          >
            Verify & Proceed
          </Button>

          {/* Resend Code Link */}
          <div className="text-center mb-10">
            <span className="text-text text-sm">
              Didn&apos;t Get A Code?{" "}
              <button
                onClick={handleResendCode}
                className="text-primary hover:underline font-medium"
              >
                Click To Resend
              </button>
            </span>
          </div>

          {/* SMS Alternative */}
          <div className="bg-himalayan-white rounded-lg p-4 flex items-center gap-3">
            <Info className="w-5 h-5 text-primary shrink-0" />
            <span className="text-text text-sm">
              Didn&apos;t get the code?{" "}
              <button
                onClick={handleSendSMS}
                className="text-primary hover:underline font-medium"
              >
                try SMS
              </button>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
