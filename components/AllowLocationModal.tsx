import Image from "next/image";
import Button from "./common/Button";

const AllowLocationModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={(e) => e.stopPropagation()}
      ></div>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 relative animate-in fade-in zoom-in duration-200">
          <div className="flex justify-center items-center px-10">
            <Image
              src="/allow-location-img.png"
              alt="allow-location"
              width={100}
              height={100}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-black font-primary text-center">
            Find closest locations
          </h3>
          <p className="text-black font-primary mt-3 mb-6 text-center">
            Allow location access on your phone settings to see stores closest
            to you.
          </p>
          <Button
            onClick={onClose}
            className="w-full"
            variant="secondary"
            size="md"
          >
            Allow Location
          </Button>
        </div>
      </div>
    </>
  );
};

export default AllowLocationModal;
