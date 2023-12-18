import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight

export default function Placeorder() {
  return (
    <div>
      <div className="border w-[312px] lg:w-[632px] h-[52px] px-[16px] flex justify-center mx-auto border-[#6C7275] rounded-md my-[24px] my-[24px] bg-black text-[#FFFFFF] ">
        <button
          className="text-[16px] font-normal leading-[26px] "
          style={{ fontFamily: "Inter" }}
        >
          Place order
        </button>
      </div>
    </div>
  );
}
