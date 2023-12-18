import Image from "next/image";
import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import Link from "next/link";
// import "@fontsource/inter/400-italic.css"; // Specify weight and style

export default function Footer() {
  return (
    <div>
      <div className="w-screen h-[569px] lg:h-[294px] mx-auto bg-[#141718]">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:pt-[80px] lg:px-[80px] text-[#E8ECEF]">
          <div className="flex flex-col lg:flex-row ">
            <div
              className="text-[24px] font-medium leading-[24px] text-center py-[16px] lg:py-[0px] lg:pr-[32px] lg:border-r-[1px]"
              style={{ fontFamily: "Poppins" }}
            >
              3legant
            </div>
            <div
              className="text-[14px] font-normal leading-[24px] py-[16px] lg:py-[0px] lg:pl-[32px] lg:w-[350px] text-center lg:text-left"
              style={{ fontFamily: "Inter" }}
            >
              Gifts & Decoration Store
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row  text-[14px] font-normal leading-[22px] justify-center lg:justify-between"
            style={{ fontFamily: "Inter" }}
          >
            <Link
              href="#"
              className="lg:mr-[40px] py-[16px] lg:py-[0px] text-center "
            >
              Home
            </Link>
            <Link
              href="#"
              className="lg:mr-[40px] py-[16px] lg:py-[0px] text-center"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="lg:mr-[40px] py-[16px] lg:py-[0px] text-center"
            >
              Product
            </Link>
            <Link
              href="#"
              className="lg:mr-[40px] py-[16px] lg:py-[0px] text-center"
            >
              Blog
            </Link>
            <Link href="#" className="py-[16px] lg:py-[0px] text-center">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row  justify-center lg:justify-between lg:mt-[49px] lg:mx-[80px] py-[16px] text-[#E8ECEF] border-t-[1px] border-[#6C7275]">
          <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between ">
            <div
              className="text-[12px] font-normal leading-[20px] text-center p-[16px] lg:p-[0px]"
              style={{ fontFamily: "Poppins" }}
            >
              Copyright © 2023 3legant. All rights reserved
            </div>
            <div className="flex flex-row justify-center p-[16px] lg:p-[0px] ">
              <div
                className="text-[12px] font-bold leading-[20px] px-[28px] text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Privacy Policy
              </div>
              <div
                className="text-[12px] font-bold leading-[20px] text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Terms Of Use
              </div>
            </div>
          </div>
          <div className="flex justify-center p-[16px] lg:p-[0px]">
            <Image
              src="/instagram.svg"
              width="24"
              height="24"
              alt="Instagram link"
              className="mr-[24px]"
            />
            <Image
              src="/facebook.svg"
              width="24"
              height="24"
              alt="Instagram link"
              className="mr-[24px]"
            />
            <Image
              src="/youtube.svg"
              width="24"
              height="24"
              alt="Instagram link"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
