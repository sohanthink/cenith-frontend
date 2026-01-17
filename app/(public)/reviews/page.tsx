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
    <section className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
      {/* Rating Summary Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 w-3/4">
        {/* Left: Overall Rating */}
        <div className="flex flex-col items-center md:items-start shadow-sm p-14 rounded-xl ">
          <h2 className="font-primary text-black mb-7 text-center w-full">
            {averageRating}
          </h2>
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                width={18}
                height={18}
                className="text-yellow"
                fill="currentColor"
              />
            ))}
          </div>
          <p className="text-text font-medium text-center w-full">
            ({totalReviews} Reviews)
          </p>
        </div>

        {/* Right: Star Breakdown */}
        <div className="flex-1 space-y-4">
          {ratingBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-4">
              <div className="flex items-center gap-2 min-w-[100px]">
                <span className="text-base text-black font-medium">
                  {item.stars}
                </span>
                <StarIcon
                  width={18}
                  height={18}
                  className="text-yellow"
                  fill="currentColor"
                />
              </div>
              <div className="flex-1 relative h-6 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-yellow rounded-full transition-all duration-300"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm text-text min-w-[70px] text-right font-medium">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-black mb-12">What Our Customers Say</h2>

      {/* Testimonial Card */}
      <div className="bg-himalayan-white rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-64 md:h-auto min-h-[400px] relative">
            <Image
              src={testimonial.image}
              alt="Customer testimonial location"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:w-2/3 p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-10 gap-8 w-full">
              <div className="w-20 h-20 col-span-1">
                <Image
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="col-span-9">
                <h5 className="text-black font-primary mb-1">
                  {testimonial.name}
                </h5>

                <p className="text-text text-sm mb-4">{testimonial.location}</p>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      width={16}
                      height={16}
                      className="text-yellow"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-text font-semibold">{testimonial.review}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        <FindLocationCard />
    

    <PeopleSay dataCount={5}/>
    </>
  );
}
