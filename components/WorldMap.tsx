import Image from "next/image";
import React from "react";

const WorldMap = () => {
  return (
    <section>
      <h2 className="text-center text-black mb-14 container mx-auto px-2 sm:px-6">
        Store your luggage all over the world
      </h2>

      <div>
        <Image
          src="/home/world-map.png"
          alt="World map"
          quality={100}
          width={1000000}
          height={1000000}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WorldMap;
