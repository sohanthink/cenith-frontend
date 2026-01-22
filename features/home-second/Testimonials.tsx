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
    <section className="container mx-auto px-2 sm:px-6 pb-12 md:pb-24 grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Left Column - Testimonial Content */}
      <div className="bg-primary flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16 relative">
        {/* Testimonials Header */}
        <div className="flex items-center gap-3 justify-center mb-5">
          <div className="h-px w-8 bg-white"></div>
          <p className="text-white uppercase tracking-wider">Testimonials</p>
        </div>

        {/* Main Title */}
        <h2 className="text-white text-center mb-4">They Talk About Us</h2>

        {/* Quote Icon "99" */}
        <div className="mb-4 flex items-center justify-center">
          <Quote
            className="text-white"
            width={100}
            height={100}
            strokeWidth={1}
          />
        </div>

        {/* Testimonial Message */}
        <p className="text-white text-center text-lg mb-8 leading-relaxed">
          {currentTestimonial.message}
        </p>

        {/* Author Information */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 mb-4">
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
            <p className="text-white text-center">
              {currentTestimonial.authorTitle}
            </p>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-auto">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
        <Image
          src="/home-second/testimonial.png"
          alt="Team collaboration in office"
          width={1000}
          height={1000}
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Testimonials;
