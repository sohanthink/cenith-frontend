import Button from "@/components/common/Button";
import StoreCard from "@/components/StoreCard";
import { StoreCardData } from "@/data/ClosestlocationData";
import React from "react";

const NearbyLocation = () => {
  return (
    <div className="w-3/4">
      <div className="flex items-center justify-between">
        <p className="mb-2 font-bold text-black">Nearby locations</p>
        <Button size="sm" variant="secondary">
          View all
        </Button>
      </div>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
        {StoreCardData.slice(0, 2).map((item) => (
          <StoreCard key={item.id} data={item} variant="secondary" />
        ))}
      </div>
    </div>
  );
};

export default NearbyLocation;
