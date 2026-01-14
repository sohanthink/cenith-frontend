"use client";
import Button from "@/components/common/Button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const ContactStep = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <button
        onClick={onBack}
        className="text-2xl mb-6 hover:text-primary cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <h4 className="mb-2">How should we reach you?</h4>
      <p className="text-sm text-black mb-5">
        This Is Where You&apos;ll Receive Your Booking Confirmation.
      </p>

      <label className="block mb-2 text-sm font-medium">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ayesha5465uk@Gmail.Com"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:border-blue-600 focus:outline-none"
      />

      <label className="flex items-start gap-2 mb-6">
        <input type="checkbox" className="mt-1" />
        <span className="text-sm text-black">
          I want to get 10% off my next booking and receive exclusive deals from
          Chinth
        </span>
      </label>

      <Button onClick={onNext} className="w-full" variant="secondary">
        continue
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

export default ContactStep;
