"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/assets/homePage/Logo.png";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import UserExclam from "@/assets/homePage/Vector.png";
import { LuSearch } from "react-icons/lu";
import { PiHeart } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      name: "Home",
      link: "/",
    },
    { name: "Shop", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <header
      className={`bg-background-0 max-w-[1280px] my-0 mx-auto md:px-14 px-3 py-5 lg:py-6 lg:pb-7 z-50 fixed top-0 left-0 right-0
`}
    >
      <nav
        className={`md:flex md:justify-between lg:justify-normal md:items-center 
        `}
      >
        <div className="flex items-end justify-between lg:w-[40%] md:mr-[5em] lg:mr-0">
          <div className="flex items-end">
            <Link href="/" className="mt-[0.4em] md:mt-0">
              <Image src={Logo} alt="Furniro Logo" width={185} height={41} />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-4xl text-primaryText-0 md:hidden bg-transparent"
          >
            {open ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>

        <div
          className={`h-0 overflow-hidden transition-all md:flex md:h-auto bg-primaryBrown-0 md:bg-transparent absolute top-[4.5em] right-0 md:relative md:top-0 md:right-0 ease-in-out z-50 flex flex-col md:flex-row md:gap-6 px-5 py-8 md:mx-0 md:p-0 md:justify-between lg:justify-around md:items-end border-t rounded-tl-3xl md:border-none md:rounded-none 
        ${
          open
            ? "h-[100vh] md:w-fit w-[60%] right-0"
            : "h-0 w-0 md:w-full right-[-10em] "
        }`}
        >
          <ul className="flex md:flex-row md:gap-0 font-normal gap-[1.4em] justify-end md:justify-between md:items-end items-end flex-col md:border-none list-none pb-[1em] md:pb-0 md:w-[60%] lg:w-[50%]">
            {routes.map((link) => (
              <li key={link.name} className="">
                <Link
                  href={link.link}
                  className={`text-base transition-all ease-in-out no-underline hover:underline font-medium
                   `}
                  onClick={() => setOpen(!open)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex md:items-end border-none justify-between md:w-[30%] lg:w-[25%] lg:flex">
            <button className="">
              <Image src={UserExclam} alt="User Icon" width={23} />
            </button>
            <button className="">
              <LuSearch className="text-[28px]" />
            </button>
            <button className="">
              <PiHeart className="text-[28px]" />
            </button>
            <button className="">
              <AiOutlineShoppingCart className="text-[24px]" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
