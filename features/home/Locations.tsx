import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { locations } from "@/data/homeData";

const Locations = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
      <div>
        <h2 className="text-center text-black px-4">
          Our Top Luggage Storage Locations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-14">
          <div className="rounded-xl p-2.5 sm:p-3 border border-gray/25 group">
            <div className="overflow-hidden w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-5 md:mb-6 rounded-xl">
              <Image
                src={locations[0].image}
                alt={locations[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h5 className="text-black font-primary text-sm sm:text-base md:text-lg truncate">
                  {locations[0].title}
                </h5>
                <p className="text-text text-xs sm:text-sm">
                  {locations[0].rating}
                </p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <div className="rounded-xl p-2.5 sm:p-3 border border-gray/25 group">
            <div className="overflow-hidden w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-5 md:mb-6 rounded-xl">
              <Image
                src={locations[1].image}
                alt={locations[1].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h5 className="text-black font-primary text-sm sm:text-base md:text-lg truncate">
                  {locations[1].title}
                </h5>
                <p className="text-text text-xs sm:text-sm">
                  {locations[1].rating}
                </p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-2 rounded-xl p-2.5 sm:p-3 border border-gray/25 group">
            <div className="overflow-hidden w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-5 md:mb-6 rounded-xl">
              <Image
                src={locations[2].image}
                alt={locations[2].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h5 className="text-black font-primary text-sm sm:text-base md:text-lg truncate">
                  {locations[2].title}
                </h5>
                <p className="text-text text-xs sm:text-sm">
                  {locations[2].rating}
                </p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-2 rounded-xl p-2.5 sm:p-3 border border-gray/25 group">
            <div className="overflow-hidden w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-5 md:mb-6 rounded-xl">
              <Image
                src={locations[3].image}
                alt={locations[3].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h5 className="text-black font-primary text-sm sm:text-base md:text-lg truncate">
                  {locations[3].title}
                </h5>
                <p className="text-text text-xs sm:text-sm">
                  {locations[3].rating}
                </p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <div className="rounded-xl p-2.5 sm:p-3 border border-gray/25 group">
            <div className="overflow-hidden w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-5 md:mb-6 rounded-xl">
              <Image
                src={locations[4].image}
                alt={locations[4].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h5 className="text-black font-primary text-sm sm:text-base md:text-lg truncate">
                  {locations[4].title}
                </h5>
                <p className="text-text text-xs sm:text-sm">
                  {locations[4].rating}
                </p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <div className="rounded-xl p-2.5 sm:p-3 border border-gray/25 group">
            <div className="overflow-hidden w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-5 md:mb-6 rounded-xl">
              <Image
                src={locations[5].image}
                alt={locations[5].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h5 className="text-black font-primary text-sm sm:text-base md:text-lg truncate">
                  {locations[5].title}
                </h5>
                <p className="text-text text-xs sm:text-sm">
                  {locations[0].rating}
                </p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
