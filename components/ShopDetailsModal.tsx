"use client";

import { X, Shield, Star, ArrowRight, Clock } from "lucide-react";
import Button from "./common/Button";

export interface ShopDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookStore?: () => void;
  shopData?: {
    title: string;
    price: string;
    priceLabel?: string;
    protection: string;
    travelTime: string;
    destination: string;
    isOpen24Hours: boolean;
    isOpenNow: boolean;
    rating: number;
    reviews: number;
  };
}

const defaultShopData = {
  title: "East Village Manhattan Storage Spot",
  price: "$4.60",
  priceLabel: "Deli",
  protection: "$10,000 Bag protection",
  travelTime: "32 min",
  destination: "New York City Center",
  isOpen24Hours: true,
  isOpenNow: true,
  rating: 4.8,
  reviews: 4,
};

const ShopDetailsModal = ({
  isOpen,
  onClose,
  onBookStore,
  shopData = defaultShopData,
}: ShopDetailsModalProps) => {
  if (!isOpen) return null;

  const handleBookStore = () => {
    onBookStore?.();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 relative pointer-events-auto animate-in fade-in zoom-in duration-200">
          <button
            onClick={onClose}
            className="absolute -top-4 left-4 p-1 bg-white hover:bg-gray-100 rounded-full transition-colors z-10 cursor-pointer"
            aria-label="Close shop details"
          >
            <X className="w-5 h-5 text-black" />
          </button>

          <div className="mb-4 pt-2">
            <p className="text-lg font-bold text-primary font-primary mb-2 pr-8">
              {shopData.title}
            </p>
            <p className="text-base text-black font-primary">
              {shopData.price}/day {shopData.priceLabel && shopData.priceLabel}
            </p>
          </div>

          <div className="border-t border-gray-200 my-4" />

          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm text-primary font-primary">
              {shopData.protection}
            </span>
          </div>

          <div className="border-t border-gray-200 my-4" />

          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gray-600 shrink-0" />
            <span className="text-sm text-black font-primary">
              {shopData.travelTime}
            </span>
            <ArrowRight className="w-4 h-4 text-gray-600 shrink-0" />
            <span className="text-sm text-black font-primary">
              {shopData.destination}
            </span>
          </div>

          <div className="border-t border-gray-200 my-4" />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-600 font-primary mb-1">
                Open hours
              </p>
              <div className="flex flex-col gap-1">
                {shopData.isOpenNow && (
                  <span className="text-sm text-black font-primary">
                    Open now
                  </span>
                )}
                {shopData.isOpen24Hours && (
                  <span className="text-sm text-black font-primary">
                    Open 24 hours
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-600 font-primary mb-1">Rating</p>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow fill-yellow shrink-0" />
                <span className="text-sm text-black font-primary">
                  {shopData.rating} ({shopData.reviews})
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-4" />

          <Button
            variant="secondary"
            size="md"
            fullWidth
            onClick={handleBookStore}
          >
            Book this store
          </Button>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsModal;
