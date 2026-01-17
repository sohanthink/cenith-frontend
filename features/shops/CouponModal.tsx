"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply?: (code: string) => void;
}

const CouponModal = ({ isOpen, onClose, onApply }: CouponModalProps) => {
  const [promoCode, setPromoCode] = useState("");

  const handleApply = () => {
    if (promoCode.trim()) {
      onApply?.(promoCode.trim());
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleApply();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Promo Code" size="sm">
      {/* Input field */}
      <div className="mb-6">
        <label
          htmlFor="promo-code"
          className="block text-sm font-medium text-black font-primary mb-2 text-nowrap"
        >
          Promo code
        </label>
        <input
          id="promo-code"
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter promo code"
          className="w-full px-4 py-3 border border-gray/30 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-black font-primary"
          autoFocus
        />
      </div>

      {/* Action button */}
      <Button
        onClick={handleApply}
        className="w-full"
        variant="secondary"
        size="lg"
        disabled={!promoCode.trim()}
      >
        add promo code
      </Button>
    </Modal>
  );
};

export default CouponModal;
