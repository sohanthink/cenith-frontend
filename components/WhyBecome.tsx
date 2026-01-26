import Image from "next/image";
import React from "react";

const WhyBecome = ({
  title,
  description,
  image,
  bgColor,
}: {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`flex flex-col rounded-xl p-6 sm:p-8 md:p-10 h-full`}
    >
      <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 rounded-lg bg-white p-3 sm:p-4 md:p-5 -rotate-4 outline-3 outline-primary outline-dashed shrink-0">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-white mt-6 sm:mt-7 md:mt-8 mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default WhyBecome;
