import Button from "@/components/common/Button";
import Image from "next/image";
import React from "react";

const FindLocationCard = () => {
  return (
    <section className="container mx-auto px-2 sm:px-6 pt-28 pb-48 mt-24 relative">
      <div className="absolute top-0 left-0 w-full z-10 ">
        <div className="container mx-auto px-2 sm:px-6">
          <div className="bg-primary rounded-xl relative w-full h-full">
            <div className="absolute bottom-0 left-0 h-full z-10">
              <Image
                src="/footer/shape-1.svg"
                alt="Shape 2"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-0 right-0 h-full z-10">
              <Image
                src="/footer/shape-2.svg"
                alt="Shape 1"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              {/* Left Side - Content */}
              <div className="p-12 lg:p-16 text-white flex flex-col justify-center">
                <h2 className="mb-4">Store your luggage anywhere</h2>
                <p className="text-lg font-semibold text-white mb-8">
                  13,000+ locations to store your luggage
                </p>
                <Button variant="ghost" className="bg-white text-primary w-fit">
                  Find a deposit
                </Button>
              </div>

              {/* Right Side - Phone Image */}
              <div className="absolute -bottom-10 right-1/4 h-[140%]">
                <Image
                  src="/shop/find-location-card.png"
                  alt="Mobile app"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindLocationCard;
