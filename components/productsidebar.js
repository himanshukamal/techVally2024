import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import "@fontsource/inter";
import { Inter } from "next/font/google";
export default function Productsidebar() {
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
                <input type="checkbox" className="w-[24px] h-[24px]" />
              </label>
            </div>
            <div className="mb-[8px]">
              <label
                className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                style={{ fontFamily: "inter" }}
              >
                $0.00 - 99.99
                <input type="checkbox" className="w-[24px] h-[24px]" />
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
