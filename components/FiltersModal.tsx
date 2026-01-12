"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import Button from "./common/Button";
import AllowLocationModal from "./AllowLocationModal";

export interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateSearch?: (filters: FilterState) => void;
  onClear?: () => void;
}

export interface FilterState {
  open24Hours: boolean;
  highlyRated: boolean;
  openNow: boolean;
  lockers: boolean;
}

const FiltersModal = ({
  isOpen,
  onClose,
  onUpdateSearch,
  onClear,
}: FiltersModalProps) => {
  const [filters, setFilters] = useState<FilterState>({
    open24Hours: true,
    highlyRated: false,
    openNow: false,
    lockers: false,
  });
  const [showAllowLocationModal, setShowAllowLocationModal] =
    useState<boolean>(false);

  const handleFilterChange = (filterName: keyof FilterState) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleUpdateSearch = () => {
    onUpdateSearch?.(filters);
    setShowAllowLocationModal(true);
  };

  const handleClear = () => {
    const clearedFilters: FilterState = {
      open24Hours: false,
      highlyRated: false,
      openNow: false,
      lockers: false,
    };
    setFilters(clearedFilters);
    onClear?.();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-black font-primary">Filters</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-primary/10 rounded-full transition-colors"
              aria-label="Close filters"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <label className="flex items-center gap-3 cursor-pointer group border-b border-gray/20 pb-4">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={filters.open24Hours}
                  onChange={() => handleFilterChange("open24Hours")}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    filters.open24Hours
                      ? "border-primary bg-primary"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {filters.open24Hours && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
              <span className="text-base text-black font-primary select-none">
                Open 24 hours
              </span>
            </label>

            {/* Highly rated */}
            <label className="flex items-center gap-3 cursor-pointer group border-b border-gray/20 pb-4">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={filters.highlyRated}
                  onChange={() => handleFilterChange("highlyRated")}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    filters.highlyRated
                      ? "border-primary bg-primary"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {filters.highlyRated && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
              <span className="text-base text-black font-primary select-none">
                Highly rated
              </span>
            </label>

            {/* Open now */}
            <label className="flex items-center gap-3 cursor-pointer group border-b border-gray/20 pb-4">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={filters.openNow}
                  onChange={() => handleFilterChange("openNow")}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    filters.openNow
                      ? "border-primary bg-primary"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {filters.openNow && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>
              <span className="text-base text-black font-primary select-none">
                Open now
              </span>
            </label>

            {/* Lockers */}
            <label className="flex items-center gap-3 cursor-pointer group border-b border-gray/20 pb-4">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={filters.lockers}
                  onChange={() => handleFilterChange("lockers")}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    filters.lockers
                      ? "border-primary bg-primary"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {filters.lockers && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>
              <span className="text-base text-black font-primary select-none">
                Lockers
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="secondary"
              size="md"
              fullWidth
              onClick={handleUpdateSearch}
              className="rounded-full"
            >
              Update Search
            </Button>

            <button
              onClick={handleClear}
              className="w-full text-center text-primary hover:underline text-sm font-primary transition-colors py-1"
            >
              clear
            </button>
          </div>
        </div>
      </div>
      {showAllowLocationModal && (
        <AllowLocationModal onClose={() => setShowAllowLocationModal(false)} />
      )}
      {/* TODO: Add shop details modal */}

      {/* {showAllowLocationModal && (
        <ShopDetailsModal isOpen={showAllowLocationModal} onClose={() => setShowAllowLocationModal(false)} />
      )} */}
    </>
  );
};

export default FiltersModal;
