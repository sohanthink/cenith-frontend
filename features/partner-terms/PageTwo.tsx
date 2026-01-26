import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";

export default function PageTwo() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <h2 className="text-black mb-6 sm:mb-7 md:mb-8">You Are All Set!</h2>

        {/* Info Box */}
        <div className="bg-yellow/10 rounded-lg p-4 sm:p-5 md:p-6 mb-8 sm:mb-10 md:mb-12">
          <h5 className="text-black mb-2">Go live faster</h5>
          <p className="text-black mb-3">
            Book a call with our team to get a walkthrough and go live
          </p>
          <Link
            href="#"
            className="text-primary hover:underline font-medium text-sm inline-flex items-center gap-1"
          >
            Book a call
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Explore Partner Portal
          </Button>
        </div>
      </div>
    </div>
  );
}
