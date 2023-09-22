import black_hoodie from "/public/black_hoodie.jpg";
import blue_hoodie from "/public/blue_hoodie.jpg";
import blue_tshirt from "/public/blue_tshirt.jpg";
import blue_tshirt_green from "/public/blue_tshirt_green.jpg";
import blue_tshirt_blue from "/public/blue_tshirt_darkblue.jpg";
import blue_tshirt_red from "/public/blue_tshirt_red.jpg";
import dark_blue_demin_jeans from "/public/dark_blue_demin_jeans.jpg";
import { StaticImageData } from "next/image";

export type ProductColor = {
    color: string,
    imageSrc: StaticImageData,
    priceChange: number,
  };
  
  export type Product = {
    _id: number;
    title: string;
    category: string;
    price: number;
    defaultColor?: string;
    imageUrl: StaticImageData;
    colors?: ProductColor[];
  };
  
  export const products: Product[] = [
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
      defaultColor: "aqua",
      imageUrl: blue_tshirt,
      colors: [
        {
          color: "aqua",
          imageSrc: blue_tshirt,
          priceChange: 0,
        },
        {
          color: "blue",
          imageSrc: blue_tshirt_blue,
          priceChange: 2,
        },
        {
          color: "green",
          imageSrc: blue_tshirt_green,
          priceChange: 4,
        },
        {
          color: "red",
          imageSrc: blue_tshirt_red,
          priceChange: 6,
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
  