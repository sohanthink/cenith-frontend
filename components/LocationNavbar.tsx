"use client";
import { ChevronDown, Globe, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";

const LocationNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-himalayan-white sticky top-0 z-50">
      <div className="px-2 sm:px-6 font-secondary">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-main.svg"
                alt="logo"
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <Input
              placeholder="Search for a location..."
              size="md"
              variant="search"
              fullWidth
              rightIcon={Search}
              className="w-full"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-11">
            <Link
              href="/faq"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/faq"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              Menu
            </Link>

            <Button
              variant="ghost"
              className="gap-2 border border-gray/50"
              size="md"
              rightIcon={ChevronDown}
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">English</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/faq"
                className="text-black hover:text-primary font-medium"
              >
                FAQ
              </Link>
              <Link
                href="/faq"
                className="text-black hover:text-primary font-medium"
              >
                Menu
              </Link>
              <div className="w-full">
                <Input
                  placeholder="Search for a location..."
                  size="md"
                  variant="search"
                  fullWidth
                  rightIcon={Search}
                  className="w-full"
                />
              </div>
              <Button variant="outline" size="md">
                <Globe className="w-4 h-4" />
                <span className="font-medium">English</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LocationNavbar;
