"use client";

import Heading from "@/components/core/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import PortfolioImage1 from "@public/assets/images/showcase-1.jpg";
import PortfolioImage2 from "@public/assets/images/showcase-2.jpg";
import PortfolioImage3 from "@public/assets/images/showcase-3.jpg";
import Button from "@/components/core/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const portfolioItems = [
  {
    image: PortfolioImage1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
  {
    image: PortfolioImage2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
  {
    image: PortfolioImage3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
  {
    image: PortfolioImage1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
  {
    image: PortfolioImage2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
  {
    image: PortfolioImage3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
];
export default function OurWork() {
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);

  return (
    <section>
      <div className="container">
        {/* Wrapper */}
        <div>
          {/* Header */}
          <Heading title="Our Great Work" subtitle="portfolio" />

          {/* Body */}
          <div>
            {/* Swiper Slider For Images */}

            <div className="relative mb-8">
              <Swiper
                modules={[Navigation, Controller]}
                slidesPerView={3}
                spaceBetween={35}
                navigation={{
                  nextEl: ".custom-swiper-button-next",
                  prevEl: ".custom-swiper-button-prev",
                }}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
              >
                {portfolioItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-3/2 overflow-hidden rounded-2xl">
                      <Image
                        src={item.image}
                        alt={`Portfolio item ${index + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation Button Wrapper */}
              <div className="absolute inset-0 flex w-full items-center justify-between">
                <Button
                  size="none"
                  variant="outline-primary"
                  className="custom-swiper-button-prev bg-light z-1 grid h-16 w-16 -translate-x-1/2 place-items-center"
                >
                  <IoIosArrowBack className="text-4xl" />
                </Button>
                <Button
                  size="none"
                  variant="outline-primary"
                  className="custom-swiper-button-next bg-light z-1 grid h-16 w-16 translate-x-1/2 place-items-center"
                >
                  <IoIosArrowForward className="text-4xl" />
                </Button>
              </div>
              <div className="bg-primary absolute inset-0 h-full w-full translate-y-1/2" />
            </div>

            {/* Swiper Slider For Text */}
            <Swiper
              modules={[Navigation, Controller]}
              slidesPerView={3}
              spaceBetween={35}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
            >
              {portfolioItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <p className="text-lg/[170%]">{item.text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
