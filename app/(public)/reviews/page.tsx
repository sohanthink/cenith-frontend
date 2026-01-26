import PeopleSay from "@/components/PeopleSay";
import FindLocationCard from "@/features/shops/FindLocationCard";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export default function Reviews() {
  // Rating breakdown data
  const ratingBreakdown = [
    { stars: 5, count: 24, percentage: 75 },
    { stars: 4, count: 4, percentage: 12.5 },
    { stars: 3, count: 3, percentage: 9.375 },
    { stars: 2, count: 2, percentage: 6.25 },
    { stars: 1, count: 2, percentage: 6.25 },
  ];

  const totalReviews = 32;
  const averageRating = "5.0";

  // Sample testimonial data
  const testimonial = {
    name: "maurizio castelli",
    location: "In Palermo",
    rating: 5,
    review:
      "I Was In Palermo And Thanks To Nannybag I Was Able To Leave My Suitcase For Only 6 Euros In A Place Near My Hotel And The Train Station. Easy And Fast Booking, Delivery And Collection As Well.",
    image: "/home/location/location-1.png",
    profileImage: "/home/location/location-1.png",
  };

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        {/* Rating Summary Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16 w-full max-w-5xl mx-auto">
          {/* Left: Overall Rating */}
          <div className="flex flex-col items-center md:items-start shadow-sm p-6 sm:p-10 md:p-12 lg:p-14 rounded-xl w-full md:w-auto">
            <h2 className="font-primary text-black mb-4 sm:mb-6 md:mb-7 text-center md:text-left w-full">
              {averageRating}
            </h2>
            <div className="flex items-center gap-1 mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  width={16}
                  height={16}
                  className="sm:w-[18px] sm:h-[18px] text-yellow"
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-text font-medium text-center md:text-left w-full ">
              ({totalReviews} Reviews)
            </p>
          </div>

          {/* Right: Star Breakdown */}
          <div className="flex-1 w-full md:w-auto space-y-3 sm:space-y-4">
            {ratingBreakdown.map((item) => (
              <div
                key={item.stars}
                className="flex items-center gap-2 sm:gap-3 md:gap-4"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-[70px] sm:min-w-[80px] md:min-w-[100px]">
                  <span className="text-sm sm:text-base text-black font-medium">
                    {item.stars}
                  </span>
                  <StarIcon
                    width={14}
                    height={14}
                    className="sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] text-yellow shrink-0"
                    fill="currentColor"
                  />
                </div>
                <div className="flex-1 relative h-5 sm:h-6 bg-gray-100 rounded-full overflow-hidden min-w-0">
                  <div
                    className="absolute left-0 top-0 h-full bg-yellow rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-xs sm:text-sm text-text min-w-[50px] sm:min-w-[60px] md:min-w-[70px] text-right font-medium shrink-0">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-black mb-8 sm:mb-10 md:mb-12 font-semibold px-4 sm:px-0">
          What Our Customers Say
        </h2>

        {/* Testimonial Card */}
        <div className="bg-himalayan-white rounded-xl overflow-hidden mx-4 sm:mx-0">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 h-48 sm:h-64 md:h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] relative">
              <Image
                src={testimonial.image}
                alt="Customer testimonial location"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="w-full md:w-2/3 p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 mx-auto sm:mx-0">
                  <Image
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h5 className="text-black font-primary mb-1 ">
                    {testimonial.name}
                  </h5>

                  <p className="text-text text-xs sm:text-sm mb-3 sm:mb-4">
                    {testimonial.location}
                  </p>

                  <div className="flex items-center gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        width={14}
                        height={14}
                        className="sm:w-[16px] sm:h-[16px] text-yellow shrink-0"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-text font-semibold leading-relaxed">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FindLocationCard />

      <PeopleSay dataCount={5} />
    </>
  );
}
