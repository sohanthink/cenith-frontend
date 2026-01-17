import { reviews } from '@/data/homeData'
import { ChevronLeft, ChevronRight, Link, StarIcon } from 'lucide-react'
import React from 'react'

const PeopleSay = ({dataCount}: {dataCount: number}) => {
  return (
    <section className="container mx-auto px-2 sm:px-6 py-12 md:py-24">
        <h2 className="text-center text-black mb-12">
          What people say about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center gap-2 border-2 border-primary border-dashed rounded-xl p-24">
            <p className="text-black text-2xl font-bold font-primary">
              Excellent
            </p>
            <h2 className="text-black font-primary">5.0</h2>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  width={16}
                  height={16}
                  className="text-yellow"
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-text">Based on 15,29 reviews</p>
            <Link href="/reviews" className="text-primary hover:underline">
              See all reviews
            </Link>
          </div>
          {reviews.slice(0, dataCount).map((item, index) => (
            <div
              key={index}
              className="bg-himalayan-white rounded-xl px-7 py-12"
            >
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    width={16}
                    height={16}
                    className="text-yellow"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="my-6 text-text">{item.description}</p>
              <h5 className="text-black font-bold font-primary">{item.name}</h5>
              <p className="text-text mt-1">{item.designation}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10 gap-4">
          <div className="cursor-pointer p-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out w-10 h-10 flex items-center justify-center group">
            <ChevronLeft
              width={20}
              height={20}
              className="text-primary group-hover:text-white transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="cursor-pointer p-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out w-10 h-10 flex items-center justify-center group">
            <ChevronRight
              width={20}
              height={20}
              className="text-primary  group-hover:text-white transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>
  )
}

export default PeopleSay