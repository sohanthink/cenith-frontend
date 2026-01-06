"use client";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./common/Button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-himalayan-white sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-6 font-secondary">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-main.svg" alt="logo" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-11">
            <Link
              href="/"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/reviews"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/become-a-partner"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              Become a partner
            </Link>
            <Link
              href="/faq"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/login"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              Login
            </Link>

            <button className="flex items-center gap-1 text-black hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              <span className="font-medium">English</span>
            </button>

            <Button variant="outline" size="md">
              <span className="font-semibold ">Luggage Storage</span>
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
                href="/"
                className="text-black hover:text-primary font-medium"
              >
                Home
              </Link>
              <Link
                href="/reviews"
                className="text-black hover:text-primary font-medium"
              >
                Reviews
              </Link>
              <Link
                href="/become-a-partner"
                className="text-black hover:text-primary font-medium"
              >
                Become a partner
              </Link>
              <Link
                href="/faq"
                className="text-black hover:text-primary font-medium"
              >
                FAQ
              </Link>
              <Link
                href="/login"
                className="text-black hover:text-primary font-medium"
              >
                Login
              </Link>
              <button className="flex items-center gap-1 text-black hover:text-primary w-fit">
                <Globe className="w-4 h-4" />
                <span className="font-medium">English</span>
              </button>
              <button className="px-6 py-2.5 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all w-fit">
                Luggage Storage
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
