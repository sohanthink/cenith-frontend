"use client";
import Button from "@/components/common/Button";
import { ArrowLeftIcon, ArrowLeftRightIcon, ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const ConfirmationStep = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="text-2xl mb-4 sm:mb-5 md:mb-6 hover:text-primary cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <h4 className="mb-2">Enter the confirmation code</h4>
      <p className="text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6">
        A Confirmation Code Has Been Sent To Your{" "}
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>Ayesha5465uk@Gmail.Com
      </p>

      <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 justify-center sm:justify-start">
        {code.map((digit: string, index: number) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleCodeChange(index, e.target.value)}
            className="w-10 h-14 sm:w-12 sm:h-16 text-center text-base sm:text-lg text-primary font-semibold border-2 border-gray/50 rounded-full focus:border-primary focus:outline-none"
          />
        ))}
      </div>

      <Button onClick={onNext} className="w-full" variant="secondary">
        confirm
      </Button>

      <Button
        className="w-full mt-4 sm:mt-5 md:mt-6 text-primary hover:underline"
        variant="ghost"
      >
        Resend The Confirmation Code
      </Button>

      <div className="mt-12 sm:mt-14 md:mt-16 mb-4 sm:mb-5 md:mb-6 flex items-center gap-3 sm:gap-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-black">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <Button
        className="w-full gap-2 !border-black mb-2 sm:mb-3"
        variant="outline"
      >
        <Image
          src="/shop/google-icon.svg"
          alt="google"
          width={18}
          height={18}
          className="shrink-0"
        />
        sign in with google
      </Button>

      <Button className="w-full gap-2 !border-black" variant="outline">
        <Image
          src="/shop/apple-icon.svg"
          alt="apple"
          width={18}
          height={18}
          className="shrink-0"
        />
        sign in with apple
      </Button>
    </div>
  );
};
export default ConfirmationStep;
