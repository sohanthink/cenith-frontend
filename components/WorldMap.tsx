import Image from "next/image";
import React from "react";

const WorldMap = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <h2 className="text-center text-black mb-8 sm:mb-12 md:mb-14 container mx-auto px-4 sm:px-6">
        Store your luggage all over the world
      </h2>

      <div className="w-full overflow-hidden">
        <Image
          src="/home/world-map.png"
          alt="World map"
          quality={100}
          width={1920}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default WorldMap;
