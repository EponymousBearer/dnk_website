import logo from "/public/dnk_logo_black.png";
import React from "react";
import Image from "next/image";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <section className="mt-20 bg-white text-center lg:text-start">
      <h3 className="px-8 lg:px-20 py-8 font-bold text-lg lg:text-2xl border-t border-gray-400 border-b">
        SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
      </h3>
      <div className="flex py-10 my-10 gap-y-10 gap-x-24 lg:flex-row flex-col mx-4 px-4 lg:mx-10 lg:px-10 xl:mx-10 xl:px-10">
        {/* Left Div */}
        <div className="basis-2/5 space-y-10 lg:space-y-8 self-center lg:self-start">
          <Image className="ml-10 lg:ml-0" src={logo} alt="logo" />
          <p className="font-bold text-paragraph w-52 lg:w-72 xl:w-[400px] 2xl:w-[900px] lg:text-xl">
            The best look anytime, anywhere.
          </p>
        </div>
        {/* Right Div */}
        <div className="basis-3/5 grid grid-cols-1 lg:grid-cols-3 gap-y-10 text-grey">
          <div>
            <h3 className="lg:text-lg tracking-wide">For Her</h3>
            <button>
              <ul className="space-y-2 mt-4 font-extralight lg:text-start">
                <li>Women Jeans</li>
                <li>Tops and Shirts</li>
                <li>Women Jackets</li>
                <li>Heels and Flats</li>
                <li>Women Accessories</li>
              </ul>
            </button>
          </div>
          <div>
            <h3 className="lg:text-lg tracking-wide">For Him</h3>
            <button>
              <ul className="space-y-2 mt-4 font-extralight lg:text-start">
                <li>Men Jeans</li>
                <li>Men Shirts</li>
                <li>Men Shoes</li>
                <li>Men Accessories</li>
                <li>Men Jackets</li>
              </ul>
            </button>
          </div>
          <div>
            <h3 className="lg:text-lg tracking-wide">Subscribe</h3>
            <button>
              <ul className="space-y-6 mt-4 font-extralight text-center lg:text-start">
                <Input placeholder="Your Email Address..." className="w-96 lg:w-auto" />
                <Button className="bg-blue-600 text-white">SUBSCRIBE</Button>
              </ul>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-gray-400 border-t-[0.75px] w-full"></div>

      {/* Bottom */}
      <div className=" flex justify-between lg:flex-row flex-col gap-y-6 gap-x-72 2xl:gap-x-[600px] text-[#666] my-4 lg:my-6 mx-4 px-4 md:mx-10 md:px-10 xl:mx-10 xl:px-10">
        <div className="text-base lg:text-2xl xl:text-base">
          Copyright © 2023 Brandstore. Powered by Brandstore.
        </div>
        <div className="flex gap-x-4 self-center lg:self-start">
          <Facebook />
          <Twitter />
          <Linkedin />
        </div>
      </div>
    </section>
  );
};

export default Footer;
