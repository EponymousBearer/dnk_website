import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCart from "./ProductCart";
import { StaticImageData } from "next/image";
import black_hoodie from "/public/black_hoodie.jpg";
import blue_hoodie from "/public/blue_hoodie.jpg";
import blue_tshirt from "/public/blue_tshirt.jpg";
import blue_tshirt_green from "/public/blue_tshirt_green.jpg";
import blue_tshirt_blue from "/public/blue_tshirt_darkblue.jpg";
import blue_tshirt_red from "/public/blue_tshirt_red.jpg";
import dark_blue_demin_jeans from "/public/dark_blue_demin_jeans.jpg";
import { Button } from "./ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const MenProducts = ({ params }: { params: any }) => {
  type ProductColor = {
    id: number;
    name: string;
    colorCode: string;
  };

  type Product = {
    _id: number;
    title: string;
    category: string;
    price: number;
    imageUrl: StaticImageData;
    colors?: ProductColor[];
  };

  const sampleData: any = [
    {
      _id: 1,
      title: "Black Hoodie",
      category: "Men",
      price: 150,
      imageUrl: black_hoodie,
    },
    {
      _id: 2,
      title: "Blue Hoodie",
      category: "Men",
      price: 150,
      imageUrl: blue_hoodie,
    },
    {
      _id: 3,
      title: "Blue Tshirt",
      category: "Men",
      price: 40,
      defaultColor: "aqua", // Set the default color to "red"
      imageUrl: blue_tshirt,
      colors: [
        {
          color: "aqua",
          // overlayColor: "rgba(255, 0, 0, 0.2)",
          imageSrc: blue_tshirt, // Image for the red color
          priceChange: 0, // Price change for the red color (+$10)
        },
        {
          color: "blue",
          // overlayColor: "rgba(0, 0, 255, 0.2)",
          imageSrc: blue_tshirt_blue, // Image for the blue color
          priceChange: 2, // Price change for the blue color (+$5)
        },
        {
          color: "green",
          // overlayColor: "rgba(255, 0, 0, 0.2)",
          imageSrc: blue_tshirt_green, // Image for the red color
          priceChange: 4, // Price change for the red color (+$10)
        },
        {
          color: "red",
          // overlayColor: "rgba(255, 0, 0, 0.2)",
          imageSrc: blue_tshirt_red, // Image for the red color
          priceChange: 6, // Price change for the red color (+$10)
        },
      ],
    },

    {
      _id: 4,
      title: "Dark Blue Denim Jeans",
      category: "Men",
      price: 150,
      imageUrl: dark_blue_demin_jeans,
    },
  ];
  return (
    <section className="p-5 lg:py-24 lg:px-28">
      <h2 className="text-sm lg:text-base capitalize text-gray-500">home / {params.gender}</h2>
      <h1 className="capitalize text-3xl lg:text-6xl py-6 text-black">{params.gender}</h1>
      <p className="mt-5 text-sm lg:text-base lg:mt-12 text-gray-900">
        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
        vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
        erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
        augue. Sed non neque elit sed ut.
      </p>
      <div className="py-4 text-sm lg:text-base flex items-center justify-between">
        <div>Showing 1 – 12 of 14 results</div>
        <Select>
          <SelectTrigger className="w-[200px] lg:w-[220px]">
            <SelectValue placeholder="Default sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default sorting</SelectItem>
            <SelectItem value="popularity">Sort by popularity</SelectItem>
            <SelectItem value="average_rating">
              Sort by average rating
            </SelectItem>
            <SelectItem value="latest">Sort by latest</SelectItem>
            <SelectItem value="low_to_high">
              Sort by price: low to high
            </SelectItem>
            <SelectItem value="high_to_low">
              Sort by price: high to low
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 py-2">
        {sampleData.map((product: any) => (
          <ProductCart key={product._id} item={product} />
        ))}
      </div>
      <div className="flex gap-x-2 py-4 lg:mt-4 mt-12 lg:py-10">
        <Button className="px-4 h-2 border border-black bg-black text-white hover:bg-black hover:text-white">1</Button>
        <Button className="px-4 h-2 border border-black bg-white text-black hover:bg-black hover:text-white">2</Button>
        <Button className="px-2 h-2 border border-black bg-white text-black hover:bg-black hover:text-white"><div><ArrowRight size={20} strokeWidth={2} /></div></Button>
      </div>
    </section>
  );
};

export default MenProducts;
