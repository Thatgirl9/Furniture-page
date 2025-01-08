"use client";
import React from "react";
import "./homePage.css";
import Range1 from "@/assets/homePage/Mask Group.png";
import Range2 from "@/assets/homePage/Image-living room.png";
import Range3 from "@/assets/homePage/Mask Group (1).png";
import Image from "next/image";
import Products from "@/components/Products";
import InspirationalRoom from "@/components/InspirationalRoom";
import FurniroFurniture from "@/components/FurniroFurniture";

const Home = () => {
  const rangeImages = [
    {
      image: Range1,
      title: "Dinning",
    },
    {
      image: Range2,
      title: "Living",
    },
    {
      image: Range3,
      title: "Bedroom",
    },
  ];
  return (
    <main className="flex flex-col items-center w-full ">
      <section className="homeSection flex lg:justify-end justify-center items-center md:px-10 my-14 md:mt-0 min-h-screen">
        <div className="bg-primaryBrown-1 rounded-md pl-7 pr-5 pt-10 pb-7 mt-12 w-[90%] md:w-auto md:block flex justify-center items-center flex-col text-center md:text-left">
          <h4 className="text-base font-semibold text-primaryText-2 mb-1">
            New Arrival
          </h4>
          <h1 className="md:w-[13ch] w-fit font-bold md:text-[3.25rem] text-[2rem] leading-normal md:leading-[65px] text-primaryBrown-0">
            Discover Our New Collection
          </h1>
          <p className="md:w-[48ch] w-fit text-lg font-medium text-primaryText-2 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <button className="mt-10 bg-primaryBrown-0 text-primaryBrown-1 py-5 px-10 font-bold text-base">
            BUY NOW
          </button>
        </div>
      </section>
      <section className="mt-5 flex flex-col items-center justify-center md:w-fit w-[90%]">
        <div className="text-center">
          <h2 className="text-primaryText-2 text-3xl font-bold">
            Browse The Range
          </h2>
          <p className="text-primaryText-3 text-lg sm:text-xl  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="xl:grid xl:grid-cols-3 md:flex-row flex-col md:flex-wrap flex items-center justify-center  gap-5 mt-14">
          {rangeImages.map((image, index) => (
              <div key={index}>
                <Image
                  src={image.image}
                  alt={image.title}
                  className="max-w-full w-[381px] md:h-[480px] h-[440px]"
                  loading="lazy" placeholder="blur"
                />
                <h3 className="text-center text-xl text-primaryText-2 font-semibold mt-5">
                  {image.title}
                </h3>
              </div>
          ))}
        </div>
      </section>

      <section className="mb-12 flex flex-col items-center mt-20">
        <h1 className="text-3xl font-bold text-primaryText-4">Our Products</h1>
        <Products />
        <button className="text-primaryBrown-0 border-primaryBrown-0 bg-transparent border mt-7 px-16 text-base font-semibold h-12">
          Show More
        </button>
      </section>

      <InspirationalRoom/>
      <FurniroFurniture/>
    </main>
  );
};

export default Home;
