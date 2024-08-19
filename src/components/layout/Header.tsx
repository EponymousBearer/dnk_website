"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/dnk_logo.png";
import logo_mobile from "/public/logo_mobile.png";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingBag, User2 } from "lucide-react";
// import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.section initial={{ y: "-100vh"}} animate={{ y: 0 }} transition={{ duration: 1 }} className=" top-0 left-0 w-full relative z-50">
      <div className="hidden lg:flex bg-[#0274be] bg-opacity-10 items-center justify-between py-8 lg:py-6 px-6">
        <div className="hidden lg:flex items-center justify-between flex-auto">
          <Link href={"../"}>
            <Image className="items-center scale-90" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-between w-full">
          <ul className="flex gap-x-7 text-white text-sm font-semibold items-center">
            <li>
              <Link href={"/category/all"}>EVERYTHING</Link>
            </li>
            <li>
              <Link href={"/category/women"}>WOMEN</Link>
            </li>
            <li>
              <Link href={"/category/men"}>MEN</Link>
            </li>
            <li>
              <Link href={"/category/men"}>ACCESSORIES</Link>
            </li>
          </ul>
          <ul className="flex gap-x-6 text-white text-sm items-center">
            <li>
              <Link href={"/"}>ABOUT</Link>
            </li>
            <li>
              <Link href={"/"}>CONTACT US</Link>
            </li>
            <li className="font-semibold">
              <Link href={"/"}>$900.00</Link>
            </li>
            <li>
              <ShoppingBag />
            </li>
            <li>
              <User2 />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Nav Bar */}

      <div className="lg:hidden flex flex-auto justify-between absolute w-full top-0 bg-white p-3">
        <Image
          className="items-center"
          src={logo_mobile}
          height={100}
          width={100}
          alt="logo"
        />
        <div className="flex gap-x-4 items-center">
          <ul className="flex gap-x-2">
            <li className="font-semibold">
              <Link href={"/"}>$900.00</Link>
            </li>
            <li>
              <ShoppingBag />
            </li>
          </ul>
          <Sheet>
            <SheetTrigger>
              <Menu className="h-7 w-7" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col items-start mt-20">
                <User2 />
                <ul className="flex text-start bg-white gap-y-3 mt-5 gap-x-8 flex-col items-start">
                  <li className="text-sm border-b border-gray-300 py-2">
                    <Link href={"/"}>EVERYTHING</Link>
                  </li>
                  <li className="text-sm border-b border-gray-300 py-2">
                    <Link href={"/"}>WOMEN</Link>
                  </li>
                  <li className="text-sm border-b border-gray-300 py-2">
                    <Link href={"/category/men"}>MEN</Link>
                  </li>
                  <li className="text-sm border-b border-gray-300 py-2">
                    <Link href={"/"}>ACCESSORIES</Link>
                  </li>
                  <li className="text-sm border-b border-gray-300 py-2">
                    <Link href={"/"}></Link>
                  </li>
                  <li className="text-sm border-b border-gray-300 py-2">
                    <Link href={"/"}>ABOUT</Link>
                  </li>
                  <li className="text-sm border-b border-gray-300 py-2">
                    <Link href={"/"}>CONTACT US</Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
