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
import WhyBecome from "@/components/WhyBecome";

export default function HomeSecondPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <section className="bg-himalayan-white">
        {/* Top Section with Title, Button, and Icons */}
        <div className="container mx-auto px-2 sm:px-6 py-12 md:py-24 relative">
          <div className="flex flex-col items-center justify-center relative ">
            {/* Main Title */}
            <h1 className="text-center mb-14">
              Change The Way People <br /> Experience Cities
            </h1>

            <Button variant="primary" size="lg" className="px-20">
              See Open Roles
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="container mx-auto px-2 sm:px-6 py-8 md:py-12 relative">
          <div className="absolute -top-[9%] left-[70%] -translate-x-1/2 z-10">
            <Image
              src="/home-second/image-1.png"
              alt="Banner"
              width={1000}
              height={1000}
              className="w-40 h-40 object-contain"
            />
          </div>
          <div className="absolute -top-[21%] left-[90%] -translate-x-1/2 z-10">
            <Image
              src="/home-second/image-2.png"
              alt="Banner"
              width={1000}
              height={1000}
              className="w-40 h-60 object-contain"
            />
          </div>
          <div className="absolute -top-[7%] right-[70%] -translate-x-1/2 z-10">
            <Image
              src="/home-second/image-3.png"
              alt="Banner"
              width={1000}
              height={1000}
              className="w-40 h-28 object-contain"
            />
          </div>
          <div className="absolute -top-[19%] right-[70%] translate-x-1/2 z-10">
            <Image
              src="/home-second/image-4.png"
              alt="Banner"
              width={1000}
              height={1000}
              className="w-40 h-64 object-contain"
            />
          </div>
          <div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200">
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail/Image */}
                  <Image
                    src="/home-second/banner.png"
                    alt="Video thumbnail - woman with suitcase at airport"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Play Button Overlay */}
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
                    aria-label="Play video"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-primary rounded-full">
                        <Play className="w-6 h-6 text-white" fill="white" />
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
        <div className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              We Change How People Live
            </h2>
            <p className="text-lg md:text-xl text-text leading-relaxed max-w-3xl mx-auto">
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
        <div className="container mx-auto px-2 sm:px-6  py-12 md:py-24 z-10 relative">
          {/* Section Title */}
          <h2 className="text-white text-center mb-12 md:mb-16">
            What We Value
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueCards.map((card) => (
              <ValueCard key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-2 sm:px-6">
          <h2 className="text-black text-center mb-12 md:mb-16">
            Where We Work
          </h2>

          {/* Cards Container with Overlapping Layout */}
          <div className="relative flex items-center justify-center">
            <div className="flex items-center justify-center">
              {workLocationCards.map((card, index) => (
                <WorkLocationCard key={card.id} data={card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 sm:px-6 pb-12 md:pb-24">
        <div>
          <h2 className="text-center text-black mb-20">Our Partners</h2>
          <div className="flex justify-between items-center gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <div key={index}>
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
        <div className="container mx-auto px-2 sm:px-6 py-12 md:py-24 ">
          <h2 className="text-center mb-14">Why become a Partner?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {thePressData.map((item, index) => (
              <div
                style={{ backgroundColor: item.bgColor }}
                key={index}
                className={`rounded-xl p-9`}
              >
                <h3 className="text-white mb-24">{item.title}</h3>
                <h4 className="text-white mb-4">{item.description}</h4>
                <div className="flex items-center gap-4">
                  <p className="text-white">{item.date}</p>
                  <span className="text-white">|</span>
                  <p className="text-white">{item.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
