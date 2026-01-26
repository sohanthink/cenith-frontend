import { MapPin } from "lucide-react";
import React from "react";
interface IProps {
  title: string;
  description: string;
}

const Experience = ({ title, description }: IProps) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 justify-center flex-col sm:flex-row text-center sm:text-left">
      <div className="shrink-0">
        <MapPin
          width={36}
          height={36}
          className="text-white sm:w-[40px] sm:h-[40px] lg:w-[46px] lg:h-[46px]"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-white">{title}</h3>
        <p className="capitalize text-white mt-1 font-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Experience;
