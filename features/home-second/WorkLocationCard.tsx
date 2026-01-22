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
    const styles = {
      0: {
        transform: "translateY(16px) translateX(-8px)",
        zIndex: 1,
        width: "w-48 md:w-56 lg:w-64",
        marginRight: -32, // -8rem in pixels (negative margin for overlap)
      },
      1: {
        transform: "translateY(8px) translateX(-4px)",
        zIndex: 2,
        width: "w-52 md:w-60 lg:w-72",
        marginRight: -48,
      },
      2: {
        transform: "translateY(0px) translateX(0px)",
        zIndex: 10,
        width: "w-56 md:w-64 lg:w-80",
        marginRight: -48,
      },
      3: {
        transform: "translateY(8px) translateX(4px)",
        zIndex: 2,
        width: "w-52 md:w-60 lg:w-72",
        marginRight: -48,
      },
      4: {
        transform: "translateY(16px) translateX(8px)",
        zIndex: 1,
        width: "w-48 md:w-56 lg:w-64",
        marginRight: 0,
      },
    };

    const cardStyle = styles[index as keyof typeof styles] || styles[2];

    return {
      className: `${baseStyles} ${cardStyle.width}`,
      style: {
        transform: cardStyle.transform,
        zIndex: cardStyle.zIndex,
        marginRight: `${cardStyle.marginRight}px`,
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
