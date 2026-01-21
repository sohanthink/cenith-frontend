import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";

export default function PageTwo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <h2 className="text-black mb-8">You Are All Set!</h2>

        {/* Info Box */}
        <div className="bg-yellow/10 rounded-lg p-6 mb-12">
          <h5 className="text-black mb-2">Go live faster</h5>
          <p className="text-black mb-3">
            Book a call with our team to get a walkthrough and go live
          </p>
          <Link
            href="#"
            className="text-primary hover:underline font-medium text-sm inline-flex items-center gap-1"
          >
            Book a call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <Button variant="primary" size="lg">
            Explore Partner Portal
          </Button>
        </div>
      </div>
    </div>
  );
}
