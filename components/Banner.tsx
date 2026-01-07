import { Search } from "lucide-react";
import ClosestLocations from "./ClosestLocations";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:pl-7">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Starting From €2.70/Day
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black font-primary leading-[80px]">
              The Best Luggage <span className="text-primary">Storage</span>{" "}
              Service!
            </h1>

            <p className="text-black md:text-lg mt-6 mb-8">
              Drop off your heavy luggage at our Cenith storage and enjoy your
              trip hands-free!
            </p>

            <div className="search-wrapper relative mx-auto max-w-3xl">
              <button className="floating-btn">Find Closest Locations</button>

              <div className="search-container flex justify-between items-center gap-4 ">
                <div className="search-input">
                  <Search className="icon" color="var(--color-primary)" />
                  <input
                    type="text"
                    placeholder="Search Place Or Address"
                    className="placeholder:text-primary w-full"
                  />
                </div>

                <div className="flex items-center gap-6 w-[40%]">
                  <span className="text-gray-300">|</span>
                  <span className="text-accent">Today</span>
                  <span className="text-gray-300">|</span>
                  <ClosestLocations />
                </div>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-linear-to-br from-blue-400 to-blue-600"></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-linear-to-br from-green-400 to-green-600"></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-linear-to-br from-pink-400 to-pink-600"></div>
              </div>
              <div>
                <p className="font-primary font-semibold text-accent">
                  Our Happy Customer
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/star-icon.svg"
                        alt="star"
                        width={20}
                        height={20}
                        className="w-4 h-4"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text font-medium">
                    5.0 (8.9k Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative hidden lg:block">
            <Image
              src="/home/banner-img.png"
              alt="banner"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
