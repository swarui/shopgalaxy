'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Welcome to Kikapu!</h1>
        <p className="mt-4 text-gray-600">Your one-stop shop for everything awesome.</p>

        <div className="mt-8">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="flex items-center justify-between">
                <div className="w-1/2 p-8">
                  <h2 className="text-xl font-semibold">Amazing Product 1</h2>
                  <p className="mt-4 text-gray-600">
                    This is a description of the amazing product that you'll love.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    src="/images/mac.png"
                    alt="Product 1"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-between">
                <div className="w-1/2 p-8">
                  <h2 className="text-xl font-semibold">Amazing Product 2</h2>
                  <p className="mt-4 text-gray-600">
                    This is another description of an amazing product that is equally awesome.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    src="/images/product2.jpg"
                    alt="Product 2"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-between">
                <div className="w-1/2 p-8">
                  <h2 className="text-xl font-semibold">Amazing Product 3</h2>
                  <p className="mt-4 text-gray-600">
                    This is another description of an amazing product that is equally awesome.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    src="/images/product2.jpg"
                    alt="Product 2"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
}
