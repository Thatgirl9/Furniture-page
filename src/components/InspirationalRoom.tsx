"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { GoDash, GoArrowRight } from "react-icons/go";
import InspirationalImage1 from "@/assets/homePage/Rectangle 24.png";
import InspirationalImage2 from "@/assets/homePage/Rectangle 25.png";
import InspirationalImage3 from "@/assets/homePage/Rectangle 26.png";
import InspirationalImage4 from "@/assets/homePage/Rectangle 45.png";

const InspirationalRoom = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const inspirationalImages = [
    {
      id: 0,
      image: InspirationalImage1,
    },
    {
      id: 1,
      image: InspirationalImage2,
    },
    {
      id: 2,
      image: InspirationalImage3,
    },
    {
      id: 3,
      image: InspirationalImage4,
    },
  ];
  return (
    <section className="bg-primaryBrown-2 w-full mb-10 flex xl:flex-row flex-col gap-8 xl:gap-0 py-11 xl:pl-16 xl:justify-between items-center justify-center">
      <div className="xl:block flex items-center justify-center flex-col xl:w-[36%] w-fit gap-4">
        <h1 className="md:w-[20ch] xl:text-left text-center font-bold text-4xl text-primaryText-4">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-base font-medium md:w-[35ch] text-primaryText-7 xl:text-left text-center">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <button className="h-12 px-10 w-fit bg-primaryBrown-0 border border-primaryBrown-0 text-background-0 font-medium">
          Explore More
        </button>
      </div>
      <Swiper
        className="flex flex-row mySwiper relative border border-red-500 w-[90%] overflow-clip"
        spaceBetween={23}
        slidesPerView={2.2}
        navigation={true}
        pagination={true}
        loop={true}
        onSlideChange={(swiper) => {
          setActiveImage(swiper.realIndex);
        }}
        modules={[Navigation, Pagination]}
      >
        {inspirationalImages.map((images, index) => (
            <SwiperSlide key={index} className="">
              {activeImage === images.id && (
                <div className="absolute bottom-6 left-4 flex justify-end items-end">
                  <div className=" w-[217px] h-[130px] bg-background-0 bg-opacity-70 z-10">
                    <div className="flex justify-center gap-1 items-center flex-col w-full h-full">
                      <p className="text-primaryText-7 text-base font-medium flex flex-row items-center justify-center">
                        <span>01</span>
                        <span>
                          <GoDash />
                        </span>

                        <span>Bed Room</span>
                      </p>
                      <h2 className="font-semibold text-[1.8rem] text-primaryText-4">
                        Inner Peace
                      </h2>
                    </div>
                  </div>
                  <button className="bg-primaryBrown-0 w-12 h-12 flex items-center justify-center">
                    <GoArrowRight className="text-background-0 text-2xl " />
                  </button>
                </div>
              )}
              <Image
                src={images.image}
                alt="Inspirational Images for Rooms"
                className={`${
                  activeImage === images.id
                    ? "h-[582px] w-[404px]"
                    : "h-[485px] w-[372px]"
                } max-w-full`}
                 loading="lazy"
                 placeholder="blur"
              />
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InspirationalRoom;
