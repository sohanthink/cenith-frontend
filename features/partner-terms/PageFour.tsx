"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, Info, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function PageFour() {
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", ""]);
  const [timer, setTimer] = useState(343); // 5:43 in seconds
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Email (you can pass this as prop in actual implementation)
  const userEmail = "info@sbrlam.com";

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format timer to MM:SS
  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOTPChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

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

    // Focus the last filled input or the last input
    const focusIndex = Math.min(pastedData.length, 4);
    otpInputRefs.current[focusIndex]?.focus();
  };

  const handleConfirm = () => {
    const otpCode = otpValues.join("");
    console.log("OTP Code:", otpCode);
    // Handle verification logic here
  };

  const handleResendCode = () => {
    // Reset OTP fields
    setOtpValues(["", "", "", "", ""]);
    setTimer(343); // Reset timer
    console.log("Resending OTP code...");
  };

  const handleSendSMS = () => {
    console.log("Sending OTP via SMS...");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Illustration */}
      <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-screen">
        <Image
          src="/suitcase-illustration.png"
          alt="Travel Illustration"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24">
        <div className="w-full max-w-md">
          {/* Back to Login Link */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-text hover:text-primary mb-6 sm:mb-7 md:mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <p>Back to login</p>
          </Link>

          {/* Title */}
          <h2 className="text-black mb-4 sm:mb-5 md:mb-6 mt-2 sm:mt-3">
            Enter The Confirmation Code
          </h2>

          {/* Subtitle */}
          <p className="text-text mb-2">Enter the code to confirm your email</p>

          {/* Email Display */}
          <p className="text-text font-medium mb-6 sm:mb-7 md:mb-8 text-sm break-all">
            {userEmail}
          </p>

          {/* OTP Input Fields */}
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-5 md:mb-6 justify-center items-center mx-auto w-full sm:w-4/5 md:w-2/3">
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
                className="w-10 h-14 sm:w-11 sm:h-[60px] md:w-12 md:h-16 text-center text-base sm:text-lg font-bold border-2 border-gray/50 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            ))}
          </div>

          {/* Confirm Button */}
          <Button
            onClick={handleConfirm}
            variant="primary"
            fullWidth
            className="mb-4 sm:mb-5 md:mb-6"
          >
            Confirm
          </Button>

          {/* Resend Code */}
          <div className="text-center mb-6 sm:mb-7 md:mb-8">
            <button
              onClick={handleResendCode}
              disabled={timer > 0}
              className="text-xs sm:text-sm text-gray"
            >
              Resend the confirmation code ({formatTimer(timer)})
            </button>
          </div>

          <div className="bg-himalayan-white rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
            <span className="text-text text-xs sm:text-sm">
              Didn&apos;t get the code?{" "}
              <button
                onClick={handleSendSMS}
                className="text-primary hover:underline font-medium"
              >
                try SMS
              </button>
            </span>
          </div>

          {/* SMS Alternative */}
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 flex items-start gap-2 sm:gap-3 mt-8 sm:mt-10 md:mt-12">
            <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h6 className="text-black font-semibold mb-1 text-sm sm:text-base">
                Get The Bounce Partner App On Your Phone Gettinfor
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                Get instant notification for all your booking with the app
              </p>
              <Link
                href="#"
                className="text-primary hover:underline font-medium text-xs sm:text-sm flex justify-end"
              >
                Get App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
