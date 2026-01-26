import Image from "next/image";
import { WorkLocationCardData } from "@/data/homeSecondData";

interface WorkLocationCardProps {
  data: WorkLocationCardData;
  index: number;
}

const WorkLocationCard = ({ data, index }: WorkLocationCardProps) => {
  // Calculate offset positions and sizes for overlapping effect
  const getCardStyles = () => {
    const baseStyles =
      "relative rounded-xl overflow-hidden bg-white transition-all duration-300 hover:scale-105 hover:z-20";

    // Different offsets, z-index, and sizes for each card position
    // On mobile, cards have minimal overlap, on larger screens they overlap more
    const styles = {
      0: {
        transform: "sm:translateY(16px) sm:translateX(-8px)",
        zIndex: 1,
        width: "w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64",
        marginRight: "mr-0 sm:-mr-6 md:-mr-8",
      },
      1: {
        transform: "sm:translateY(8px) sm:translateX(-4px)",
        zIndex: 2,
        width: "w-36 sm:w-44 md:w-52 lg:w-60 xl:w-72",
        marginRight: "mr-0 sm:-mr-8 md:-mr-12",
      },
      2: {
        transform: "sm:translateY(0px) sm:translateX(0px)",
        zIndex: 10,
        width: "w-40 sm:w-48 md:w-56 lg:w-64 xl:w-80",
        marginRight: "mr-0 sm:-mr-8 md:-mr-12",
      },
      3: {
        transform: "sm:translateY(8px) sm:translateX(4px)",
        zIndex: 2,
        width: "w-36 sm:w-44 md:w-52 lg:w-60 xl:w-72",
        marginRight: "mr-0 sm:-mr-8 md:-mr-12",
      },
      4: {
        transform: "sm:translateY(16px) sm:translateX(8px)",
        zIndex: 1,
        width: "w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64",
        marginRight: "mr-0",
      },
    };

    const cardStyle = styles[index as keyof typeof styles] || styles[2];

    return {
      className: `${baseStyles} ${cardStyle.width} ${cardStyle.marginRight}`,
      style: {
        transform: cardStyle.transform,
        zIndex: cardStyle.zIndex,
      },
    };
  };

  const cardStyles = getCardStyles();

  return (
    <div className={cardStyles.className} style={cardStyles.style}>
      <div className="relative w-full h-full">
        <Image
          src={data.image}
          alt={data.alt}
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default WorkLocationCard;
