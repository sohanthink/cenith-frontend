"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function PageSix() {
  const [formData, setFormData] = useState({
    accountHolder: "",
    iban: "",
    swiftBic: "",
    pecOrUniqueCode: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStripeConnect = () => {
    console.log("Connecting to Stripe...");
    // Handle Stripe connection logic here
  };

  const handleSkip = () => {
    console.log("Skipping payout setup...");
    // Handle skip logic here
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

      {/* Right Side - Payout Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24">
        <div className="w-full max-w-md">
          {/* Title */}
          <h4 className="text-black mb-6 sm:mb-7 md:mb-8 mt-2 sm:mt-3">
            Select An Option For Payout
          </h4>

          {/* Stripe Card */}
          <div
            onClick={handleStripeConnect}
            className="relative rounded-xl p-6 sm:p-7 md:p-8 lg:p-9 mb-6 sm:mb-7 md:mb-8 overflow-hidden bg-[#deebecb4] cursor-pointer"
          >
            {/* Wavy Pattern Overlay */}
            <div className="absolute inset-0 opacity-30">
              <Image
                src="/stripe-bg.png"
                alt="Stripe"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-primary mb-2 text-center">Stripe</h3>
              <h5 className="text-black text-center">
                Connect To Your Stripe Account
              </h5>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7 md:mb-8">
            <Input
              type="text"
              placeholder="Account Holder"
              value={formData.accountHolder}
              onChange={(e) =>
                handleInputChange("accountHolder", e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />

            <Input
              type="text"
              placeholder="IBAN"
              value={formData.iban}
              onChange={(e) => handleInputChange("iban", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />

            <Input
              type="text"
              placeholder="Swift/BIC"
              value={formData.swiftBic}
              onChange={(e) => handleInputChange("swiftBic", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />

            <Input
              type="text"
              placeholder="PEC Or Unique Code*"
              value={formData.pecOrUniqueCode}
              onChange={(e) =>
                handleInputChange("pecOrUniqueCode", e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Skip For Now Button */}
          <div className="text-center">
            <Button onClick={handleSkip} variant="outline" fullWidth>
              Skip For Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
