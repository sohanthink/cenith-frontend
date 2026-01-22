import { ArrowUpRight } from "lucide-react";
import { ValueCardData } from "@/data/homeSecondData";

interface ValueCardProps {
  data: ValueCardData;
}

const ValueCard = ({ data }: ValueCardProps) => {
  return (
    <div className="bg-white rounded-xl p-10 flex flex-col">
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-black flex items-center justify-center">
          <h3 className="text-white">{data.number}</h3>
        </div>
      </div>
      <h3 className="text-black mb-4 text-center font-primary">{data.title}</h3>
      <p className="text-text mb-8 text-center">{data.description}</p>
      <div className="flex justify-center">
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
      </div>
    </div>
  );
};

export default ValueCard;
