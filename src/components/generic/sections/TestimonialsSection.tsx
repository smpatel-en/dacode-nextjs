"use client";
import { useState } from "react";
import Heading from "@/components/core/Heading";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

import User1 from "@public/assets/images/user-1.png";
import User2 from "@public/assets/images/user-2.png";
import User3 from "@public/assets/images/user-3.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Button from "@/components/core/Button";

const testimonials = [
  {
    name: "Paulus Haverinen",
    role: "Owner, Ikirakenne Ltd",
    avatar: User3,
    rating: 5,
    comment:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    name: "Paulus Haverinen",
    role: "Owner, Ikirakenne Ltd",
    avatar: User2,
    rating: 5,
    comment:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    name: "Paulus Haverinen",
    role: "Owner, Ikirakenne Ltd",
    avatar: User1,
    rating: 5,
    comment:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    name: "Paulus Haverinen",
    role: "Owner, Ikirakenne Ltd",
    avatar: User2,
    rating: 5,
    comment:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    name: "Paulus Haverinen",
    role: "Owner, Ikirakenne Ltd",
    avatar: User3,
    rating: 5,
    comment:
      "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
];

export default function TestimonialsSection() {
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="overflow-hidden">
      <div className="container lg:overflow-x-hidden">
        {/* Wrapper */}
        <div>
          {/* Heading */}
          <Heading title="Our Happy Clients" subtitle="Testiomonials" />

          {/* Body */}
          <div className="mb-12.5">
            {/* Testimonial Content */}
            <Swiper
              className="overflow-visible!"
              modules={[Navigation, Controller]}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                nextEl: ".testimonials-custom-swiper-button-next",
                prevEl: ".testimonials-custom-swiper-button-prev",
              }}
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="mx-auto flex max-w-none flex-col items-center rounded-xl p-6 shadow-lg sm:p-12 lg:max-w-[70%] lg:p-15">
                    {/* Rating Number */}
                    <p className="mb-1 text-2xl font-bold tracking-[0.6px] lg:text-[32px]">
                      {testimonial.rating}.0
                    </p>
                    {/* Rating Star Container */}
                    <div className="mb-6 flex">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          className="text-lg text-yellow-400 lg:text-2xl"
                        />
                      ))}
                    </div>
                    {/* Comment */}
                    <p className="text-lg italic lg:text-2xl/[177%]">
                      {testimonial.comment}
                    </p>
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 hidden w-full justify-between gap-4 md:flex">
                <Button
                  variant="ghost"
                  size="none"
                  className="testimonials-custom-swiper-button-prev z-1 grid h-16 w-16 place-items-center shadow-sm"
                >
                  <IoIosArrowBack className="text-3xl" />
                </Button>
                <Button
                  variant="ghost"
                  size="none"
                  className="testimonials-custom-swiper-button-next z-1 grid h-16 w-16 place-items-center shadow-sm"
                >
                  <IoIosArrowForward className="text-3xl" />
                </Button>
              </div>
            </Swiper>
          </div>
          <div className="mx-auto max-w-3xl">
            {/* Testimonial Avatar */}
            <Swiper
              modules={[Navigation, Controller]}
              slidesPerView={5}
              centeredSlides={true}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              slideToClickedSlide={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 5,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  {({ isActive, isPrev, isNext }) => {
                    const getSlideOpacity = () => {
                      if (isActive) return "opacity-100";
                      if (isPrev || isNext) return "opacity-70";
                      return "opacity-50";
                    };

                    const getSlideScale = () => {
                      if (isActive) return "scale-100";
                      if (isPrev || isNext) return "scale-80";
                      return "scale-70";
                    };

                    return (
                      <>
                        {/* Image Wrapper */}
                        <div
                          className={`mx-auto mb-7.5 max-w-30 overflow-hidden rounded-full transition-all duration-300 ${getSlideScale()} ${getSlideOpacity()} ${isActive ? "border-secondary/50 border-4 shadow-sm" : "cursor-pointer border-2 border-transparent"} `}
                        >
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </div>
                        {/* User Info */}
                        <div
                          className={`flex flex-col items-center text-center transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                        >
                          <p className="mb-2.5 text-lg font-bold whitespace-nowrap lg:text-[22px]">
                            {testimonial.name}
                          </p>
                          <p className="text-primary whitespace-nowrap">
                            {testimonial.role}
                          </p>
                        </div>
                      </>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
