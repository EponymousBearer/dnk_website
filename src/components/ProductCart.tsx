"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

type ColorOption = {
  color: string;
  overlayColor: string;
  imageSrc: string; // Add image source for each color
  priceChange: number; // Add price change for each color
};

type Product = {
  _id: number;
  title: string;
  category: string;
  price: number;
  imageUrl: string;
  colors?: ColorOption[]; // Make colors optional
};

const ProductCart: FC<{ item: Product }> = ({ item }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
    null
  );
  const selectedColorOption =
    item.colors && selectedColorIndex !== null
      ? item.colors[selectedColorIndex]
      : null;

  const handleColorClick = (index: number) => {
    setSelectedColorIndex(index);
  };

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: "10vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
      viewport={{ once: true }}
    >
      <div className="h-[190px] w-[170px] lg:h-[280px] lg:w-[260px] xl:h-[270px] xl:w-[250px]">
        <Image
          src={
            selectedColorOption ? selectedColorOption.imageSrc : item.imageUrl
          }
          alt="Product"
          height={500}
          width={400}
          className="w-full h-full object-cover object-top"
        />
        {selectedColorOption && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: selectedColorOption.overlayColor,
              opacity: 0.2,
              clipPath: "inset(0)",
            }}
          ></div>
        )}
      </div>
      <div className="lg:space-y-1">
        <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
        <h5 className="text-[#888] text-sm">{item.category}</h5>
        <h1 className="font-medium">
          $
          {selectedColorOption
            ? (item.price + selectedColorOption.priceChange).toFixed(2)
            : item.price.toFixed(2)}
        </h1>
        {item.colors && ( // Check if colors are defined for the product
          <div className="flex space-x-2">
            {item.colors.map((colorOption, index) => (
              <button
                key={index}
                onClick={() => handleColorClick(index)}
                className={`w-6 h-6 rounded-full fill-current focus:outline-none ${
                  selectedColorIndex === index
                    ? "ring-1 ring-offset-1 ring-gray-500"
                    : ""
                }`}
                style={{
                  backgroundColor: colorOption.color,
                  position: "relative",
                  zIndex: 1,
                }}
              ></button>
            ))}
          </div>
        )}
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={16} strokeWidth={1} className="w-5 h-5" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCart;
