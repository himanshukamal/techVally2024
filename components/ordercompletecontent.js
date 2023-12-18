import React from "react";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import Image from "next/image";

export default function Ordercompletecontent() {
  return (
    <div>
      <div className="w-[312px] lg:w-[740px] flex flex-col items-left lg:items-center mx-auto rounded-lg px-[20px] bg-[#FFFFFF] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] my-[20px]">
        <div className="mt-[40px]">
          <p
            className="text-[16px] font-semibold text-[#6C7275] leading-[26px] "
            style={{ fontFamily: "Inter" }}
          >
            Thank you🎉
          </p>
        </div>
        <div className="mt-[40px]">
          <p
            className="text-[34px] font-medium text-[#23262F] leading-[38px] "
            style={{ fontFamily: "Poppins" }}
          >
            Your order has been recieved
          </p>
        </div>
        <div className="flex flex-row mt-[40px] w-[280px] justify-left lg:justify-center lg:w-[700px]">
          <Image
            src="\cart_item_1.svg"
            width="80"
            height="96"
            className="px-[10px] "
          />
          <Image
            src="\cart_item_2.svg"
            width="80"
            height="96"
            className="px-[10px]"
          />
          <Image
            src="\cart_item_3.svg"
            width="80"
            height="96"
            className="px-[10px]"
          />
        </div>

        <div className="mt-[40px] lg:w-[300px]">
          <div className="flex flex-col lg:flex-row lg:justify-between border-b-[1px] border-[#E8ECEF] py-[16px]">
            <p
              className="text-[14px] font-semibold leading-[22px] text-[#6C7275]"
              style={{ fontFamily: "Inter" }}
            >
              Order code
            </p>
            <p
              className="text-[14px] font-semibold leading-[22px]"
              style={{ fontFamily: "Inter" }}
            >
              #01238489848
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg: justify-between border-b-[1px] border-[#E8ECEF] py-[16px]">
            <p
              className="text-[14px] font-semibold leading-[22px] text-[#6C7275] "
              style={{ fontFamily: "Inter" }}
            >
              Date:
            </p>
            <p
              className="text-[14px] font-semibold leading-[22px]"
              style={{ fontFamily: "Inter" }}
            >
              October 20,2023
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg: justify-between border-b-[1px] border-[#E8ECEF] py-[16px]">
            <p
              className="text-[14px] font-semibold leading-[22px] text-[#6C7275] "
              style={{ fontFamily: "Inter" }}
            >
              Total
            </p>
            <p
              className="text-[14px] font-semibold leading-[22px]"
              style={{ fontFamily: "Inter" }}
            >
              $1346.00
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg: justify-between border-b-[1px] border-[#E8ECEF] py-[16px]">
            <p
              className="text-[14px] font-semibold leading-[22px] text-[#6C7275] "
              style={{ fontFamily: "Inter" }}
            >
              Payment method
            </p>
            <p
              className="text-[14px] font-semibold leading-[22px]"
              style={{ fontFamily: "Inter" }}
            >
              Credit Card
            </p>
          </div>
        </div>

        <div className="border w-[280px] lg:w-[200px] h-[52px] px-[16px] flex justify-center mx-auto border-[#6C7275] rounded-3xl bg-black text-[#FFFFFF] my-[40px] ">
          <button
            className="text-[16px] font-normal leading-[26px] "
            style={{ fontFamily: "Inter" }}
          >
            Purchase history
          </button>
        </div>
      </div>
    </div>
  );
}
