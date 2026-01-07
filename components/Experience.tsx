import { MapPin } from "lucide-react";
import React from "react";
interface IProps {
  title: string;
  description: string;
}

const Experience = ({ title, description }: IProps) => {
  return (
    <div className="flex items-center gap-6 justify-center">
      <div>
        <MapPin width={46} height={46} className="text-white" />
      </div>
      <div>
        <h2 className="text-white">{title}</h2>
        <p className="capitalize text-white mt-1 text-lg font-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Experience;
