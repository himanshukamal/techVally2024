import Image from "next/image";
import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight

export default function Carttitle() {
  return (
    <div className="my-[40px]">
      <div className="flex justify-center pb-[24px] ">
        <p
          className="text-[40px] lg:text-[54px] font-medium leading-[44px] lg:leading-[58px] tracking-[-0.4px] lg:tracking-[-1px]"
          style={{ fontFamily: "Poppins" }}
        >
          Cart
        </p>
      </div>

      <div className="overflow-x-hidden lg:w-[832px] lg:mx-auto justify-center">
        <div className="flex flex-nowrap">
          <div className="border-b-[3px] flex-none w-[256px] h-[68px] m-2 pb-[26px] border-[#23262F]">
            <div className="flex flex-row h-[42px]">
              <Image src="cart_no1.svg" width="42" height="42" />
              <p
                className="text-[16px] font-semibold leading-[42px] pl-[17px]"
                style={{ fontFamily: "Inter" }}
              >
                Shopping cart
              </p>
            </div>
          </div>
          <div className="border-b-[3px] flex-none w-[256px] h-[68px] m-2 pb-[26px]">
            <div className="flex flex-row h-[42px]">
              <Image src="cart_no2.svg" width="42" height="42" />
              <p
                className="text-[16px] font-semibold leading-[42px] pl-[17px]"
                style={{ fontFamily: "Inter" }}
              >
                Checkout Details
              </p>
            </div>
          </div>
          <div className="border-b-[3px] flex-none w-[256px] h-[68px] m-2 pb-[26px]">
            <div className="flex flex-row h-[42px]">
              <Image src="cart_no3.svg" width="42" height="42" />
              <p
                className="text-[16px] font-semibold leading-[42px] pl-[17px]"
                style={{ fontFamily: "Inter" }}
              >
                Order Complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
