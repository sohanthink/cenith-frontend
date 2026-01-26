import React from "react";
import Link from "next/link";
import { HandCoins, Shield, ShieldCheck, Wallet } from "lucide-react";
import Button from "@/components/common/Button";

const PageOne = () => {
  const terms = [
    {
      icon: HandCoins,
      iconBg: "bg-[#FAB71614]",
      iconColor: "text-yellow",
      title: "Commission.",
      description:
        "Bounce agrees to pay a commission on every reservation completed at your location.",
    },
    {
      icon: ShieldCheck,
      iconBg: "bg-[#FAB71614]",
      iconColor: "text-yellow",
      title: "Security.",
      description:
        "Securely store each bag. Confirm bookings with the customers, attach Bounce bag tags, and keep them safe until the customer returns.",
    },
    {
      icon: Wallet,
      iconBg: "bg-[#FAB71614]",
      iconColor: "text-yellow",
      title: "Earnings.",
      description: "You will be paid monthly for your Bounce Storage revenue.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <h2 className="text-black text-center mb-4 sm:mb-5 md:mb-6">
          Partner Terms And Conditions
        </h2>

        {/* Subtitle */}
        <p className="text-center text-black mb-6 sm:mb-7 md:mb-8">
          To sign up with Bounce, you need to accept our{" "}
          <Link href="#" className="text-primary hover:underline font-medium">
            Partner Terms and Conditions
          </Link>
        </p>

        {/* Terms List */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-7 md:mb-8">
          {terms.map((term, index) => (
            <div key={index} className="flex gap-3 sm:gap-4">
              <div
                className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${term.iconBg} rounded-lg flex items-center justify-center`}
              >
                <term.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${term.iconColor}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-black leading-relaxed">
                  <span className="font-semibold">{term.title}</span>{" "}
                  {term.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-black text-xs sm:text-sm mb-6 sm:mb-7 md:mb-8 px-2">
          By proceeding you agree to our{" "}
          <Link href="#" className="text-primary hover:underline font-medium">
            Partner Terms and Conditions
          </Link>{" "}
          and acknowledge that you have read our{" "}
          <Link href="#" className="text-primary hover:underline font-medium">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Accept And Continue
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="bg-black hover:bg-black/80 text-white w-full sm:w-auto"
          >
            Download App
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
