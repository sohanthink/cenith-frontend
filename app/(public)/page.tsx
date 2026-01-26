import Benefits from "@/components/Benefits";
import Button from "@/components/common/Button";
import Experience from "@/components/Experience";
import Locations from "@/features/home/Locations";
import {
  benefits,
  experience,
  faqs,
  partners,
  reviews,
  worksType,
} from "@/data/homeData";
import { ChevronLeft, ChevronRight, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/features/home/Banner";
import BookingSection from "@/features/home/BookingSection";
import Faq from "@/features/home/Faq";
import WorldMap from "@/components/WorldMap";
import PeopleSay from "@/components/PeopleSay";

export default function Home() {
  return (
    <main>
      <Banner />

      <section className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
          <p className="text-white text-center font-primary px-4">
            Our mission is to enhance your travel experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {experience.map((item) => (
              <Experience
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 md:pt-24">
        <h2 className="text-center text-black mb-8 sm:mb-12 px-4">
          Benefits of our luggage Storage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((item) => (
            <Benefits key={item.title} image={item.image} title={item.title} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-center text-black mb-8 sm:mb-12 px-4">
            How it works
          </h2>
          <div className="hidden lg:flex w-[72%] max-w-4xl items-center justify-center h-full -z-1 absolute -top-10 left-1/2 -translate-x-1/2">
            <Image
              src="/home/line-bg.svg"
              alt="works-type-bg"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full h-full z-10">
            {worksType.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 lg:p-20 group"
              >
                <div className="mb-4 lg:mb-6 shadow-lg px-5 py-6 lg:px-7 lg:py-9 rounded-xl bg-white">
                  <h5>Step {index + 1}</h5>
                </div>
                <h3 className="text-black font-bold font-primary">
                  {item.title}
                </h3>
                <p className="text-gray mt-2 font-secondary group-hover:text-text transition-all duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PeopleSay dataCount={2} />

      <section className="bg-primary relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30 md:opacity-100">
          <Image
            src="/home/booktap-bg.webp"
            alt="Book in 3 taps"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 pt-12 lg:pt-24 overflow-hidden relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="lg:w-1/2 text-white text-center lg:text-left w-full">
              <h2 className="text-white font-primary">Book In 3 Taps</h2>
              <p className="mb-6 font-secondary mt-4 text-white">
                Instantly find locations nearby to drop off your luggage
                <span className="hidden sm:inline">
                  <br />
                </span>
                <span className="sm:hidden"> </span>
                wherever you go.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="ghost"
                  className="bg-white text-primary text-sm sm:text-base"
                >
                  Find Closest Locations
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end w-full relative">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <Image
                  src="/home/booktap-1.png"
                  alt="Happy traveler with phone and luggage"
                  className="w-full h-auto rounded-lg object-contain relative z-10"
                  width={500}
                  height={500}
                />
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                  <Image
                    src="/home/booktap-2.webp"
                    alt="Happy traveler with phone and luggage"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain scale-[3] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div>
          <h2 className="text-center text-black mb-8 sm:mb-12 md:mb-20 px-4">
            Our Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="shrink-0 w-24 sm:w-28 md:w-32 lg:w-40 h-auto"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Locations />

      <BookingSection />

      <Faq faqsData={faqs} />

      <WorldMap />
    </main>
  );
}
