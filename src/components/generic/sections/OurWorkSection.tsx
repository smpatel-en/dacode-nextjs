"use client";

import Heading from "@/components/core/Heading";
import Button from "@/components/core/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { portfolioItems } from "@/lib/data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function OurWork() {
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);
  const [activeTag, setActiveTag] = useState("All");

  const uniqueTags = [
    "All",
    ...new Set(portfolioItems.map((item) => item.tag)),
  ];

  const filteredItems =
    activeTag === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tag === activeTag);

  return (
    <section className="relative">
      <div className="container">
        {/* Wrapper */}
        <div>
          {/* Header */}
          <Heading title="Our Great Work" subtitle="portfolio" />

          {/* Body */}
          <div>
            {/* Filter tags */}
            <div className="mb-10 flex flex-wrap justify-center gap-4">
              {uniqueTags.map((tag, index) => (
                <Button
                  key={index}
                  variant={
                    activeTag === tag ? "secondary" : "outline-secondary"
                  }
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>

            {/* Slider For Images */}
            <div className="relative mb-4 lg:mb-8">
              <Swiper
                modules={[Navigation, Controller]}
                slidesPerView={3}
                spaceBetween={35}
                navigation={{
                  nextEl: ".work-custom-swiper-button-next",
                  prevEl: ".work-custom-swiper-button-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
              >
                {filteredItems.map((item, index) => (
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
                  className="work-custom-swiper-button-prev bg-light z-1 hidden -translate-x-1/2 place-items-center md:grid md:h-14 md:w-14 xl:h-16 xl:w-16"
                >
                  <IoIosArrowBack className="text-4xl" />
                </Button>
                <Button
                  size="none"
                  variant="outline-primary"
                  className="work-custom-swiper-button-next bg-light z-1 hidden translate-x-1/2 place-items-center md:grid md:h-14 md:w-14 xl:h-16 xl:w-16"
                >
                  <IoIosArrowForward className="text-4xl" />
                </Button>
              </div>
            </div>

            {/* Swiper Slider For Text */}
            <Swiper
              modules={[Controller]}
              slidesPerView={3}
              spaceBetween={35}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
            >
              {filteredItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <p className="text-base lg:text-lg/[170%]">{item.text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Button
        size="large"
        variant="dark"
        className="absolute bottom-0 left-1/2 z-1 -translate-x-1/2 translate-y-1/2"
      >
        See All
      </Button>
    </section>
  );
}
