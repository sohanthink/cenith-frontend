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
        className="text-2xl mb-6 hover:text-primary cursor-pointer"
      >
        <ChevronLeft />
      </button>

      <h4 className="mb-2">Enter the confirmation code</h4>
      <p className="text-sm text-gray-600 mb-6">
        A Confirmation Code Has Been Sent To Your <br />
        Ayesha5465uk@Gmail.Com
      </p>

      <div className="flex gap-3 mb-6">
        {code.map((digit: string, index: number) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleCodeChange(index, e.target.value)}
            className="w-12 h-16 text-center text-lg text-primary font-semibold border-2 border-gray/50 rounded-full focus:border-primary focus:outline-none"
          />
        ))}
      </div>

      <Button onClick={onNext} className="w-full" variant="secondary">
        confirm
      </Button>

      <Button
        className="w-full mt-6 text-primary hover:underline"
        variant="ghost"
      >
        Resend The Confirmation Code
      </Button>

      <div className="mt-16 mb-6 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-black">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <Button className="w-full gap-2 !border-black mb-3" variant="outline">
        <Image
          src="/shop/google-icon.svg"
          alt="google"
          width={18}
          height={18}
        />
        sign in with google
      </Button>

      <Button className="w-full gap-2 !border-black" variant="outline">
        <Image src="/shop/apple-icon.svg" alt="apple" width={18} height={18} />
        sign in with apple
      </Button>
    </div>
  );
};
export default ConfirmationStep;
