import React from 'react'
import FurnitureImage1 from "@/assets/homePage/Rectangle 36.png";
import FurnitureImage2 from "@/assets/homePage/Rectangle 37.png";
import FurnitureImage3 from "@/assets/homePage/Rectangle 38.png";
import FurnitureImage4 from "@/assets/homePage/Rectangle 39.png";
import FurnitureImage5 from "@/assets/homePage/Rectangle 40.png";
import FurnitureImage6 from "@/assets/homePage/Rectangle 41.png";
import FurnitureImage7 from "@/assets/homePage/Rectangle 43.png";
import FurnitureImage8 from "@/assets/homePage/Rectangle 44.png";
import FurnitureImage9 from "@/assets/homePage/Rectangle 45.png";
import Image from 'next/image';

const FurniroFurniture = () => {
  const images = [FurnitureImage1, FurnitureImage2, FurnitureImage3, FurnitureImage4, FurnitureImage5, FurnitureImage6, FurnitureImage7, FurnitureImage8, FurnitureImage9]
  return (
    <section className="mt-6 mb-20">
      <h3 className="text-primaryText-7 font-semibold text-xl text-center">Share your setup with</h3>
      <h1 className='text-primaryText-4 font-bold text-4xl text-center'>#FurniroFurniture</h1>
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column */}
        
        <div className="col-span-4 flex flex-col gap-4">
          <Image src={images[0]} alt="Image 1" className="max-w-full h-[400px]" />
          <Image src={images[1]} alt="Image 2" className="max-w-full h-[323px]" />
        </div>
        {/* Center Column */}
        <div className="col-span-4 grid gap-4">
          <Image src={images[2]} alt="Image 3" className="w-full h-auto" />
          <Image src={images[3]} alt="Image 4" className="w-full h-auto" />
          <Image src={images[4]} alt="Image 5" className="w-full h-auto" />
        </div>
        {/* Right Column */}
        <div className="col-span-4 flex flex-col gap-4">
          <Image src={images[5]} alt="Image 6" className="w-full h-auto" />
          <Image src={images[6]} alt="Image 7" className="w-full h-auto" />
          <Image src={images[7]} alt="Image 8" className="w-full h-auto" />
        </div>

        <div className="col-span-4 flex flex-col gap-4">
          <Image src={images[8]} alt="Image 6" className="w-full h-auto" />
          <Image src={images[9]} alt="Image 7" className="w-full h-auto" />
          {/* <Image src={images[7]} alt="Image 8" className="w-full h-auto" /> */}
        </div>
      </div>
    </section>
  )
}

export default FurniroFurniture