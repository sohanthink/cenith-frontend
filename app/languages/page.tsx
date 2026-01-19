"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";

export default function LanguagesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const languages = [
    {
      id: "english",
      name: "English",
      flag: "/uk-flag.svg",
    },
    {
      id: "italian",
      name: "Italian",
      flag: "/brazil-flag.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <Image src="/logo-main.svg" alt="logo" width={180} height={180} />
        <Link href="/faq" className="text-primary font-medium hover:underline">
          Need help?
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 pb-32">
        <div className="w-full max-w-lg">
          <h3 className="text-black text-center mb-12">
            What&apos;s Your Preferred Language?
          </h3>

          <div className="space-y-3">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => setSelectedLanguage(language.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 rounded-lg border-2 transition-all ${
                  selectedLanguage === language.id
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-gray-200 text-black hover:border-primary"
                }`}
              >
                <Image
                  src={language.flag}
                  alt={language.name}
                  width={20}
                  height={20}
                />
                <span className="text-base font-medium">{language.name}</span>
                <div className="ml-auto">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      selectedLanguage === language.id
                        ? "border-white border-5"
                        : "border-gray-300 border-2"
                    }`}
                  >
                    {selectedLanguage === language.id && (
                      <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Continue Button */}
      <div className="fixed bottom-8 right-8">
        <Button variant="primary" size="lg">
          Continue
        </Button>
      </div>
    </div>
  );
}
