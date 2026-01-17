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
      className={`flex flex-col rounded-xl p-10`}
    >
      <div className="w-20 h-20 rounded-lg bg-white p-5 -rotate-4 outline-3 outline-primary outline-dashed">
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <h3 className="text-white mt-8 mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default WhyBecome;
