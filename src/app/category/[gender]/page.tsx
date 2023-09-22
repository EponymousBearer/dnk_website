import React from "react";
import Link from "next/link";
import Header2 from "@/components/layout/Header2";
import Footer from "@/components/layout/Footer";
import BestSellerProductCard from "@/components/BestSellerProductCard";
import SearchBar from "@/components/SearchBar";
import ProductCart from "@/components/ProductCart";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { ProductProvider } from "@/components/ProductContext";
import Filter from "@/components/Filter";

export default async function CategoryPage({ params }: { params: any }) {
  const menus = [
    { title: "Accessories", path: "/your-path", quantity: "7" },
    { title: "Men", path: "/your-path", quantity: "14" },
    { title: "Women", path: "/your-path", quantity: "17" },
  ];

  return (
    <ProductProvider>
      <section className="flex bg-slate-100 flex-col">
        <Header2 />
        <div className="flex flex-col-reverse lg:flex-row mt-16 gap-x-3 gap-y-8">
          <div className="basis-1/4">
            {/* <MenProductSideBar /> */}

            <section className="px-2 lg:px-8">
              <SearchBar />
              <div className="py-16">
                <Filter products={products}/>
              </div>
              <div className="py-8">
                <h1 className="text-lg">Categories</h1>
                <ul className="justify-center font-light items-center space-y-4 mt-5">
                  {menus.map((item, idx) => (
                    <li key={idx} className="flex justify-between text-black">
                      <div className="hover:text-indigo-600">
                        <Link href={item.path}>{item.title}</Link>
                      </div>
                      <div>({item.quantity})</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-6">
                <h1 className="text-lg mb-4">Our Best Sellers</h1>
                <div>
                  <BestSellerProductCard />
                </div>
              </div>
            </section>
          </div>
          <div className="basis-3/4 bg-white">
            {/* <MenProducts params={params} /> */}

            <section className="p-5 lg:py-24 lg:px-28">
              <h2 className="text-sm lg:text-base capitalize text-gray-500">
                home / {params.gender}
              </h2>
              <h1 className="capitalize text-3xl lg:text-6xl py-6 text-black">
                {params.gender}
              </h1>
              <p className="mt-5 text-sm lg:text-base lg:mt-12 text-gray-900">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit
                sed ut.
              </p>
              <div className="py-4 text-sm lg:text-base flex items-center justify-between">
                <div>Showing 1 – 12 of 14 results</div>
                <Select>
                  <SelectTrigger className="w-[200px] lg:w-[220px]">
                    <SelectValue placeholder="Default sorting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default sorting</SelectItem>
                    <SelectItem value="popularity">
                      Sort by popularity
                    </SelectItem>
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
                {products.map((product: any) => (
                  <ProductCart key={product._id} item={product} />
                ))}
              </div>
              <div className="flex gap-x-2 py-4 lg:mt-4 mt-12 lg:py-10">
                <Button className="px-4 h-2 border border-black bg-black text-white hover:bg-black hover:text-white">
                  1
                </Button>
                <Button className="px-4 h-2 border border-black bg-white text-black hover:bg-black hover:text-white">
                  2
                </Button>
                <Button className="px-2 h-2 border border-black bg-white text-black hover:bg-black hover:text-white">
                  <div>
                    <ArrowRight size={20} strokeWidth={2} />
                  </div>
                </Button>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </section>
    </ProductProvider>
  );
}
