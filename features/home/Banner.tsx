import ClosestLocations from "@/components/ClosestLocations";
import { Search } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:pl-7">
          <div className="w-full">
            <div className="inline-block mb-4"> 
              <span className="bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Starting From €2.70/Day
              </span>
            </div>

            <h1 className="text-black font-primary leading-tight sm:leading-[60px] md:leading-[70px] lg:leading-[80px]">
              The Best Luggage <span className="text-primary">Storage</span>{" "}
              Service!
            </h1>

            <p className="text-black text-sm sm:text-base md:text-lg mt-4 sm:mt-6 mb-6 sm:mb-8">
              Drop off your heavy luggage at our Cenith storage and enjoy your
              trip hands-free!
            </p>

            <div className="search-wrapper relative mx-auto max-w-3xl">
              <button className="floating-btn text-xs sm:text-sm">Find Closest Locations</button>

              <div className="search-container flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-4">
                <div className="search-input flex-1 min-w-0">
                  <Search className="icon" color="var(--color-primary)" />
                  <input
                    type="text"
                    placeholder="Search Place Or Address"
                    className="placeholder:text-primary w-full text-sm sm:text-base"
                  />
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4 md:gap-6 sm:w-auto w-full sm:shrink-0 pt-8 sm:pt-0">
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <span className="text-accent text-sm sm:text-base whitespace-nowrap">Today</span>
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <ClosestLocations />
                </div>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-linear-to-br from-blue-400 to-blue-600"></div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-linear-to-br from-green-400 to-green-600"></div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-linear-to-br from-pink-400 to-pink-600"></div>
              </div>
              <div>
                <p className="font-primary font-semibold text-accent text-xs sm:text-sm md:text-base">
                  Our Happy Customer
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/star-icon.svg"
                        alt="star"
                        width={20}
                        height={20}
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-text font-medium">
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
