import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter";
import { BiArrowBack } from "react-icons/bi";

export default function Homepagesection2() {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="relative">
          <Image
            src="/livingroom.svg"
            alt="livingroom image"
            width="548"
            height="644"
          />
          <div className="absolute top-5 left-2 pl-[48px]">
            <p
              className="text-[34px] font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              Living Room
            </p>
            <div className="border-b border-black max-w-[110px]">
              <Link
                href="#"
                style={{ fontFamily: "Inter", display: "flex" }}
                className=""
              >
                Shop Now
                <div style={{ width: "30px" }}>
                  <BiArrowBack size="sm" className="rotate-180" />
                </div>
              </Link>
            </div>
          </div>
        </div>
​
        <div className="ml-2">
          <div className="relative">
            <Image
              src="/bedroom.svg"
              alt="bedroom image"
              width="548"
              height="319"
            />
            <div className=" absolute bottom-5 left-1 pl-[22px]">
              <p
                className="text-[34px] font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Bedroom
              </p>
              <div className="border-b border-black max-w-[110px]">
                <Link
                  href="#"
                  style={{ fontFamily: "Inter", display: "flex" }}
                  className=""
                >
                  Shop Now
                  <div style={{ width: "30px" }}>
                    <BiArrowBack size="sm" className="rotate-180" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/kitchen.svg"
              alt="kitchen image"
              width="548"
              height="319"
              className="mt-6"
            />
            <div className=" absolute bottom-5 left-1 pl-[22px]">
              <p
                className="text-[34px] font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                kitchen
              </p>
              <div className="border-b border-black max-w-[110px]">
                <Link
                  href="#"
                  style={{ fontFamily: "Inter", display: "flex" }}
                  className=""
                >
                  Shop Now
                  <div style={{ width: "30px" }}>
                    <BiArrowBack size="sm" className="rotate-180" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}