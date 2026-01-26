"use client";

import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import Image from "next/image";

export default function PageThree() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const timeSlots = ["08:00", "09:00", "10:00"];

  // Generate calendar days dynamically
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // First day of the month (0 = Sunday, 6 = Saturday)
    const firstDay = new Date(year, month, 1).getDay();

    // Number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Number of days in previous month
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days: (Date | null)[] = [];

    // Add previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, daysInPrevMonth - i));
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    // Add next month's leading days to complete the grid
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      for (let day = 1; day <= remainingDays; day++) {
        days.push(new Date(year, month + 1, day));
      }
    }

    // Group days into weeks
    const weeks: (Date | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return weeks;
  }, [currentDate]);

  // Format month and year
  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Navigate months
  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  // Check if date is in current month
  const isCurrentMonth = (date: Date | null) => {
    if (!date) return false;
    return date.getMonth() === currentDate.getMonth();
  };

  // Check if date is today
  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Check if dates are the same
  const isSameDate = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Format selected date for display
  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "No date selected";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-stretch lg:items-center mx-auto container px-4 sm:px-6">
      {/* Left Side - Blue Section with Calendar */}
      <div className="w-full lg:w-1/2 bg-primary flex flex-col items-center justify-start p-6 sm:p-8 md:p-10">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <Image
            src="/logo-white.svg"
            alt="Logo"
            width={150}
            height={150}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-full lg:h-full"
          />
        </div>

        {/* Meeting Title */}
        <h4 className="text-white text-center mb-6 sm:mb-7 md:mb-8">
          Meet With Cenith Onboarding Team
        </h4>

        {/* Calendar */}
        <div className="w-full max-w-sm">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
            <button
              onClick={previousMonth}
              className="text-white hover:opacity-80 transition shrink-0"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <span className="text-white font-medium text-base sm:text-lg">
              {monthYear}
            </span>
            <button
              onClick={nextMonth}
              className="text-white hover:opacity-80 transition shrink-0"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2 sm:mb-3">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className="text-white/70 text-xs sm:text-sm font-medium text-center"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-7 md:mb-8">
            {calendarDays.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-1 sm:gap-2">
                {week.map((date, dayIndex) => {
                  const inCurrentMonth = isCurrentMonth(date);
                  const todayDate = isToday(date);
                  const selected = isSameDate(date, selectedDate);

                  return (
                    <button
                      key={dayIndex}
                      onClick={() => date && setSelectedDate(date)}
                      disabled={!date || !inCurrentMonth}
                      className={`
                        h-8 sm:h-9 md:h-10 rounded-lg text-xs sm:text-sm font-medium transition-all
                        ${!inCurrentMonth ? "text-white/30" : ""}
                        ${
                          todayDate && inCurrentMonth
                            ? "bg-yellow text-primary"
                            : inCurrentMonth
                              ? "text-white hover:bg-white/10"
                              : ""
                        }
                        ${selected ? "ring-2 ring-white" : ""}
                        ${!date ? "invisible" : ""}
                      `}
                    >
                      {date?.getDate()}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Calendar Actions */}
          <div className="flex gap-2 sm:gap-3 justify-end">
            <button
              onClick={() => setSelectedDate(null)}
              className="text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-lg transition"
            >
              Cancel
            </button>
            <button className="bg-yellow text-primary text-xs sm:text-sm font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg hover:bg-yellow/90 transition">
              Done
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Meeting Details */}
      <div className="w-full lg:w-1/2 bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10">
        {/* Progress Steps */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex justify-center items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="flex-1 h-1 bg-gray/20"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex flex-col items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 justify-between mt-3 sm:mt-4">
            <span className="text-xs sm:text-sm font-medium text-black">
              Choose Time
            </span>
            <span className="text-xs sm:text-sm font-medium text-black">
              Your Info
            </span>
          </div>
        </div>

        {/* Meeting Duration */}
        <div className="mb-6 sm:mb-7 md:mb-8">
          <h5 className="text-black mb-2 sm:mb-3">Meeting Duration</h5>
          <input
            type="text"
            value="30 Mins"
            readOnly
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-center text-primary font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
          />
        </div>

        {/* What Time Works Best */}
        <div className="mb-4 sm:mb-5 md:mb-6">
          <h5 className="text-black mb-2">What Time Works Best?</h5>
          <p className="text-black mb-3 sm:mb-4 text-sm sm:text-base">
            Showing Times For{" "}
            <span className="font-bold">{formattedSelectedDate}</span>
          </p>

          {/* Timezone Selector */}
          <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-primary font-medium mb-4 sm:mb-5 md:mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm sm:text-base">
            <option>UTC +01:00 (Europe) Central European Time</option>
            <option>UTC +00:00 (GMT) Greenwich Mean Time</option>
            <option>UTC -05:00 (EST) Eastern Standard Time</option>
            <option>UTC -08:00 (PST) Pacific Standard Time</option>
          </select>

          {/* Time Slots */}
          <div className="space-y-2 sm:space-y-3">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`
                  w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 font-medium transition-all text-sm sm:text-base
                  ${
                    selectedTime === time
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-gray-300 text-gray-700 hover:border-primary"
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
