"use client";

import Button from "@/components/core/Button";
import InfoCard from "@/components/core/card/InfoCard";
import Heading from "@/components/core/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { blogPostsH as blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section className="bg-primary-light-15 relative overflow-hidden">
      {/* Cover Layer */}
      <div className="bg-primary-light-15 absolute inset-0 top-0 left-0 z-1 hidden h-full w-1/2 lg:block" />
      <div className="container">
        {/* Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left | Header */}
          <Heading
            title="DaCode Blog"
            subtitle="News & Articles"
            description="On daCode blog we will review the latest in web development for the SaaS-, tech- and crypto industry."
            variant="left"
            className="z-1 mb-6.5 max-w-lg"
          >
            {/* CTA Button */}
            <Button variant="outline-secondary">See All</Button>
          </Heading>
          {/* Right */}
          <div className="relative z-0">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".blog-custom-swiper-button-next",
                prevEl: ".blog-custom-swiper-button-prev",
              }}
              slidesPerView="auto"
              spaceBetween={30}
              className="lg:overflow-visible!"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

                640: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: "auto",
                },
              }}
            >
              {blogPosts.map((post, index) => (
                <SwiperSlide key={index} className="lg:max-w-sm">
                  <InfoCard
                    title={post.title}
                    description={post.description}
                    href={post.href}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="absolute inset-0 hidden w-full items-center justify-between md:flex">
              <Button
                variant="primary"
                size="none"
                className="blog-custom-swiper-button-prev z-1 grid h-16 w-16 -translate-x-1/2 place-items-center shadow-sm lg:translate-0"
              >
                <IoIosArrowBack className="text-3xl" />
              </Button>
              <Button
                variant="primary"
                size="none"
                className="blog-custom-swiper-button-next z-1 grid h-16 w-16 translate-x-1/2 place-items-center shadow-sm lg:translate-0"
              >
                <IoIosArrowForward className="text-3xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
