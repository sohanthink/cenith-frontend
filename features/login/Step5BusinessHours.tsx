"use client";

import { useState } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { FormData } from "../../app/login/page";
import Button from "@/components/common/Button";
import Image from "next/image";

interface Step5BusinessHoursProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
}

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function Step5BusinessHours({
  formData,
  updateFormData,
  onNext,
}: Step5BusinessHoursProps) {
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set());

  const toggleDay = (day: string) => {
    const current = formData.businessHours[day] || {
      enabled: false,
      timeSlots: [],
    };
    updateFormData({
      businessHours: {
        ...formData.businessHours,
        [day]: {
          ...current,
          enabled: !current.enabled,
        },
      },
    });
  };

  const toggleExpand = (day: string) => {
    const newExpanded = new Set(expandedDays);
    if (newExpanded.has(day)) {
      newExpanded.delete(day);
    } else {
      newExpanded.add(day);
    }
    setExpandedDays(newExpanded);
  };

  const addTimeSlot = (day: string) => {
    const current = formData.businessHours[day] || {
      enabled: true,
      timeSlots: [],
    };
    updateFormData({
      businessHours: {
        ...formData.businessHours,
        [day]: {
          ...current,
          timeSlots: [...current.timeSlots, { start: "09:00", end: "17:00" }],
        },
      },
    });
  };

  const removeTimeSlot = (day: string, index: number) => {
    const current = formData.businessHours[day];
    if (!current) return;

    const newTimeSlots = current.timeSlots.filter((_, i) => i !== index);
    updateFormData({
      businessHours: {
        ...formData.businessHours,
        [day]: {
          ...current,
          timeSlots: newTimeSlots,
        },
      },
    });
  };

  const updateTimeSlot = (
    day: string,
    index: number,
    field: "start" | "end",
    value: string,
  ) => {
    const current = formData.businessHours[day];
    if (!current) return;

    const newTimeSlots = [...current.timeSlots];
    newTimeSlots[index] = { ...newTimeSlots[index], [field]: value };

    updateFormData({
      businessHours: {
        ...formData.businessHours,
        [day]: {
          ...current,
          timeSlots: newTimeSlots,
        },
      },
    });
  };

  const progress = 100; // Step 5 is 100% of total progress

  return (
    <div>
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
        <Image
          src="/logo-main.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
        Add Your Business Hours
      </h2>

      {/* Progress Bar */}
      <div className="mb-6 sm:mb-7 md:mb-8">
        <div className="flex items-center gap-3 sm:gap-4 mb-2">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1A73E8] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 shrink-0">
            {progress}%
          </span>
        </div>
      </div>

      {/* Business Hours */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7 md:mb-8">
        {DAYS.map((day) => {
          const dayData = formData.businessHours[day] || {
            enabled: false,
            timeSlots: [],
          };
          const isExpanded = expandedDays.has(day);
          const displayName = day.charAt(0).toUpperCase() + day.slice(1);

          return (
            <div
              key={day}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Day Header */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => toggleDay(day)}
                    className={`relative w-11 h-6 sm:w-12 sm:h-6 rounded-full transition-colors shrink-0 ${
                      dayData.enabled ? "bg-[#1A73E8]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        dayData.enabled
                          ? "translate-x-5 sm:translate-x-6"
                          : "translate-x-0"
                      }`}
                    />
                  </button>
                  <span className="font-medium text-gray-700 text-sm sm:text-base">
                    {displayName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => toggleExpand(day)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer shrink-0"
                >
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>

              {/* Time Slots */}
              {isExpanded && dayData.enabled && (
                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                  {dayData.timeSlots.length === 0 ? (
                    <div className="text-center text-gray-400 py-4">
                      No time slots added
                    </div>
                  ) : (
                    dayData.timeSlots.map((slot, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 p-3 bg-white border border-gray-200 rounded-lg"
                      >
                        <input
                          type="time"
                          value={slot.start}
                          onChange={(e) =>
                            updateTimeSlot(day, index, "start", e.target.value)
                          }
                          className="flex-1 px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/20 text-sm sm:text-base"
                        />
                        <span className="text-gray-500 text-center sm:text-left">
                          to
                        </span>
                        <input
                          type="time"
                          value={slot.end}
                          onChange={(e) =>
                            updateTimeSlot(day, index, "end", e.target.value)
                          }
                          className="flex-1 px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/20 text-sm sm:text-base"
                        />
                        <button
                          type="button"
                          onClick={() => removeTimeSlot(day, index)}
                          className="text-red-500 hover:text-red-700 shrink-0 self-center sm:ml-auto"
                        >
                          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    ))
                  )}
                  <button
                    type="button"
                    onClick={() => addTimeSlot(day)}
                    className="flex items-center gap-2 text-[#1A73E8] hover:text-[#1557B0] font-medium text-sm sm:text-base"
                  >
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    Add Time Slot
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      <Button
        onClick={onNext}
        variant="primary"
        fullWidth
        className="bg-primary hover:bg-opacity-90 rounded-lg py-3 text-white font-medium"
      >
        Submit
      </Button>
    </div>
  );
}
