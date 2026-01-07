import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import Experience from "@/components/Experience";
import { benefits, experience, worksType } from "@/data/homeData";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />

      <section className="bg-primary">
        <div className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
          <p className="text-white text-center text-2xl font-primary">
            Our mission is to enhance your travel experience
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {experience.map((item) => (
              <Experience
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
        <h2 className="text-center text-black mb-12">
          Benefits of our luggage Storage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <Benefits key={item.title} image={item.image} title={item.title} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-2 sm:px-6 relative z-10">
          <h2 className="text-center text-black mb-12">How it works</h2>
          <div className="w-[72%] flex items-center justify-center h-full -z-1 absolute -top-10 left-1/2 -translate-x-1/2">
            <Image
              src="/home/line-bg.svg"
              alt="works-type-bg"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full z-10">
            {worksType.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-20 group"
              >
                <div className="mb-6 shadow-lg px-7 py-9 rounded-xl bg-white">
                  <h5>Step {index + 1}</h5>
                </div>
                <h3 className="text-black font-bold font-primary">
                  {item.title}
                </h3>
                <p className="text-gray mt-2 font-secondary group-hover:text-text transition-all duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
