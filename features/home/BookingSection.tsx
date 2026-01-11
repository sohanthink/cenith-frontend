import Image from "next/image";
import React from "react";

const BookingSection = () => {
  return (
    <section className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left Side - Luggage Image */}
        <div className=" flex items-center justify-center p-12">
          <Image
            src="/home/lageage-img.png"
            alt="Blue luggage"
            className="w-64 h-auto object-contain"
            width={500}
            height={500}
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-span-2 p-8 lg:p-12">
          <div className="mb-8 text-center space-y-6">
            <h2 className="text-black">Don&apos;t Worry,</h2>
            <h3 className="text-black">
              We Offer A Discount For Online Baggage.
            </h3>
            <p className="text-black">
              The price is applied for item under 76x48x32cm (30kg)
            </p>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col items-center justify-between space-y-7">
              <div className="flex items-center justify-between w-full border-b-2 border-dashed border-b-text/50 pb-7">
                <h4 className="text-black">1 bag/day</h4>
                <h4 className="text-black">5$</h4>
              </div>
              <div className="flex items-center justify-between w-full border-b-2 border-dashed border-b-text/50 pb-7">
                <h4 className="text-black">5-6 bags/day</h4>
                <h4 className="text-black">30% discount From 17.5$</h4>
              </div>
              <div className="flex items-center justify-between w-full border-b-2 border-dashed border-b-text/50 pb-7">
                <h4 className="text-black">From 7th bag</h4>
                <h4 className="text-black">50% discount From 17.5$</h4>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-4 rounded-full font-semibold hover:bg-slate-900 transition-colors"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
