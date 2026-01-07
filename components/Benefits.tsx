import Image from "next/image";
import React from "react";

interface IProps {
  image: string;
  title: string;
}

const Benefits = ({ image, title }: IProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-himalayan-white rounded-xl p-16 relative overflow-hidden group border border-transparent hover:border-dashed hover:border hover:border-primary transition-all duration-300">
      <div className="h-20 w-20">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="text-center mt-6">{title}</h3>

      <div className="h-14 w-14 rounded-full bg-primary absolute -bottom-7 right-1/2 translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300"></div>
    </div>
  );
};

export default Benefits;
