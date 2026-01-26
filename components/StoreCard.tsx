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
  variant?: "primary" | "secondary";
}

const StoreCard = ({ data, variant = "primary" }: IProps) => {
  return (
    <div
      className={`${variant === "primary" ? "flex flex-col sm:grid sm:grid-cols-7" : "flex flex-col gap-4"} items-center justify-between gap-3 bg-white shadow rounded-lg p-3 sm:p-4 group hover:bg-primary transition-all duration-300`}
    >
      <div
        className={`overflow-hidden rounded-lg ${variant === "primary" ? "w-full sm:col-span-2 h-40 sm:h-auto" : "w-full h-60 object-cover"}`}
      >
        <Image
          src="/store-card.png"
          alt="store card"
          width={100}
          height={100}
          className="object-cover rounded-lg w-full h-full group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div
        className={`${variant === "primary" ? "flex flex-col gap-2 sm:gap-3 w-full sm:col-span-5" : "w-full"}`}
      >
        <div>
          <p className="font-semibold text-black group-hover:text-white transition-all duration-300">
            {data.title}
          </p>
          <p className="text-sm text-black group-hover:text-white transition-all duration-300">
            {data.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs">
          <span className="text-text flex items-center gap-1 group-hover:text-white transition-all duration-300 shrink-0">
            <Star
              className="w-3 h-3 sm:w-4 sm:h-4 group-hover:fill-white group-hover:stroke-white transition-all duration-300 shrink-0"
              fill="#0082e0"
              stroke="#0082e0"
            />
            {data.rating} ({data.reviews})
          </span>
          <span className="text-text group-hover:text-white transition-all duration-300 hidden sm:inline">
            •
          </span>
          <span className="text-text group-hover:text-white transition-all duration-300 shrink-0">
            Closed Opens at {data.openingTime}
          </span>
          <span className="text-text group-hover:text-white transition-all duration-300 hidden sm:inline">
            •
          </span>
          <span className="text-text flex items-center gap-1 group-hover:text-white transition-all duration-300 shrink-0">
            <Footprints className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />{" "}
            {data.distance} min
          </span>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 justify-between border-t border-gray/50 pt-2 sm:pt-3 ${variant === "primary" ? "" : "mt-3"}`}
        >
          <div className="text-sm text-text group-hover:text-white transition-all duration-300">
            From ${data.price}/ day
          </div>
          <Button
            variant="primary"
            size="sm"
            className="group-hover:bg-white group-hover:text-primary transition-all duration-300 w-full sm:w-auto"
          >
            Book this store
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
