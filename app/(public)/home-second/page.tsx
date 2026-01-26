"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Button from "@/components/common/Button";
import ValueCard from "@/features/home-second/ValueCard";
import WorkLocationCard from "@/features/home-second/WorkLocationCard";
import Testimonials from "@/features/home-second/Testimonials";
import {
  thePressData,
  valueCards,
  workLocationCards,
} from "@/data/homeSecondData";
import { partners } from "@/data/homeData";

export default function HomeSecondPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <section className="bg-himalayan-white">
        {/* Top Section with Title, Button, and Icons */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-16 lg:py-24 relative">
          <div className="flex flex-col items-center justify-center relative">
            {/* Main Title */}
            <h1 className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              Change The Way People <br className="hidden sm:block" />{" "}
              Experience Cities
            </h1>

            <Button
              variant="primary"
              size="lg"
              className="px-8 sm:px-12 md:px-16 lg:px-20 w-full sm:w-auto"
            >
              See Open Roles
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 relative">
          {/* Decorative Images - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute -top-[9%] left-[70%] -translate-x-1/2 z-10">
            <Image
              src="/home-second/image-1.png"
              alt="Banner"
              width={1000}
              height={1000}
              className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>
          <div className="hidden lg:block absolute -top-[21%] left-[90%] -translate-x-1/2 z-10">
            <Image
              src="/home-second/image-2.png"
              alt="Banner"
              width={1000}
              height={1000}
              className="w-32 h-48 lg:w-40 lg:h-60 object-contain"
            />
          </div>
          <div className="hidden lg:block absolute -top-[7%] right-[70%] -translate-x-1/2 z-10">
            <Image
              src="/home-second/image-3.png"
              alt="Banner"
              width={1000}
              height={1000}
              className="w-32 h-24 lg:w-40 lg:h-28 object-contain"
            />
          </div>
          <div className="hidden lg:block absolute -top-[19%] right-[70%] translate-x-1/2 z-10">
            <Image
              src="/home-second/image-4.png"
              alt="Banner"
              width={1000}
              height={1000}
              className="w-32 h-52 lg:w-40 lg:h-64 object-contain"
            />
          </div>
          <div>
            <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-gray-200">
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail/Image */}
                  <Image
                    src="/home-second/banner.png"
                    alt="Video thumbnail - woman with suitcase at airport"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                  {/* Play Button Overlay */}
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
                    aria-label="Play video"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-primary rounded-full">
                        <Play
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                          fill="white"
                        />
                      </div>
                    </div>
                  </button>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-5 md:mb-6">
              We Change How People Live
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text leading-relaxed max-w-3xl mx-auto px-2">
              At Cenith Storage, we believe that travel should be about
              experiences, not burdens. That&apos;s why we&apos;ve reimagined
              the way you move through the world. By offering flexible and
              convenient luggage storage solutions, we free you from the stress
              of carrying heavy bags, so you can immerse yourself fully in every
              moment.
            </p>
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="bg-primary relative">
        <div className="absolute top-0 left-0 w-full  z-0">
          <Image
            src="/home-second/bot-bg.png"
            alt="Value Background"
            width={1000}
            height={1000}
            className="w-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full z-0 rotate-180">
          <Image
            src="/home-second/bot-bg.png"
            alt="Value Background"
            width={1000}
            height={1000}
            className="w-full object-contain"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-16 lg:py-24 z-10 relative">
          {/* Section Title */}
          <h2 className="text-white text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            What We Value
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {valueCards.map((card) => (
              <ValueCard key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="py-8 sm:py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-black text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            Where We Work
          </h2>

          {/* Cards Container with Overlapping Layout */}
          <div className="relative flex items-center justify-center overflow-x-auto pb-4 sm:pb-0">
            <div className="flex items-center justify-center gap-2 sm:gap-0">
              {workLocationCards.map((card, index) => (
                <WorkLocationCard key={card.id} data={card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-16 lg:pb-24">
        <div>
          <h2 className="text-center text-black mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            Our Partners
          </h2>
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="shrink-0 w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-40 lg:h-28"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-16 lg:py-24">
          <h2 className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            Why become a Partner?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {thePressData.map((item, index) => (
              <div
                style={{ backgroundColor: item.bgColor }}
                key={index}
                className={`rounded-xl p-6 sm:p-7 md:p-8 lg:p-9`}
              >
                <h3 className="text-white mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                  {item.title}
                </h3>
                <h4 className="text-white mb-3 sm:mb-4">{item.description}</h4>
                <div className="flex items-center gap-3 sm:gap-4">
                  <p className="text-white text-sm sm:text-base">{item.date}</p>
                  <span className="text-white">|</span>
                  <p className="text-white text-sm sm:text-base">
                    {item.readTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
