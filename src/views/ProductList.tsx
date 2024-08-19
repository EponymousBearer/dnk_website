"use client";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";
import Image from "next/image";
import women from "/public/first.jpg";
import men from "/public/second.jpg";
import sandle from "/public/third.jpg";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    title: "20% Off On Tank Tops",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    image: women,
    initial: { x: -90, opacity: 0.2 },
    animate: { x: 0, opacity: 1 },
  },
  {
    id: 2,
    title: "Latest Eyewear For You",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    image: men,
    initial: { y: 50, opacity: 0.2 }, // Initial position from the top
    animate: { y: 0, opacity: 1 },
  },
  {
    id: 3,
    title: "Let's Lorem Suit Up!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    image: sandle,
    initial: { x: 90, opacity: 0.2 }, // Initial position from the right
    animate: { x: 0, opacity: 1 },
  },
];

export default function ProductList() {
  const itemsToShow = 3; // Number of products to show
  const currentIndex = 0; // Starting index, you can change this as needed
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const displayedItems = products.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // You can adjust the scroll position at which the animations trigger
    const triggerPosition = 200;

    products.forEach((product) => {
      if (scrollY > triggerPosition) {
        controls.start(product.animate);
      }
    });
  }, [scrollY, controls]);

  return (
    <Wrapper>
      <section className="lg:py-28">
        <div className="flex justify-center items-center flex-col gap-y-6 lg:grid lg:grid-cols-[repeat(3,auto)] lg:gap-x-5 2xl:gap-x-96 ">
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={item.initial}
              animate={controls}
              transition={{ duration: 0.7 }}
            >
              <div className="h-[290px] w-[390px] lg:h-[480px] lg:w-[320px] xl:h-[470px] xl:w-[370px] relative">
                {/* Dull black overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                {/* Product Image */}
                <Image
                  src={item.image}
                  alt="Product"
                  height={500}
                  width={400}
                  className="w-full h-full object-cover object-top z-0"
                />
              </div>
              <div className="gap-y-4 m-5 xl:m-10 lg:m-6 font-semibold lg:space-y-1 text-lg absolute inset-0 flex flex-col items-start justify-end text-white z-20">
                <h2 className="mt-3 text-2xl">{item.title}</h2>
                <p className="text-sm font-[350]">{item.description}</p>
                <Button className="w-full lg:w-36 ">SHOP NOW</Button>
                {/* <Link href="#" className="mt-2 bg-[#212121] text-white px-4 py-2 rounded-md text-sm hover:bg-[#000] transition-colors duration-300">
                    Buy Now
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
