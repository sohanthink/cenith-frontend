"use client";
import React from "react";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";

interface CancellationPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnderstood?: () => void;
}

const CancellationPolicyModal = ({
  isOpen,
  onClose,
  onUnderstood,
}: CancellationPolicyModalProps) => {
  const handleUnderstood = () => {
    onUnderstood?.();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Cancellation Policy"
      size="xl"
    >
      {/* General policy statement */}
      <p className="text-black mb-6 mt-10">
        All bookings are refundable and we don&apos;t charge cancellation fees.
      </p>

      {/* Policy scenarios */}
      <div className="space-y-6 mb-8">
        {/* More than 1 hour */}
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-4">
            <h5 className="text-nowrap">More than 1 hour</h5>
            <p>before drop-off!</p>
          </div>
          <p className="text-sm text-black font-primary">
            Get a refund in Bounce credits or to your original payment method.
          </p>
        </div>

        {/* Less than 1 hour */}
        <div className="flex items-center gap-10 border-t border-gray-200 pt-10 mt-10">
          <div className="flex flex-col gap-4">
            <h5 className="text-nowrap">Less than 1 hour</h5>
            <p>before drop-off</p>
          </div>
          <p className="text-sm text-black font-primary">
            Get a refund in Bounce credits.
          </p>
        </div>
      </div>

      {/* Action button */}
      <Button
        onClick={handleUnderstood}
        className="w-full"
        variant="secondary"
        size="lg"
      >
        understood
      </Button>
    </Modal>
  );
};

export default CancellationPolicyModal;
