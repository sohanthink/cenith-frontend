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
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <h2 className="text-black text-center mb-6">
          Partner Terms And Conditions
        </h2>

        {/* Subtitle */}
        <p className="text-center text-black mb-8">
          To sign up with Bounce, you need to accept our{" "}
          <Link href="#" className="text-primary hover:underline font-medium">
            Partner Terms and Conditions
          </Link>
        </p>

        {/* Terms List */}
        <div className="space-y-6 mb-8">
          {terms.map((term, index) => (
            <div key={index} className="flex gap-4">
              <div
                className={`shrink-0 w-12 h-12 ${term.iconBg} rounded-lg flex items-center justify-center`}
              >
                <term.icon className={`w-6 h-6 ${term.iconColor}`} />
              </div>
              <div className="flex-1">
                <p className="text-black leading-relaxed">
                  <span className="font-semibold">{term.title}</span>{" "}
                  {term.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-black text-sm mb-8">
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
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">
            Accept And Continue
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="bg-black hover:bg-black/80 text-white"
          >
            Download App
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
