"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function PageFive() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleContinue = () => {
    if (!phoneNumber || phoneNumber.trim() === "") {
      setError("Required");
      return;
    }
    setError("");
    console.log("Phone Number:", phoneNumber);
    // Handle continue logic here
  };

  const handlePhoneChange = (value: string | undefined) => {
    setPhoneNumber(value || "");
    if (error) setError("");
  };

  const handleSkip = () => {
    console.log("Skipping phone verification...");
    // Handle skip logic here
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

      {/* Right Side - Phone Number Form */}
      <div className="w-1/2 bg-white flex items-center justify-center p-24">
        <div className="w-full">
          {/* Title */}
          <h2 className="text-black mb-6 mt-3">Enter Your Phone Number</h2>

          {/* Subtitle */}
          <p className="text-text mb-8">
            You Will Send Code To Verify This Phone Number.
          </p>

          {/* Phone Number Input */}
          <div className="mb-16">
            <div className="relative">
              <PhoneInput
                international
                defaultCountry="VN"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="phone-input-custom"
                placeholder="+43 356 586 8743"
              />
            </div>
            <style jsx global>{`
              .phone-input-custom {
                width: 100%;
                display: flex;
                align-items: center;
                border: 2px solid #60a5fa;
                border-radius: 999px;
                padding: 4px;
                transition: all 0.2s;
              }
              .phone-input-custom:focus-within {
                border-color: #60a5fa;
                box-shadow: 0 0 0 2px rgba(11, 122, 209, 0.2);
              }
              .phone-input-custom .PhoneInputCountry {
                display: flex;
                align-items: center;
                margin-right: 8px;
                padding-left: 8px;
              }
              .phone-input-custom .PhoneInputCountryIcon {
                width: 20px;
                height: 15px;
                border-radius: 2px;
                margin-right: 6px;
              }
              .phone-input-custom .PhoneInputCountrySelect {
                padding: 4px 8px;
                border: none;
                background: transparent;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                color: #1f2937;
                outline: none;
              }
              .phone-input-custom .PhoneInputCountrySelectArrow {
                opacity: 0.6;
                margin-left: 4px;
                width: 12px;
                height: 12px;
              }
              .phone-input-custom .PhoneInputInput {
                flex: 1;
                padding: 12px 16px;
                border: none;
                font-size: 16px;
                outline: none;
                background: transparent;
              }
              .phone-input-custom .PhoneInputInput::placeholder {
                color: #9ca3af;
              }
            `}</style>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-6 mt-1">{error}</p>}

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            variant="primary"
            fullWidth
            className={`mb-6 ${
              !phoneNumber
                ? "!bg-gray/30 hover:!bg-gray/20 !text-black !cursor-not-allowed"
                : ""
            }`}
          >
            Continue
          </Button>

          {/* Skip For Now Link */}
          <div className="text-center">
            <Button
              onClick={handleSkip}
              variant="link"
              className="text-primary hover:underline font-medium text-sm"
            >
              Skip For Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
