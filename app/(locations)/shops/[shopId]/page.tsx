"use client";
import ConfirmationStep from "@/features/shops/ConfirmationStep";
import ContactStep from "@/features/shops/ContactStep";
import OpeningHours from "@/features/shops/OpeningHours";
import PriceDetails from "@/features/shops/PriceDetails";
import ProtectionInfo from "@/features/shops/ProtectionInfo";
import Reviews from "@/features/shops/Reviews";
import { Clock, Lightbulb, MapPin, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export default function ShopPage() {
  const [step, setStep] = useState("contact");

  return (
    <div>
      <div className="container mx-auto px-2 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Info */}
          <div>
            <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.98823492346644!3d40.74844097139445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEast%20Village%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-black" />
                <span>Shop</span>
              </div>
              <h4 className="mb-2">East Village Manhattan Storage Spot</h4>

              <div className="flex items-center gap-10 text-sm text-black mb-3">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-green-600" />
                  <span>8:00 Am-10:00 Pm</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">4.90 (878)</span>
                </div>
              </div>

              <div className="my-10 border-y border-gray/50 py-6">
                <div className="flex items-start gap-2">
                  <Lightbulb size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      Online booking required
                    </p>
                    <p className="text-xs text-black">
                      Store won&apos;t accept cash or walk-ins. Cancel before
                      drop-off for a refund.
                    </p>
                    <button className="text-primary text-xs font-medium mt-1">
                      Read more
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-start gap-2">
                    <MapPin size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Address will be shown after booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <OpeningHours />
            <Reviews />
            <ProtectionInfo />
          </div>

          {/* Right Column - Booking Form */}
          <div className="bg-himalayan-white rounded-lg py-8 px-12">
            {step === "contact" && (
              <ContactStep
                onNext={() => setStep("confirmation")}
                onBack={() => setStep("info")}
              />
            )}

            {step === "confirmation" && (
              <ConfirmationStep
                onNext={() => setStep("price")}
                onBack={() => setStep("contact")}
              />
            )}
            {step === "price" && (
              <PriceDetails onNext={() => setStep("confirmation")} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
