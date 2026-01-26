import Button from "@/components/common/Button";
import StoreCard from "@/components/StoreCard";
import { StoreCardData } from "@/data/ClosestlocationData";
import React from "react";

const NearbyLocation = () => {
  return (
    <div className="w-full max-w-5xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <p className="mb-0 sm:mb-2 font-bold text-black">Nearby locations</p>
        <Button size="sm" variant="secondary" className="w-full sm:w-auto">
          View all
        </Button>
      </div>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 mt-4 sm:mt-6 gap-4">
        {StoreCardData.slice(0, 2).map((item) => (
          <StoreCard key={item.id} data={item} variant="secondary" />
        ))}
      </div>
    </div>
  );
};

export default NearbyLocation;
