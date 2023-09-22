import React from "react";
import Link from "next/link";
import MenProductSideBar from "@/components/MenProductSideBar";
import MenProducts from "@/components/MenProducts";
import Header2 from "@/components/layout/Header2";
import Footer from "@/components/layout/Footer";

export default async function CategoryPage({ params }: { params: any }) {
  // const data = await FetchData();

  // const filteredData = data.filter(
  //   (item: IProduct) => item.gender === params.gender
  // );

  // if (filteredData.length === 0) {
  //   return <div className="text-center mt-20 font-bold">No Products found</div>;
  // }
  return (
    <section className="flex bg-slate-100 flex-col">
      <Header2 />
      <div className="flex flex-col-reverse lg:flex-row mt-16 gap-x-3 gap-y-8">
        <div className="basis-1/4">
          <MenProductSideBar />
        </div>
        <div className="basis-3/4 bg-white">
          <MenProducts params={params} />
        </div>
      </div>
      <Footer/>
    </section>
  );
}
