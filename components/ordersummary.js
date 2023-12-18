import Image from "next/image";
import React, { useState } from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight

export default function Ordersummary() {
  return (
    <div className="border-[1px] border-[#6C7275] rounded-md w-[312px] lg:w-[350px] flex flex-col justify-center items-center mx-auto lg:mx-[10px] h-[700px] my-[24px]">
      <div className="pr-[110px] pt-[40px]">
        <p
          className="text-[20px] font-medium leading-[28px]"
          style={{ fontFamily: "Poppins" }}
        >
          Order Summary
        </p>
      </div>
      <div>
        <div className="h-[144px] w-[280px] border-b-[1px] border-[#E8ECEF] flex flex-row py-[24px] justify-between">
          <Image src="/cart_item_1.svg" width="80" height="96" />
          <div className="flex flex-col w-[200px] flex-row h-[96px] justify-between mr-[0px] items-center">
            <div className="flex flex-col">
              <p
                className="text-[14px] font-semibold leading-[22px] pb-[8px]"
                style={{ fontFamily: "Inter" }}
              >
                Tray Table
              </p>
              <p
                className="text-[12px] font-normal leading-[20px] text-[#6C7275]"
                style={{ fontFamily: "Inter" }}
              >
                Color: Black
              </p>
            </div>

            <div className="flex flex-row justify-center items-center border border-black w-[80px] h-[26px] rounded-md ">
              <button type="button" className="w-[30px] text-[16px]">
                -
              </button>
              <p
                className="text-[12px] font-semibold leading-[20px]"
                style={{ fontFamily: "Inter" }}
              >
                2
              </p>
              <button type="button" className="w-[30px]">
                +
              </button>
            </div>
          </div>

          <div className="flex">
            <p
              className="text-[14px] font-semibold leading-[22px]"
              style={{ fontFamily: "Inter" }}
            >
              $38.19
            </p>
          </div>
        </div>
        <div className="h-[144px] w-[280px] border-b-[1px] border-[#E8ECEF] flex flex-row py-[24px] justify-between">
          <Image src="/cart_item_2.svg" width="80" height="96" />
          <div className="flex flex-col w-[200px] flex-row h-[96px] justify-between mr-[0px] items-center">
            <div className="flex flex-col">
              <p
                className="text-[14px] font-semibold leading-[22px] pb-[8px]"
                style={{ fontFamily: "Inter" }}
              >
                Tray Table
              </p>
              <p
                className="text-[12px] font-normal leading-[20px] text-[#6C7275]"
                style={{ fontFamily: "Inter" }}
              >
                Color: Red
              </p>
            </div>

            <div className="flex flex-row justify-center items-center border border-black w-[80px] h-[26px] rounded-md ">
              <button type="button" className="w-[30px] text-[16px]">
                -
              </button>
              <p
                className="text-[12px] font-semibold leading-[20px]"
                style={{ fontFamily: "Inter" }}
              >
                2
              </p>
              <button type="button" className="w-[30px]">
                +
              </button>
            </div>
          </div>

          <div className="flex">
            <p
              className="text-[14px] font-semibold leading-[22px]"
              style={{ fontFamily: "Inter" }}
            >
              $38.19
            </p>
          </div>
        </div>
        <div className="h-[144px] w-[280px] border-b-[1px] border-[#E8ECEF] flex flex-row py-[24px] justify-between">
          <Image src="/cart_item_1.svg" width="80" height="96" />
          <div className="flex flex-col w-[200px] flex-row h-[96px] justify-between mr-[0px] items-center">
            <div className="flex flex-col">
              <p
                className="text-[14px] font-semibold leading-[22px] pb-[8px]"
                style={{ fontFamily: "Inter" }}
              >
                Table Lamp
              </p>
              <p
                className="text-[12px] font-normal leading-[20px] text-[#6C7275]"
                style={{ fontFamily: "Inter" }}
              >
                Color: Black
              </p>
            </div>

            <div className="flex flex-row justify-center items-center border border-black w-[80px] h-[26px] rounded-md ">
              <button type="button" className="w-[30px] text-[16px]">
                -
              </button>
              <p
                className="text-[12px] font-semibold leading-[20px]"
                style={{ fontFamily: "Inter" }}
              >
                2
              </p>
              <button type="button" className="w-[30px]">
                +
              </button>
            </div>
          </div>

          <div className="flex">
            <p
              className="text-[14px] font-semibold leading-[22px]"
              style={{ fontFamily: "Inter" }}
            >
              $38.19
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className=" h-[52px] flex flex-row ">
          <div className="w-[220px] border-[2px] rounded-md border-[#CBCBCB] flex flex-row">
            <input
              type="text"
              placeholder="Coupon Code"
              className="pl-[10px] text-[14px] font-normal leading-[22px]"
              style={{ fontFamily: "Inter" }}
            />
          </div>

          <div className=" w-[80px] bg-[black] text-white rounded-md border-[#CBCBCB] flex justify-center ml-[10px]">
            <button
              type="button"
              className="text-[16px] font-medium leading-[28px]"
              style={{ fontFamily: "Inter" }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="py-[12px] flex flex-row w-[300px] justify-between">
          <p
            className="text-[16px] font-normal leading-[28px]"
            style={{ fontFamily: "Inter" }}
          >
            Shipping
          </p>
          <p
            className="text-[16px] font-semibold leading-[28px]"
            style={{ fontFamily: "Inter" }}
          >
            Free
          </p>
        </div>
        <div className="py-[12px] flex flex-row w-[300px] justify-between">
          <p
            className="text-[16px] font-normal leading-[28px]"
            style={{ fontFamily: "Inter" }}
          >
            Subtotal
          </p>
          <p
            className="text-[16px] font-semibold leading-[28px]"
            style={{ fontFamily: "Inter" }}
          >
            $99.00
          </p>
        </div>
        <div className="py-[12px] flex flex-row w-[300px] justify-between">
          <p
            className="text-[20px] text-[#141718] font-normal leading-[28px]"
            style={{ fontFamily: "Poppins" }}
          >
            Total
          </p>
          <p
            className="text-[20px] font-medium leading-[28px]"
            style={{ fontFamily: "Poppins" }}
          >
            $234.00
          </p>
        </div>
      </div>
    </div>
  );
}
