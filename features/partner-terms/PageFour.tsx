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
    <div className="flex h-screen">
      {/* Left Side - Illustration */}
      <div className="w-1/2">
        <Image
          src="/suitcase-illustration.png"
          alt="Travel Illustration"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-1/2 bg-white flex items-center justify-center p-24">
        <div className="w-full">
          {/* Back to Login Link */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-text hover:text-primary mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <p>Back to login</p>
          </Link>

          {/* Title */}
          <h2 className="text-black mb-6 mt-3">Enter The Confirmation Code</h2>

          {/* Subtitle */}
          <p className="text-text mb-2">Enter the code to confirm your email</p>

          {/* Email Display */}
          <p className="text-text font-medium mb-8 text-sm">{userEmail}</p>

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

          {/* Confirm Button */}
          <Button
            onClick={handleConfirm}
            variant="primary"
            fullWidth
            className="mb-6"
          >
            Confirm
          </Button>

          {/* Resend Code */}
          <div className="text-center mb-8">
            <button
              onClick={handleResendCode}
              disabled={timer > 0}
              className="text-sm text-gray"
            >
              Resend the confirmation code ({formatTimer(timer)})
            </button>
          </div>

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

          {/* SMS Alternative */}
          <div className="bg-white shadow-md rounded-lg p-5 flex items-start gap-3 mt-12">
            <div className="shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h6 className="text-black font-semibold mb-1">
                Get The Bounce Partner App On Your Phone Gettinfor
              </h6>
              <p className="text-sm text-gray-600 mb-3">
                Get instant notification for all your booking with the app
              </p>
              <Link
                href="#"
                className="text-primary hover:underline font-medium text-sm flex justify-end"
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
