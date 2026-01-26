import { reviews } from "@/data/homeData";
import { ChevronLeft, ChevronRight, Link, StarIcon } from "lucide-react";
import React from "react";

const PeopleSay = ({ dataCount }: { dataCount: number }) => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 md:pb-24">
      <h2 className="text-center text-black mb-8 sm:mb-12 px-4">
        What people say about us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="flex flex-col items-center justify-center gap-2 border-2 border-primary border-dashed rounded-xl p-6 sm:p-12 md:p-16 lg:p-24">
          <p className="text-black font-bold font-primary">Excellent</p>
          <h2 className="text-black font-primary">5.0</h2>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                width={14}
                height={14}
                className="text-yellow sm:w-4 sm:h-4"
                fill="currentColor"
              />
            ))}
          </div>
          <p className="text-text text-xs sm:text-sm md:text-base text-center">
            Based on 15,29 reviews
          </p>
          <Link
            href="/reviews"
            className="text-primary hover:underline text-xs sm:text-sm md:text-base mt-1"
          >
            See all reviews
          </Link>
        </div>
        {reviews.slice(0, dataCount).map((item, index) => (
          <div
            key={index}
            className="bg-himalayan-white rounded-xl px-5 sm:px-6 md:px-7 py-8 sm:py-10 md:py-12"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  width={14}
                  height={14}
                  className="text-yellow sm:w-4 sm:h-4"
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="my-4 sm:my-5 md:my-6 text-text text-sm sm:text-base">
              {item.description}
            </p>
            <h5 className="text-black font-bold font-primary text-sm sm:text-base md:text-lg">
              {item.name}
            </h5>
            <p className="text-text mt-1 text-xs sm:text-sm md:text-base">
              {item.designation}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 sm:mt-10 gap-3 sm:gap-4">
        <div className="cursor-pointer p-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group">
          <ChevronLeft
            width={18}
            height={18}
            className="text-primary group-hover:text-white transition-all duration-300 ease-in-out sm:w-5 sm:h-5"
          />
        </div>
        <div className="cursor-pointer p-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group">
          <ChevronRight
            width={18}
            height={18}
            className="text-primary group-hover:text-white transition-all duration-300 ease-in-out sm:w-5 sm:h-5"
          />
        </div>
      </div>
    </section>
  );
};

export default PeopleSay;
