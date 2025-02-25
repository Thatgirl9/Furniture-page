"use client";
import React from "react";
import FurnitureImage1 from "@/assets/homePage/Rectangle 36.png";
import FurnitureImage2 from "@/assets/homePage/Rectangle 37.png";
import FurnitureImage3 from "@/assets/homePage/Rectangle 38.png";
import FurnitureImage4 from "@/assets/homePage/Rectangle 39.png";
import FurnitureImage5 from "@/assets/homePage/Rectangle 40.png";
import FurnitureImage6 from "@/assets/homePage/Rectangle 41.png";
import FurnitureImage7 from "@/assets/homePage/Rectangle 43.png";
import FurnitureImage8 from "@/assets/homePage/Rectangle 44.png";
import FurnitureImage9 from "@/assets/homePage/Rectangle 45.png";
import Image from "next/image";

const FurniroFurniture = () => {
  const images = [
    FurnitureImage1,
    FurnitureImage2,
    FurnitureImage3,
    FurnitureImage4,
    FurnitureImage5,
    FurnitureImage6,
    FurnitureImage7,
    FurnitureImage8,
    FurnitureImage9,
  ];
  

  return (
    <section className="mt-6 mb-16 w-full overflow-clip flex flex-col items-center justify-center">
      <h3 className="text-primaryText-7 font-semibold text-lg sm:text-xl text-center">
        Share your setup with
      </h3>
      <h1 className="text-primaryText-4 font-bold text-2xl sm:text-4xl text-center">
        #FurniroFurniture
      </h1>
      <div className="flex md:flex-row md:flex-nowrap items-center justify-center flex-wrap w-full gap-4 md:gap-40 lg:gap-4 mt-4">
        <div>
          <div className="flex items-end gap-4 mb-4 lg:gap-3 xl:gap-4">
            <Image
              src={images[0]}
              alt="Image 1"
              className="w-[100px] h-[380px]"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={images[2]}
              alt="Image 3"
              className="w-[390px] lg:w-[330px] xl:w-[390px] h-[300px] lg:h[290px] xl:h-[300px]"
              loading="lazy"
              placeholder="blur"
            />
          </div>
          <div className="flex gap-4 lg:gap-3 xl:gap-4">
            <Image
              src={images[1]}
              alt="Image 2"
              className="w-[150px] lg:w-[130px] xl:w-[150px] h-auto"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={images[3]}
              alt="Image 4"
              className="w-[342px] lg:w-[278px] xl:w-[342px] h-[200px]"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex md:hidden lg:flex items-center justify-center gap-4 lg:gap-3 xl:gap-4">
          <Image
            src={images[4]}
            alt="Image 5"
            className="w-[295px] lg:w-[190px] xl:w-[295px] h-[392px] lg:h-[330px] xl:h-[392px] "
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div>
          <div className="flex gap-4 items-end lg:gap-3 xl:gap-4">
            <Image
              src={images[6]}
              alt="Image 6"
              className="w-[230px] lg:w-[200px] xl:w-[230px] h-[300px]"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={images[8]}
              alt="Image 7"
              className="w-[230px] lg:w-[200px] h-[380px]"
              loading="lazy"
              placeholder="blur"
            />
          </div>
          <div className="flex gap-4 mt-4 lg:gap-3 xl:gap-4">
            <Image
              src={images[5]}
              alt="Image 8"
              className="w-[150px] h-[242px]"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={images[7]}
              alt="Image 6"
              className="w-[240px] h-[185px]"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurniroFurniture;
