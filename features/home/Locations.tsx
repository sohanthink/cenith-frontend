import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { locations } from "@/data/homeData";

const Locations = () => {
  return (
    <section className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
      <div>
        <h2 className="text-center text-black">
          Our Top Luggage Storage Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          <div className="rounded-xl p-2.5 border border-gray/25 group">
            <div className="overflow-hidden w-full h-48 mb-6 rounded-xl">
              <Image
                src={locations[0].image}
                alt={locations[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <h5 className="text-black font-primary">
                  {locations[0].title}
                </h5>
                <p className="text-text text-sm">{locations[0].rating}</p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors" />
            </div>
          </div>
          <div className="rounded-xl p-2.5 border border-gray/25 group">
            <div className="overflow-hidden w-full h-48 mb-6 rounded-xl">
              <Image
                src={locations[1].image}
                alt={locations[1].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <h5 className="text-black font-primary">
                  {locations[1].title}
                </h5>
                <p className="text-text text-sm">{locations[1].rating}</p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors" />
            </div>
          </div>
          <div className="col-span-2 rounded-xl p-2.5 border border-gray/25 group">
            <div className="overflow-hidden w-full h-48 mb-6 rounded-xl">
              <Image
                src={locations[2].image}
                alt={locations[2].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <h5 className="text-black font-primary">
                  {locations[2].title}
                </h5>
                <p className="text-text text-sm">{locations[2].rating}</p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors" />
            </div>
          </div>
          <div className="col-span-2 rounded-xl p-2.5 border border-gray/25 group">
            <div className="overflow-hidden w-full h-48 mb-6 rounded-xl">
              <Image
                src={locations[3].image}
                alt={locations[3].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <h5 className="text-black font-primary">
                  {locations[3].title}
                </h5>
                <p className="text-text text-sm">{locations[3].rating}</p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors" />
            </div>
          </div>
          <div className="rounded-xl p-2.5 border border-gray/25 group">
            <div className="overflow-hidden w-full h-48 mb-6 rounded-xl">
              <Image
                src={locations[4].image}
                alt={locations[4].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <h5 className="text-black font-primary">
                  {locations[4].title}
                </h5>
                <p className="text-text text-sm">{locations[4].rating}</p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors" />
            </div>
          </div>
          <div className="rounded-xl p-2.5 border border-gray/25 group">
            <div className="overflow-hidden w-full h-48 mb-6 rounded-xl">
              <Image
                src={locations[5].image}
                alt={locations[5].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <h5 className="text-black font-primary">
                  {locations[5].title}
                </h5>
                <p className="text-text text-sm">{locations[0].rating}</p>
              </div>
              <ChevronRight className="text-primary group-hover:text-blue-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
