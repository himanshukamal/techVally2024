import Image from "next/image";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
export default function Homecarousel() {
  return (
    <div className="border lg:h-[536px] w-[400px] md:w-[600px] lg:w-[1120px] mx-auto">
      <div className="relative">
        <Image
          src="/Paste image.svg"
          width="1120"
          height="536"
          alt="homecarouseImage"
        />
​
        <div className="w-[52px] h-[52px] p-[15px] bg-white rounded-full absolute top-[50%] left-2 text-center md:justify-between hidden lg:block">
          <BiArrowBack size="xl" />
        </div>
        <div className="w-[52px] h-[52px] p-[15px] bg-white rounded-full absolute top-[50%] right-2 text-center rotate-180 md:justify-between hidden lg:block">
          <BiArrowBack size="xl" />
        </div>
      </div>
      <div className="flex flex-wrap mt-[32px] lg:justify-between">
        <div style={{ fontFamily: "Poppins" }} className="">
          <p className="text-[#141718] text-[40px] md:text-[72px] font-medium leading-[50px] md:leading-[72px] tracking-tight">
            Simply unique<span className="text-[#6C7275]">/</span>
          </p>
          <p className="text-[#141718] text-[40px] md:text-[72px] font-medium leading-[50px] md:leading-[72px] tracking-tight">
            Simply better<span className="text-[#6C7275]">.</span>
          </p>
        </div>
        <div className="self-center">
          <p className="text-[#6C7275] text-[16px] font-normal max-w-[424px]">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}