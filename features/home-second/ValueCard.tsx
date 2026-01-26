import { ArrowUpRight } from "lucide-react";
import { ValueCardData } from "@/data/homeSecondData";

interface ValueCardProps {
  data: ValueCardData;
}

const ValueCard = ({ data }: ValueCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-7 md:p-8 lg:p-10 flex flex-col h-full">
      <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-black flex items-center justify-center">
          <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
            {data.number}
          </h3>
        </div>
      </div>
      <h3 className="text-black mb-3 sm:mb-4 text-center font-primary">
        {data.title}
      </h3>
      <p className="text-text mb-6 sm:mb-7 md:mb-8 text-center">
        {data.description}
      </p>
      <div className="flex justify-center mt-auto">
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
      </div>
    </div>
  );
};

export default ValueCard;
