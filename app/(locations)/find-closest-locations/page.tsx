"use client";
import BagSelection from "@/components/BagSelection";
import FiltersModal from "@/components/FiltersModal";
import StoreCard from "@/components/StoreCard";
import { StoreCardData } from "@/data/ClosestlocationData";
import { MapPin, SlidersHorizontal, SquarePen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FindClosestLocations() {
  const [showFilters, setShowFilters] = useState(false);

  const handleShowFilters = () => {
    setShowFilters((prev) => !prev);
  };
  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-116px)] overflow-y-auto bg-white w-full">
      <div className="w-full lg:w-1/3 flex flex-col overflow-y-auto border-r-0 lg:border-r border-gray-200">
        <div className="p-4 sm:p-5 md:p-6">
          <p className="text-lg font-semibold text-black">
            When do you want to drop your bags?
          </p>
        </div>

        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between bg-white shadow rounded-xl p-3 sm:p-4">
            <span className="text-sm text-black font-medium">Start</span>
            <button className="flex items-center gap-2 text-sm text-black">
              Today, 4:00 PM
              <SquarePen className="w-4 h-4 text-primary shrink-0" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-white shadow rounded-xl p-3 sm:p-4">
            <span className="text-sm text-black font-medium">End</span>
            <button className="flex items-center gap-2 text-sm text-black">
              Same day, 5:00 PM
              <SquarePen className="w-4 h-4 text-primary shrink-0" />
            </button>
          </div>
        </div>

        <BagSelection />

        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
            <p className="text-lg text-black font-semibold">
              0 locations matched your criteria
            </p>
            <button
              onClick={handleShowFilters}
              className="flex items-center gap-2 text-black font-semibold cursor-pointer shrink-0"
            >
              <SlidersHorizontal className="w-4 h-4 shrink-0" />
              Filters
            </button>
          </div>

          <div className="text-center py-6 sm:py-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
              <Image
                src="/close-icon.svg"
                alt="filter"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-black mb-3 sm:mb-4">
              No stores available at the moment
            </h4>
            <p className="text-black mb-4 sm:mb-6 px-2">
              Cenith is available in 200+ cities with more added every week. We
              hope we can serve you wherever you go next!
            </p>

            <div className="flex flex-wrap gap-2 justify-center px-2">
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                New York
              </button>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                London
              </button>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                Canada
              </button>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                Australia
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {StoreCardData.map((item) => (
              <StoreCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/3 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14736.240867911744!2d88.42299!3d22.576226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1234567890"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <button className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white px-3 sm:px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors z-10">
          <MapPin className="w-4 h-4 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">Near me</span>
        </button>
      </div>

      {showFilters && (
        <FiltersModal isOpen={showFilters} onClose={handleShowFilters} />
      )}
    </div>
  );
}
