"use client"
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import logo1 from "/public/client-logo-1.png";
import logo2 from "/public/client-logo-2.png";
import logo3 from "/public/client-logo-3.png";
import logo4 from "/public/client-logo-4.png";
import logo5 from "/public/client-logo-5.png";
import Image, { StaticImageData } from "next/image";
import Wrapper from "./shared/Wrapper";

const logos: StaticImageData[] = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
];

const LogoRotator = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleLogos, setVisibleLogos] = useState<StaticImageData[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Determine whether it's a mobile screen based on window width
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setVisibleLogos([logos[currentIndex]]); // Display one logo on mobile
    } else {
      // Display five logos on larger screens
      const endIndex = (currentIndex + 4) % logos.length;
      setVisibleLogos(
        currentIndex <= endIndex
          ? logos.slice(currentIndex, endIndex + 1)
          : [...logos.slice(currentIndex), ...logos.slice(0, endIndex + 1)]
      );
    }
  }, [currentIndex]);

  return (
    <Wrapper>
      <div className="relative justify-center items-center px-6 mx-10 my-20 lg:mx-0 lg:my-0">
        <div className="w-full flex justify-center">
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? logos.length - 1 : prevIndex - 1
              )
            }
            className="absolute inset-y-0 left-0 flex items-center justify-center w-10 h-full bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-75 text-slate-300 focus:outline-none"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex flex-col items-center lg:flex-row overflow-hidden">
            {visibleLogos.map((logo, index) => (
              <Transition
                key={index}
                show={true}
                enter="transition-transform transition-opacity ease-out duration-300"
                enterFrom="translate-x-[-100%] opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transition-transform transition-opacity ease-in duration-300"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-[100%] opacity-0"
              >
                <div className={index === 0 ? "mb-4 lg:mb-0 lg:mr-6" : "ml-20"}>
                  <Image
                    src={logo}
                    alt={`Logo ${currentIndex + 1}`}
                    className="lg:w-full"
                  />
                </div>
              </Transition>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === logos.length - 1 ? 0 : prevIndex + 1
              )
            }
            className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-75 text-slate-300 focus:outline-none"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default LogoRotator;
