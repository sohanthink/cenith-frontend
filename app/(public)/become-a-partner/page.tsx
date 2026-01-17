import Button from "@/components/common/Button";
import WhyBecome from "@/components/WhyBecome";
import { faqs } from "@/data/homeData";
import Faq from "@/features/home/Faq";
import Image from "next/image";

const whyBecomeData = [
  {
    title: "Extra traffic",
    description:
      "We send both locals and tourists your way. Build meaningful relationships with your customers, by providing them with something truly personal.",
    image: "/become-partner/shop-icon.svg",
    bgColor: "#007372",
  },
  {
    title: "Extra revenue",
    description:
      "You earn on every item you store through our platform. Payments are automatically paid out at the end of the month.",
    image: "/become-partner/shop-icon.svg",
    bgColor: "#FD0166",
  },
  {
    title: "Extra flexible",
    description:
      "Everything is handled through our online platform. You control your capacity and your opening hours. We let you know when customers are coming by both email and sms.",
    image: "/become-partner/shop-icon.svg",
    bgColor: "#FB8C00",
  },
];

export default function BecomeAPartner() {
  return (
    <>
      <section className="container mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 flex flex-col items-start justify-center">
            <h1>
              More customers, <br />{" "}
              <span className="text-primary">More money</span>
            </h1>
            <p>
              Start a new revenue stream by becoming a Cenith Partner today.
            </p>
            <Button variant="primary" size="lg">
              Become a Partner
            </Button>
          </div>
          <div className="flex items-start justify-center">
            <Image
              src="/become-partner/image-1.png"
              alt="become-a-partner-1"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="bg-himalayan-white mt-24">
        <div className="container mx-auto px-2 sm:px-6 py-12 md:py-24 ">
          <h2 className="text-center mb-14">Why become a Partner?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyBecomeData.map((item) => (
              <WhyBecome
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                bgColor={item.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white relative">
        <div className="absolute top-0 right-0 w-full h-full z-0">
          <Image
            src="/become-partner/bg-shape.svg"
            alt="become-a-partner-bg"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-2 sm:px-6 py-12 md:py-24 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6 flex flex-col items-start justify-center">
              <h2>Apply to become a Cenith Partner</h2>
              <p>
                Not only do we advertise your business and send extra customers
                your way. We also pay you for it. Our partners are an essential
                part of making the Bounce experience sublime.
              </p>
              <Button
                className="bg-white !text-black hover:bg-white/90 !font-bold"
                size="lg"
              >
                Apply now
              </Button>
            </div>
            <div className="flex items-start justify-center">
              <Image
                src="/become-partner/image-2.png"
                alt="become-a-partner-2"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <Faq faqsData={faqs} />
    </>
  );
}
