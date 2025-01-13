"use client";
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
import { IoMdShare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import axios from "axios";

const Products = () => {
  const [hover, setHover] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<number>(0);
  // const [products, setProducts] = React.useState<ProductItem[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/productLists');
      const data = await response.data;
      // setProducts(data); 
      console.log(data);
    };
    fetchProducts();
  }, []);
  const productItems: ProductItem[] = [
    {
      id: 1,
      image: ProductImage1,
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: true,
      discountPrice: "Rp 3.500.000",
      discountPercent: "-30%",
    },

    {
      id: 2,
      image: ProductImage2,
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },

    {
      id: 3,
      image: ProductImage3,
      title: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      discount: true,
      discountPrice: "Rp 14.000.000",
      discountPercent: "-50%",
    },

    {
      id: 4,
      image: ProductImage4,
      title: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      newProduct: true,
      newText: "New",
    },
    {
      id: 5,
      image: ProductImage5,
      title: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
    },
    {
      id: 6,
      image: ProductImage6,
      title: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      newProduct: true,
      newText: "New",
    },
    {
      id: 7,
      image: ProductImage7,
      title: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      discount: true,
      discountPrice: "Rp 14.000.000",
      discountPercent: "-50%",
    },
    {
      id: 8,
      image: ProductImage8,
      title: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      newProduct: true,
      newText: "New",
    },
  ];

  return (
    <section className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-14">
      {productItems.map((items, index) => (
          <div
            className=" bg-background-1 relative hover:cursor-pointer"
            key={index}
            onMouseOver={() => {
              setHover(true);
              setActive(items.id);
            }}
            onMouseLeave={() => setHover(false)}
          >
            {hover && active === items.id && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10">
                <div className="flex justify-center flex-col gap-4 items-center w-full h-full opacity-100">
                  <button className="bg-background-0 hover:bg-primaryBrown-1 hover:text-primaryText-1 text-primaryBrown-0 px-12 h-12 text-base font-semibold">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex items-center gap-1 text-background-0 font-semibold text-base hover:text-primaryBrown-1">
                      <IoMdShare />
                      <span>Share</span>
                    </button>
                    <button className="flex items-center gap-1 text-background-0 font-semibold text-base hover:text-primaryBrown-1">
                      <MdOutlineCompareArrows />
                    <span>Compare</span>
                    </button>
                    <button className="flex items-center gap-1 text-background-0 font-semibold text-base hover:text-primaryBrown-1">
                      <FaRegHeart />
                    <span>Like</span>
                    </button>
                  </div>
                 
                </div>
              </div>
            )}
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
              loading="lazy" placeholder="blur"
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
      ))}
    </section>
  );
};

export default Products;
