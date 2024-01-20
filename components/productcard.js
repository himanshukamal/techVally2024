import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productReducer";

export default function Productcard({ product }) {
  // console.log("product", product);
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    // console.log("value in handleaddtocart", product);
    const existingProductsString = localStorage.getItem("products");

    const existingProducts = existingProductsString
      ? JSON.parse(existingProductsString)
      : [];

    // Add the new product to the array
    existingProducts.push(product);

    // Save the updated array back to localStorage
    localStorage.setItem("products", JSON.stringify(existingProducts));
    // Dispatch the addToCart action with the product as payload
    dispatch(addToCart(product));
  };

  return (
    <div>
      <li>
        <div className="flex  flex-col relative  h-[360px]">
          <Image
            src={`${product.imageUrl}`}
            alt="bedroom image"
            width="262"
            height="349"
          />

          {/* NEW 50% */}
          <div className="absolute top-[16px] left-[16px] ">
            <p
              className="text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-white"
              style={{ fontFamily: "inter" }}
            >
              NEW
            </p>
            <p
              className="text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-green-600 text-white"
              style={{ fontFamily: "inter" }}
            >
              {product.discountpercentage}%
            </p>
          </div>

          {/* Add to cart button */}
          <div className="absolute  ml-[15px] mt-[279px]">
            <button
              className="bg-black font-medium leading-[25px] tracking-[0.4px] w-[230px] h-[46px] text-white px-[24px] py-[8px] rounded shadow-sm "
              style={{ fontFamily: "inter" }}
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>

          {/* PRICE AND NAME */}
          <div className="flex flex-col items-start mt-[12px]">
            <p
              className="text-base font-semibold leading-6"
              style={{ fontFamily: "inter" }}
            >
              {product.name}
            </p>
            <p
              className="text-sm font-semibold leading-5"
              style={{ fontFamily: "inter" }}
            >
              ${product.discountedprice}
              <span
                className="decoration-[#6C7275] text-[#6C7275] line-through pl-[12px]"
                style={{ fontFamily: "inter" }}
              >
                ${product.price}
              </span>
            </p>
          </div>
        </div>
      </li>
    </div>
  );
}
