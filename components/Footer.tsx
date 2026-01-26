import Button from "./common/Button";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#101014] text-white pt-60 pb-12 mt-56 relative">
      <div className="absolute top-0 left-0 w-full z-10 -translate-y-1/2">
        <div className="container mx-auto px-2 sm:px-6">
          <div className="bg-primary rounded-xl relative w-full h-full">
            <div className="absolute bottom-0 left-0 h-full z-10">
              <Image
                src="/footer/shape-1.svg"
                alt="Shape 2"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-0 right-0 h-full z-10">
              <Image
                src="/footer/shape-2.svg"
                alt="Shape 1"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              {/* Left Side - Content */}
              <div className="p-12 lg:p-16 text-white flex flex-col justify-center">
                <h2 className="mb-4">Get The Cenith App</h2>
                <p className="text-lg font-semibold text-white mb-8">
                  Instantly find locations nearby to drop off your luggage
                  wherever you go.
                </p>
                <Button variant="ghost" className="bg-white text-primary w-fit">
                  Find a deposit
                </Button>
              </div>

              {/* Right Side - Phone Image */}
              <div className="absolute bottom-0 right-0 h-[140%] hidden lg:block">
                <Image
                  src="/footer/hand-mobile.png"
                  alt="Mobile app"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/footer/logo.svg"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-32 h-auto object-contain"
              />
            </div>
            <p className="text-white text-sm mb-6">
              Made using clean, non-toxic ingredients, our products are signed
              for everyone
            </p>
            <div className="flex gap-3">
              <Link
                href="/"
                className="w-10 h-10 p-3 bg-white rounded-xl text-primary flex items-center justify-center"
              >
                <Image
                  src="/footer/facebook.svg"
                  alt="Facebook"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </Link>
              <Link
                href="/"
                className="w-10 h-10 p-3 bg-white rounded-xl text-primary flex items-center justify-center"
              >
                <Image
                  src="/footer/instagram.svg"
                  alt="Twitter"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </Link>

              <Link
                href="/"
                className="w-10 h-10 p-3 bg-primary rounded-xl text-primary flex items-center justify-center"
              >
                <Image
                  src="/footer/linkedin.svg"
                  alt="LinkedIn"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </Link>
              <Link
                href="/"
                className="w-10 h-10 p-3 bg-white rounded-xl text-primary flex items-center justify-center"
              >
                <Image
                  src="/footer/twitter.svg"
                  alt="Twitter"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </Link>
              <Link
                href="/"
                className="w-10 h-10 p-3 bg-white rounded-xl text-primary flex items-center justify-center"
              >
                <Image
                  src="/footer/youtube.svg"
                  alt="YouTube"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Become a partner
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Digital capabilities
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Customizable
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  patient management
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  healthcare regulations
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="mb-4">Download our app</h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="flex items-center gap-2 bg-[#212325] py-2 px-4 rounded w-fit"
              >
                <Image
                  src="/footer/apple-icon.svg"
                  alt="Download on App Store"
                  className="w-6 h-auto object-contain"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col">
                  <span className="text-sm text-gray">Download now</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 bg-[#212325] py-2 px-4 rounded w-fit"
              >
                {" "}
                <Image
                  src="/footer/google-play-icon.svg"
                  alt="Get it on Google Play"
                  className="w-6 h-auto object-contain"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col">
                  <span className="text-sm text-gray">Download now</span>
                  <span className="text-sm font-semibold">Play Store</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black pt-6 text-center text-gray text-sm">
          © 2024 - Eduguard. Designed by Cenith. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
