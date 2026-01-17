import Benefits from "@/components/Benefits";
import Button from "@/components/common/Button";
import Experience from "@/components/Experience";
import Locations from "@/features/home/Locations";
import {
  benefits,
  experience,
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
import WorldMap from "@/features/home/WorldMap";
import PeopleSay from "@/components/PeopleSay";

export default function Home() {
  return (
    <main>
      <Banner />

      <section className="bg-primary">
        <div className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
          <p className="text-white text-center text-2xl font-primary">
            Our mission is to enhance your travel experience
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
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

      <section className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
        <h2 className="text-center text-black mb-12">
          Benefits of our luggage Storage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <Benefits key={item.title} image={item.image} title={item.title} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-2 sm:px-6 relative z-10">
          <h2 className="text-center text-black mb-12">How it works</h2>
          <div className="w-[72%] flex items-center justify-center h-full -z-1 absolute -top-10 left-1/2 -translate-x-1/2">
            <Image
              src="/home/line-bg.svg"
              alt="works-type-bg"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full z-10">
            {worksType.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-20 group"
              >
                <div className="mb-6 shadow-lg px-7 py-9 rounded-xl bg-white">
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

      <PeopleSay dataCount={2}/>

      <section className="bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/home/booktap-bg.webp"
            alt="Book in 3 taps"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="container mx-auto px-2 sm:px-6 py-12 md:py-24 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between z-10 relative">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-white font-primary">Book In 3 Taps</h2>
              <p className="mb-6 font-secondary mt-4 text-white">
                Instantly find locations nearby to drop off your luggage
                <br />
                wherever you go.
              </p>
              <Button variant="ghost" className="bg-white text-primary">
                Find Closest Locations
              </Button>
            </div>

            <div className="lg:w-1/2 flex justify-start absolute top-0 right-0 h-full">
              <div className="relative h-full">
                <Image
                  src="/home/booktap-1.png"
                  alt="Happy traveler with phone and luggage"
                  className="w-full max-w-md rounded-lg object-contain"
                  width={500}
                  height={500}
                />
                <div className="absolute top-0 left-1/2 translate-x-1/2 w-full h-full -z-10">
                  <Image
                    src="/home/booktap-2.webp"
                    alt="Happy traveler with phone and luggage"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain scale-[4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
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

      <Locations />

      <BookingSection />

      <Faq />

      <WorldMap />
    </main>
  );
}
