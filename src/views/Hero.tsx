import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg')",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <Wrapper>
        {/* Left Div */}
        <div className="absolute flex flex-col mt-20">
          <div>
            <h1 className="scroll-m-20 text-3xl text-center lg:text-start lg:leading-tight font-bold lg:text-6xl max-w-xl text-white 2xl:max-w-7xl opacity-90 mt-11">
              Raining Offers For Hot Summer!
            </h1>
          </div>
          <div>
            <h2 className="text-[19px] text-center lg:text-start lg:text-2xl lg:font-bold max-w-sm 2xl:max-w-4xl text-white mt-9">
              25% Off On All Products
            </h2>
          </div>
          <div>
            <Link href={"/"}>
              <div className="flex lg:flex-row flex-col gap-y-4 lg:gap-x-4 mt-10 font-medium max-w-[360px] lg:max-w-none">
                <Button>SHOP NOW</Button>
                <Button variant="outline">FIND MORE</Button>
              </div>
              {/* <Button className=" mt-9 bg-[#212121] 2xl:text-lg text-white font-bold py-7 px-20 md:py-9 md:px-[89px] 2xl:py-7 2xl:px-[100px] md:gap-x-6 gap-x-3 shadow-md lg:max-w-[160px] 2xl:max-w-[700px]">
                <div>
                  <ShoppingCart
                    className="2xl:h-7 2xl:w-7 h-6 w-6"
                    color="#ffffff"
                  />
                </div>
                <div>Start Shopping</div>
              </Button> */}
            </Link>
          </div>
          {/* <div className="grid grid-cols-2 grid-rows-2 mt-10 2xl:mt-56">
              <div className="lg:flex lg:gap-x-5 2xl:gap-x-36">
                <Image src={bazaar} alt="bazaar" className="mr-5 mb-5" />
                <Image src={versace} alt="versace" className="mr-5 mb-5" />
              </div>
              <div className="lg:flex lg:gap-x-5 2xl:gap-x-36">
                <Image src={bustle} alt="bustle" className="mb-5 mr-5" />
                <Image src={instyle} alt="instyle" className="mb-5" />
              </div>
            </div> */}
        </div>
        {/* Right Div */}
        {/* <div className="flex-1 align-middle justify-center relative hidden lg:block">
            <div className="lg:h-[600px] lg:w-[600px] rounded-full absolute bg-pink z-[-1]"></div>
            <div className="flex items-center justify-center h-[600px] w-[600px] absolute z-10">
              <Image
                alt="Main Image"
                src={HeroImage}
                className="scale-110"
              ></Image>
            </div>
          </div> */}
      </Wrapper>
    </div>
  );
};

export default Hero;
