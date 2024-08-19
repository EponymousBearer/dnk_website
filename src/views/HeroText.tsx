'use client'
import React from "react";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {" "}
      <h1 className="transition ease-in-out delay-150 scroll-m-20 text-3xl text-center lg:text-start lg:leading-tight font-bold lg:text-6xl max-w-xl text-white 2xl:max-w-7xl opacity-90 mt-11">
        Raining Offers For Hot Summer!
      </h1>
      <h2 className="transition ease-in-out delay-150 text-[19px] text-center lg:text-start lg:text-2xl lg:font-bold max-w-sm 2xl:max-w-4xl text-white mt-9">
        25% Off On All Products
      </h2>
    </motion.div>
  );
};

export default HeroText;
