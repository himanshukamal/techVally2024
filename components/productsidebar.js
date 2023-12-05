import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import "@fontsource/inter";
import { Inter } from "next/font/google";
import { useState } from "react";
import Productcard from "./productcard";
import Productsmain from "./productsmain";
export default function Productsidebar({
  showAllProducts,
  setShowAllProducts,
  showPriceRange1,
  setShowPriceRange1,
  showPriceRange2,
  setShowPriceRange2,
  showPriceRange3,
  setShowPriceRange3,
  showPriceRange4,
  setShowPriceRange4,
  showPriceRange5,
  setShowPriceRange5,
}) {

  return (
  
    <div>
      <div className="hidden lg:block">
        {/* ------------------SIDE BAR----------------------- */}

        <div>
          {/* -----------------CATEGORIES------------------------*/}
          <div className="flex items-center ">
            <AiOutlineControl size="24px" className=" rotate-90 mr-[8px]" />
            <p
              className=" text-[20px] font-semibold leading-[32px]"
              style={{ fontFamily: "inter" }}
            >
              Filter
            </p>
          </div>

          <div className="mt-[32px] mb-[16px] ">
            <p
              className=" text-[16px] font-semibold  leading-[26px]"
              style={{ fontFamily: "inter" }}
            >
              CATEGORIES
            </p>
          </div>
          {/* Buttons Div */}
          <div className="grid gap-[12px]">
            {/* All rooms button */}
            <div>
              <button
                className="text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                All Rooms
              </button>
            </div>
            {/* Living room button */}
            <div>
              <button
                className="text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                Living room
              </button>
            </div>
            {/* Bed room button */}
            <div>
              <button
                className="text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                Bed room
              </button>
            </div>
            {/* Kitchen */}
            <div>
              <button
                className="text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                Kitchen
              </button>
            </div>
            {/* bathroom button */}
            <div>
              <button
                className="text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                Bathroom
              </button>
            </div>
            {/* Dinning button */}
            <div>
              <button
                className="text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                Dinning
              </button>
            </div>
            {/* Outdoor button */}
            <div>
              <button
                className="text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                Outdoor
              </button>
            </div>
          </div>

          {/* ----------------PRICE--------------------- */}
          <div className=" mt-[32px]  flex-col ">
            <div className="mb-[16px]">
              <p
                className=" text-[16px] font-semibold  leading-[26px]"
                style={{ fontFamily: "inter" }}
              >
                PRICE
              </p>
            </div>
            <div className="mb-[8px]">
              <label
                className=" flex  justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                All Price
                <input
                type="checkbox" 
                className="w-[24px] h-[24px]" 
                checked={showAllProducts}
                onChange={() => setShowAllProducts(!showAllProducts)}
                />
              </label>
            </div>
            <div className="mb-[8px]">
              <label
                className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                $0.00 - 99.99
                <input type="checkbox"
                 className="w-[24px] h-[24px]" 
                 checked={showPriceRange1}
                 onChange={()=>setShowPriceRange1}
                 />
              </label>
            </div>
            <div className="mb-[8px]">
              <label
                className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                $100.00 - 199.99
                <input type="checkbox" className="w-[24px] h-[24px]" />
              </label>
            </div>
            <div className="mb-[8px]">
              <label
                className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                $200.00 - 299.99
                <input type="checkbox" className="w-[24px] h-[24px]" />
              </label>
            </div>
            <div className="mb-[8px]">
              <label
                className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                $300.00 - 399.99
                <input type="checkbox" className="w-[24px] h-[24px]" />
              </label>
            </div>
            <div className="mb-[8px]">
              <label
                className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                $400.00+
                <input type="checkbox" className="w-[24px] h-[24px]" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
