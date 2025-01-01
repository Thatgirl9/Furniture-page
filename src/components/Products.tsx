import React from "react";
import ProductImage1 from "@/assets/products/Images.png";
import ProductImage2 from "@/assets/products/Images (4).png";
import ProductImage3 from "@/assets/products/Images (1).png";
import ProductImage4 from "@/assets/products/Images (2).png";
import ProductImage5 from "@/assets/products/Image 5.png";
import ProductImage6 from "@/assets/products/image 6.png";
import ProductImage7 from "@/assets/products/Images (3).png";

import ProductImage8 from "@/assets/products/image 8.png";

import Image from "next/image";
import { ProductItem } from "@/types/constants";

const Products = () => {
  const productItems: ProductItem[] = [
    {
      image: ProductImage1,
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: true,
      discountPrice: "Rp 3.500.000",
      discountPercent: "-30%",
    },

    {
      image: ProductImage2,
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },

    {
      image: ProductImage3,
      title: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      discount: true,
      discountPrice: "Rp 14.000.000",
      discountPercent: "-50%",
    },

    {
      image: ProductImage4,
      title: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      newProduct: true,
      newText: "New",
    },
    {
      image: ProductImage5,
      title: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
    },
    {
      image: ProductImage6,
      title: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      newProduct: true,
      newText: "New",
    },
    {
      image: ProductImage7,
      title: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      discount: true,
      discountPrice: "Rp 14.000.000",
      discountPercent: "-50%",
    },
    {
      image: ProductImage8,
      title: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      newProduct: true,
      newText: "New",
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-5 mt-14">
      {productItems.map((items, index) => {
        return (
          <div className=" bg-background-1 relative" key={index}>
            {items.discount || items.newProduct ? (
              <div
                className={`${
                  items.discount ? `bg-background-2` : `bg-background-3`
                } text-white text-center py-2 w-12 h-12 rounded-full flex justify-center items-center absolute top-5 right-5`}
              >
                <p>{items.discount ? items.discountPercent : items.newText}</p>
              </div>
            ) : null}

            <Image
              src={items.image}
              alt="Image of a product"
              className="max-w-full w-[285px] h-[301px]"
            />
            <div className="px-4 pt-3 pb-6 gap-[6px] flex flex-col">
              <h2 className="text-primaryText-4 text-2xl font-semibold">
                {items.title}
              </h2>

              <p className="text-primaryText-5 text-base font-medium">
                {items.description}
              </p>
              <p className="flex justify-between">
                <span className="text-primaryText-4 text-xl font-semibold">
                  {items.price}
                </span>
                {items.discount && (
                  <span className="text-primaryText-11 text-base line-through">
                    {items.discountPrice}
                  </span>
                )}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
