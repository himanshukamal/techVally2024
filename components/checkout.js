import React from "react";

export default function Checkout() {
  return (
    <div>
      {/* <--------Contact Information------> */}
      <div className="border w-[312px] lg:w-[632px] py-[24px] px-[16px] justify-center mx-auto lg:mx-[10px] border-[#6C7275] rounded-md my-[24px]">
        <div>
          <p
            className="text-[20px] font-medium leading-[28px]"
            style={{ fontFamily: "Poppins" }}
          >
            Contact information
          </p>
        </div>
        <div className="flex flex-row my-[12px] justify-between">
          <div>
            <p
              className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
              style={{ fontFamily: "Inter" }}
            >
              First Name
            </p>
            <input
              type="text"
              placeholder="First Name"
              className=" text-[16px] font-normal leading-[26px] w-[136px] lg:w-[285px] h-[40px] border rounded-md px-[16px]"
              style={{ fontFamily: "Inter" }}
            />
          </div>
          <div>
            <p
              className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
              style={{ fontFamily: "Inter" }}
            >
              Last Name
            </p>
            <input
              type="text"
              placeholder="Last Name"
              className=" text-[16px] font-normal leading-[26px] w-[136px] lg:w-[285px] h-[40px] border rounded-md px-[16px] "
              style={{ fontFamily: "Inter" }}
            />
          </div>
        </div>
        <div className="my-[12px] justify-between">
          <p
            className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
            style={{ fontFamily: "Inter" }}
          >
            Phone Number
          </p>
          <input
            type="text"
            placeholder="Phone Number"
            className=" text-[16px] font-normal leading-[26px] w-[280px] lg:w-[595px] h-[40px] border rounded-md px-[16px]"
            style={{ fontFamily: "Inter" }}
          />
        </div>
        <div className="my-[12px] justify-between">
          <p
            className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
            style={{ fontFamily: "Inter" }}
          >
            Email Address
          </p>
          <input
            type="e-mail"
            placeholder="Your Email"
            className=" text-[16px] font-normal leading-[26px] w-[280px] lg:w-[595px] h-[40px] border rounded-md px-[16px]"
            style={{ fontFamily: "Inter" }}
          />
        </div>
      </div>
      {/* <--------Shiping Information------> */}
      <div className="border w-[312px] lg:w-[632px] py-[24px] px-[16px] justify-center mx-auto lg:mx-[10px] border-[#6C7275] rounded-md my-[24px]">
        <div>
          <p
            className="text-[20px] font-medium leading-[28px]"
            style={{ fontFamily: "Poppins" }}
          >
            Shipping Address
          </p>
        </div>
        <div className="my-[12px] ">
          <p
            className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
            style={{ fontFamily: "Inter" }}
          >
            Street address *
          </p>
          <input
            type="text"
            placeholder="Street Address"
            className=" text-[16px] font-normal leading-[26px] w-[280px] lg:w-[595px] h-[40px] border rounded-md px-[16px]"
            style={{ fontFamily: "Inter" }}
          />
        </div>
        <div className="my-[12px] ">
          <p
            className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
            style={{ fontFamily: "Inter" }}
          >
            Country
          </p>
          <input
            type="text"
            placeholder="Country"
            className=" text-[16px] font-normal leading-[26px] w-[280px] lg:w-[595px] h-[40px] border rounded-md px-[16px]"
            style={{ fontFamily: "Inter" }}
          />
        </div>
        <div className="my-[12px] ">
          <p
            className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
            style={{ fontFamily: "Inter" }}
          >
            Town/City
          </p>
          <input
            type="text"
            placeholder="Town/City"
            className=" text-[16px] font-normal leading-[26px] w-[280px] lg:w-[595px] h-[40px] border rounded-md px-[16px]"
            style={{ fontFamily: "Inter" }}
          />
        </div>
        <div className="flex flex-row my-[12px] justify-between">
          <div>
            <p
              className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
              style={{ fontFamily: "Inter" }}
            >
              State
            </p>
            <input
              type="text"
              placeholder="State"
              className=" text-[16px] font-normal leading-[26px] w-[136px] lg:w-[285px] h-[40px] border rounded-md px-[16px]"
              style={{ fontFamily: "Inter" }}
            />
          </div>
          <div>
            <p
              className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
              style={{ fontFamily: "Inter" }}
            >
              Zip Code
            </p>
            <input
              type="text"
              placeholder="Zip Code"
              className=" text-[16px] font-normal leading-[26px] w-[136px] lg:w-[285px] h-[40px] border rounded-md px-[16px] "
              style={{ fontFamily: "Inter" }}
            />
          </div>
        </div>
        <div className="my-[24px] flex">
          <input
            type="checkbox"
            id="billing address"
            value="billing address"
            className="bg-gray-500"
          />
          <p
            className="text-[12px] font-normal leading-[26px] px-[10px] text-[#6C7275]"
            style={{ fontFamily: "Inter" }}
          >
            Use a different billing address (optional)
          </p>
        </div>
      </div>
      {/* <--------Payment Information------> */}
      <div className="border w-[312px] lg:w-[632px] py-[24px] px-[16px] justify-center mx-auto lg:mx-[10px] border-[#6C7275] rounded-md my-[24px]">
        <div>
          <p
            className="text-[20px] font-medium leading-[28px]"
            style={{ fontFamily: "Poppins" }}
          >
            Payment Method
          </p>
        </div>
        <div className="my-[12px] border w-[280px] lg:w-[595px] h-[50px] border rounded-md px-[16px] flex items-center">
          <p>
            <input
              type="radio"
              id="free shipping"
              name="cart summary"
              value="free shipping"
              className="bg-gray-500"
            />
            <label
              className="text-[16px] font-normal leading-[26px] px-[10px]"
              style={{ fontFamily: "Inter" }}
            >
              Pay by Credit Card
            </label>
          </p>
        </div>
        <div className="my-[12px] border w-[280px] lg:w-[595px] h-[50px] border rounded-md px-[16px] flex items-center">
          <p>
            <input
              type="radio"
              id="free shipping"
              name="cart summary"
              value="free shipping"
              className="bg-gray-500"
            />
            <label
              className="text-[16px] font-normal leading-[26px] px-[10px]"
              style={{ fontFamily: "Inter" }}
            >
              Pay Pal
            </label>
          </p>
        </div>
        <div className="my-[24px] border-t-[2px]  ">
          <p
            className="text-[12px] font-bold leading-[12px] uppercase pt-[24px] pb-[12px] text-[#6C7275] border-[#141718]"
            style={{ fontFamily: "Inter" }}
          >
            Card Number
          </p>
          <input
            type="text"
            placeholder="1234 1234 1234"
            className=" text-[16px] font-normal leading-[26px] w-[280px] lg:w-[595px] h-[40px] border rounded-md px-[16px]"
            style={{ fontFamily: "Inter" }}
          />
        </div>
        <div className="flex flex-row my-[12px] justify-between">
          <div>
            <p
              className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
              style={{ fontFamily: "Inter" }}
            >
              Expiration Date
            </p>
            <input
              type="text"
              placeholder="MM/YY"
              className=" text-[16px] font-normal leading-[26px] w-[136px] lg:w-[285px] h-[40px] border rounded-md px-[16px]"
              style={{ fontFamily: "Inter" }}
            />
          </div>
          <div>
            <p
              className="text-[12px] font-bold leading-[12px] uppercase py-[12px] text-[#6C7275]"
              style={{ fontFamily: "Inter" }}
            >
              CVC
            </p>
            <input
              type="text"
              placeholder="CVC code"
              className=" text-[16px] font-normal leading-[26px] w-[136px] lg:w-[285px] h-[40px] border rounded-md px-[16px] "
              style={{ fontFamily: "Inter" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
