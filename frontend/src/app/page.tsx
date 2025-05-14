"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import Navbar from "../components/Navbar"
import CartItem from "@/components/ProductCard"

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "Outfit" }} className="px-4 py-8">
        {/* Header Section */}
        <section className="text-center mt-12">
          <h1 className="text-3xl md:text-5xl font-bold">Welcome to Shop Galaxy!</h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">Your one-stop shop for everything techy.</p>
        </section>

        {/* Swiper Section - properly centered */}
        <section className="flex items-center justify-center min-h-[60vh] mt-8">
          <div className="w-full max-w-6xl mx-auto px-4">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="w-full"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 max-w-5xl mx-auto">
                  <div className="md:w-3/5 text-center md:text-left flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold">
                      Power meets elegance. Your creative haven in one sleek machine.
                    </h2>
                    <p className="mt-4 text-gray-600">This is a description of the amazing product that you'll love.</p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition-colors w-fit md:mx-0 mx-auto">
                      Buy now
                    </button>
                  </div>
                  <div className="md:w-2/5 flex justify-center items-center">
                    <img
                      src="/images/mac.png"
                      alt="Macbook Pro"
                      className="w-full max-w-[280px] h-auto rounded-lg object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 max-w-5xl mx-auto">
                  <div className="md:w-3/5 text-center md:text-left flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold">
                      See the future. Live the moment. Apple Vision redefines reality.
                    </h2>
                    <p className="mt-4 text-gray-600">
                      This is another description of an amazing product that is equally awesome.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition-colors w-fit md:mx-0 mx-auto">
                      Buy now
                    </button>
                  </div>
                  <div className="md:w-2/5 flex justify-center items-center">
                    <img
                      src="/images/applevision.png"
                      alt="Apple Vision"
                      className="w-full max-w-[280px] h-auto rounded-lg object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 max-w-5xl mx-auto">
                  <div className="md:w-3/5 text-center md:text-left flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold">Experience sound reimagined. Experience Bluedio.</h2>
                    <p className="mt-4 text-gray-600">
                      Experience premium sound with these stylish wireless headphones.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition-colors w-fit md:mx-0 mx-auto">
                      Buy now
                    </button>
                  </div>
                  <div className="md:w-2/5 flex justify-center items-center">
                    <img
                      src="/images/6.png"
                      alt="Anker Buds"
                      className="w-full max-w-[280px] h-auto rounded-lg object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
      <CartItem />
    </>
  )
}
