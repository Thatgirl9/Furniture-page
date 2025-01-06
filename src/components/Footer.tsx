"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  const footerHelp = [
    {
      name: "Payment Options",
      link: "/",
    },
    {
      name: "Returns",
      link: "/",
    },
    {
      name: "Privacy Policies",
      link: "/",
    },
  ];
  return (
    <footer className="mb-10 border-t-[1.5px] border-primaryText-10 flex flex-col items-center justify-center">
      <div className="border-b border-primaryText-10  flex justify-between w-[85%] mx-auto py-10">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-2xl">Furniro.</h1>
          <p className="text-primaryText-9 text-base">
            400 University Drive Suite 200 Coral<br></br>
            Gables,<br></br>
            FL 33134 USA
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <h4 className="text-primaryText-9 font-medium text-base">Links</h4>
          <ul className="flex flex-col gap-9">
            {footerLinks.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="text-primaryText-0 text-base font-medium hover:text-primaryBrown-0"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-10">
          <h4 className="text-primaryText-9 font-medium text-base">Help</h4>
          <ul className="flex flex-col gap-9">
            {footerHelp.map((help, index) => (
              <Link
                href={help.link}
                key={index}
                className="text-primaryText-0 text-base font-medium hover:text-primaryBrown-0"
              >
                {help.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <h4 className="text-primaryText-9 font-medium text-base">
            Newsletter
          </h4>
          <div className="w-[286px] flex items-end gap-[10px]">
            <input className="outline-0 border-b-[1.5px] border-primaryText-0 placeholder:text-sm" placeholder="Enter Your Email Address"/>
            <button className="border-b-[1.5px] border-primaryText-0 uppercase text-medium">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="self-start w-[85%] mx-auto mt-5">
        <p>2025 Furniro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
