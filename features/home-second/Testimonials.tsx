"use client";

import React, { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/homeSecondData";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 min-h-[500px] sm:min-h-[550px] md:min-h-[600px]">
      {/* Left Column - Testimonial Content */}
      <div className="bg-primary flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 relative order-2 lg:order-1">
        {/* Testimonials Header */}
        <div className="flex items-center gap-2 sm:gap-3 justify-center mb-4 sm:mb-5">
          <div className="h-px w-6 sm:w-8 bg-white"></div>
          <p className="text-white uppercase tracking-wider text-xs sm:text-sm">
            Testimonials
          </p>
        </div>

        {/* Main Title */}
        <h2 className="text-white text-center mb-3 sm:mb-4">
          They Talk About Us
        </h2>

        {/* Quote Icon "99" */}
        <div className="mb-3 sm:mb-4 flex items-center justify-center">
          <Quote
            className="text-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]"
            strokeWidth={1}
          />
        </div>

        {/* Testimonial Message */}
        <p className="text-white text-center text-base sm:text-lg mb-6 sm:mb-7 md:mb-8 leading-relaxed px-2">
          {currentTestimonial.message}
        </p>

        {/* Author Information */}
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 mb-3 sm:mb-4">
            <Image
              src={currentTestimonial.authorImage}
              alt={currentTestimonial.authorName}
              width={1000}
              height={1000}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h4 className="text-white text-center">
              {currentTestimonial.authorName}
            </h4>
            <p className="text-white text-center text-sm sm:text-base">
              {currentTestimonial.authorTitle}
            </p>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-auto">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 sm:w-8 bg-white"
                  : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[600px] order-1 lg:order-2">
        <Image
          src="/home-second/testimonial.png"
          alt="Team collaboration in office"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};

export default Testimonials;
