import { Footprints, Star } from "lucide-react";
import Image from "next/image";
import Button from "./common/Button";

interface IProps {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
    rating: number;
    reviews: number;
    openingTime: string;
    distance: number;
    price: number;
  };
}

const StoreCard = ({ data }: IProps) => {
  return (
    <div className="grid grid-cols-7 items-center justify-between gap-3 bg-white shadow rounded-lg p-3 group hover:bg-primary transition-all duration-300">
      <div className="col-span-2 overflow-hidden rounded-lg">
        <Image
          src="/store-card.png"
          alt="store card"
          width={100}
          height={100}
          className="object-cover rounded-lg w-full h-full group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3 col-span-5">
        <div>
          <p className="font-semibold text-black group-hover:text-white transition-all duration-300">
            {data.title}
          </p>
          <p className="text-sm text-black group-hover:text-white transition-all duration-300">
            {data.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-text flex items-center gap-1 group-hover:text-white transition-all duration-300">
            <Star
              className="w-4 h-4 group-hover:fill-white group-hover:stroke-white transition-all duration-300"
              fill="#0082e0"
              stroke="#0082e0"
            />{" "}
            {data.rating} ({data.reviews})
          </span>
          <span className="text-xs text-text group-hover:text-white transition-all duration-300">
            •
          </span>
          <span className="text-xs text-text group-hover:text-white transition-all duration-300">
            Closed Opens at {data.openingTime}
          </span>{" "}
          <span className="text-xs text-text group-hover:text-white transition-all duration-300">
            •
          </span>
          <span className="text-xs text-text flex items-center gap-1 group-hover:text-white transition-all duration-300">
            <Footprints className="w-4 h-4" /> {data.distance} min
          </span>
        </div>

        <div className="flex items-center gap-2 justify-between border-t border-gray/50 pt-3">
          <div className="text-sm text-text group-hover:text-white transition-all duration-300">
            From ${data.price}/ day
          </div>
          <Button
            variant="primary"
            size="sm"
            className="group-hover:bg-white group-hover:text-primary transition-all duration-300"
          >
            Book this store
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
