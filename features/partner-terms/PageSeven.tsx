"use client";

import React from "react";
import Button from "@/components/common/Button";
import Image from "next/image";

export default function PageSeven() {
  const verificationCode = "636434";

  const handleSignIn = () => {
    console.log("Signing in to Cenith...");
    // Handle sign in logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-10 md:py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-6 sm:mb-7 md:mb-8">
          <Image
            src="/logo-main.svg"
            alt="Logo"
            width={150}
            height={150}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-full lg:h-full"
          />
        </div>

        {/* Main Title */}
        <h2 className="text-black mb-4 sm:mb-5 md:mb-6">
          Confirm Your Email Address
        </h2>

        {/* Instructional Text */}
        <p className="text-text mb-6 sm:mb-7 md:mb-8">
          You Requested A Verification Code For Your Bounce Account. Please Use
          The Following Code To Login.
        </p>

        {/* Verification Code */}
        <div className="mb-6 sm:mb-7 md:mb-8">
          <div className="text-black text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
            {verificationCode}
          </div>
        </div>

        {/* Sign In Button */}
        <div className="mb-8 sm:mb-9 md:mb-10">
          <Button onClick={handleSignIn} variant="primary" fullWidth>
            Sign In To Cenith
          </Button>
        </div>

        {/* Closing Message */}
        <div className="text-text">
          <h5 className="mb-1">Thank You,</h5>
          <h5>Your Friends At Cenith</h5>
        </div>
      </div>
    </div>
  );
}
