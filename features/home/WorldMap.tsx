import Image from "next/image";
import React from "react";

const WorldMap = () => {
  return (
    <section className="relative container mx-auto px-2 sm:px-6">
      <h2 className="text-center text-black mb-14">
        Store your luggage all over the world
      </h2>

      <div>
        <Image
          src="/home/booktap-bg.webp"
          alt="Book in 3 taps"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 w-full h-full z-10">
        <Image
          src="/home/world-line.svg"
          alt="World line"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      </div>
      <div>
        <div className="bg-white rounded-xs p-2.5 shadow-2xl absolute -bottom-[10%] -translate-y-1/2 left-[23%] w-fit text-center z-20 -rotate-[18deg]">
          <div className="rounded-full mx-auto mb-1">
            <Image
              src="/home/usa-flag.png"
              alt="USA flag"
              width={1000}
              height={1000}
              className="w-10 h-10 object-cover rounded-full mx-auto"
            />
          </div>
          <p className="text-black font-primary">Asia</p>
          <p className="text-text font-secondary">honk Kong</p>
        </div>

        <div className="bg-white rounded-xs p-2.5 shadow-2xl absolute bottom-[34%] -translate-y-1/2 left-[32%] w-fit text-center z-20 rotate-[22deg]">
          <div className="rounded-full mx-auto mb-1">
            <Image
              src="/home/usa-flag.png"
              alt="USA flag"
              width={1000}
              height={1000}
              className="w-10 h-10 object-cover rounded-full mx-auto"
            />
          </div>
          <p className="text-black font-primary">North</p>
          <p className="text-text font-secondary">England</p>
        </div>

        <div className="bg-white rounded-xs p-2.5 shadow-2xl absolute -bottom-[10%] -translate-y-1/2 left-[44%] w-fit text-center z-20 rotate-[11deg]">
          <div className="rounded-full mx-auto mb-1">
            <Image
              src="/home/usa-flag.png"
              alt="USA flag"
              width={1000}
              height={1000}
              className="w-10 h-10 object-cover rounded-full mx-auto"
            />
          </div>
          <p className="text-black font-primary">Africa</p>
          <p className="text-text font-secondary">Cape Town</p>
        </div>

        <div className="bg-white rounded-xs p-2.5 shadow-2xl absolute top-[48%] -translate-y-1/2 right-[38%] w-fit text-center z-20 -rotate-[11deg]">
          <div className="rounded-full mx-auto mb-1">
            <Image
              src="/home/usa-flag.png"
              alt="USA flag"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xs mx-auto"
            />
          </div>
          <p className="text-black font-primary">Europe</p>
          <div className="flex items-center -space-x-1 mx-auto">
            <Image
              src="/home/usa-flag.png"
              alt="USA flag"
              width={1000}
              height={1000}
              className="w-7 h-7 object-cover rounded-full mx-auto"
            />
            <Image
              src="/home/usa-flag.png"
              alt="USA flag"
              width={1000}
              height={1000}
              className="w-7 h-7 object-cover rounded-full mx-auto"
            />
            <Image
              src="/home/usa-flag.png"
              alt="USA flag"
              width={1000}
              height={1000}
              className="w-7 h-7 object-cover rounded-full mx-auto"
            />
            <div className="text-white text-sm font-secondary bg-primary rounded-full p-1.5">
              70+
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xs p-2.5 shadow-2xl absolute bottom-[10%] -translate-y-1/2 right-[24%] w-fit text-center z-20 -rotate-[5deg]">
          <div className="rounded-full mx-auto mb-1">
            <Image
              src="/home/usa-flag.png"
              alt="USA flag"
              width={1000}
              height={1000}
              className="w-10 h-10 object-cover rounded-full mx-auto"
            />
          </div>
          <p className="text-black font-primary">Oceania</p>
          <p className="text-text font-secondary">Sydney</p>
        </div>
        <div className="bg-white rounded-xs p-2.5 shadow-2xl absolute top-[20%] -translate-y-1/2 right-[24%] w-fit text-center z-20 -rotate-[12deg]">
          <div className="rounded-full mx-auto mb-1">
            <Image
              src="/home/usa-flag.png"
              alt="USA flag"
              width={1000}
              height={1000}
              className="w-10 h-10 object-cover rounded-full mx-auto"
            />
          </div>
          <p className="text-black font-primary">Americas</p>
          <p className="text-text font-secondary">New York</p>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
