"use client";
import React, { useState } from "react";
import { CreditCard } from "lucide-react";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import Image from "next/image";

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue?: (method: "credit-card" | "paypal") => void;
}

const PaymentMethodModal = ({
  isOpen,
  onClose,
  onContinue,
}: PaymentMethodModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState<
    "credit-card" | "paypal" | null
  >(null);

  const handleContinue = () => {
    if (selectedMethod) {
      onContinue?.(selectedMethod);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Choose Payment Method"
      size="lg"
    >
      {/* Payment options */}
      <div className="space-y-4 mb-6 mt-8">
        {/* Credit Card option */}
        <label
          className={`flex items-center justify-between p-4 border-2 rounded-full cursor-pointer transition-all ${
            selectedMethod === "credit-card"
              ? "border-primary bg-primary/5"
              : "border-gray/30 hover:border-primary/50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                name="payment-method"
                value="credit-card"
                checked={selectedMethod === "credit-card"}
                onChange={() => setSelectedMethod("credit-card")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedMethod === "credit-card"
                    ? "border-primary bg-primary"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedMethod === "credit-card" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
            </div>
            <span className="text-base font-medium text-black font-primary">
              Credit Card
            </span>
          </div>
          <CreditCard className="w-6 h-6 text-primary shrink-0" />
        </label>

        {/* PayPal option */}
        <label
          className={`flex items-center justify-between p-4 border-2 rounded-full cursor-pointer transition-all ${
            selectedMethod === "paypal"
              ? "border-primary bg-primary/5"
              : "border-gray/30 hover:border-primary/50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                name="payment-method"
                value="paypal"
                checked={selectedMethod === "paypal"}
                onChange={() => setSelectedMethod("paypal")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedMethod === "paypal"
                    ? "border-primary bg-primary"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedMethod === "paypal" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
            </div>
            <span className="text-base font-medium text-black font-primary">
              PayPal
            </span>
          </div>
          <div className="flex items-center shrink-0">
            <Image
              src="/shop/paypal-icon.svg"
              alt="Paypal"
              width={20}
              height={20}
            />
          </div>
        </label>
      </div>

      {/* Action button */}
      <Button
        onClick={handleContinue}
        className="w-full"
        variant="secondary"
        size="lg"
        disabled={!selectedMethod}
      >
        continue
      </Button>
    </Modal>
  );
};

export default PaymentMethodModal;
