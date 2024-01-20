import Image from "next/image";
import React, { useState } from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Cartcontent() {
  const [quantity, setQuantity] = useState(1);

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };
  console.log("quantities", quantities);
  const cartContent = useSelector((state) => state.products);
  console.log("cartContent in cartcontent", cartContent);
  const router = useRouter();

  const cartArray = [
    {
      price: 5,
      quantity: 2,
      picture: "/cart_item_1.svg",
      productName: "Table",
      color: "Black",
    },
    {
      price: 9,
      quantity: 2,
      picture: "/cart_item_2.svg",
      productName: "Table",
      color: "Red",
    },
    {
      price: 10,
      quantity: 1,
      picture: "/cart_item_3.svg",
      productName: "Table Lamp",
      color: "Black",
    },
  ];

  const [productCount, setProductCount] = useState(cartArray.quantity);

  // const increaseCount = (e) => {
  //   // e.preventDefault();
  //   console.log("incraese count fn and id", e.id);
  //   setQuantity(quantity + 1);
  // };
  // const decreaseCount = (e) => {
  //   // e.preventDefault();
  //   setQuantity(quantity - 1);

  //   if (productCount <= 0) {
  //     setQuantity(0);
  //     // setTotalValue(0);
  //   }
  // };
  const increaseCount = (productId) => {
    const currentQuantity = quantities[productId] || 0;
    handleQuantityChange(productId, currentQuantity + 1);
  };

  const decreaseCount = (productId) => {
    const currentQuantity = quantities[productId] || 0;
    if (currentQuantity > 0) {
      handleQuantityChange(productId, currentQuantity - 1);
    }
  };
  //  const total = () => {
  //   totalValue = productCount * price;

  // // }
  const handleCheckout = () => {
    router.push("/checkoutpage");
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center mx-auto">
      {/* <items> */}
      <div className="w-[312px] lg:w-[550px] mx-auto lg:mx-[12px]">
        <div className="flex flex-row h-[50px]  border-b-[1px] border-[#6C7275] items-end justify-between pb-[24px]">
          <p
            className="text-[16px] lg:w-[220px] font-semibold leading-[26px]"
            style={{ fontFamily: "Inter" }}
          >
            Product
          </p>
          <p
            className="hidden lg:block text-[16px] font-semibold leading-[26px]"
            style={{ fontFamily: "Inter" }}
          >
            Quantity
          </p>
          <p
            className="hidden lg:block text-[16px] font-semibold leading-[26px]"
            style={{ fontFamily: "Inter" }}
          >
            Price
          </p>
          <p
            className="hidden lg:block text-[16px] font-semibold leading-[26px]"
            style={{ fontFamily: "Inter" }}
          >
            Subtotal
          </p>
        </div>

        <div className="flex flex-col">
          {cartContent.products.map((item, index) => (
            <div
              key={index}
              className="h-[144px] border-b-[1px] border-[#E8ECEF] flex flex-row justify-between lg:items-center py-[24px] "
            >
              <Image src={item.imageUrl} width="80" height="96" />
              <div className="flex flex-col lg:w-[200px] lg:flex-row h-[96px] justify-between lg:mr-[0px] lg:items-center">
                {/* Display other details of the item */}
                <div className="flex flex-col">
                  <p className="text-[14px] font-semibold leading-[22px] pb-[8px]">
                    {item.name}
                  </p>
                  <p className="text-[12px] font-normal leading-[20px] text-[#6C7275]">
                    Color: {item.color}
                  </p>
                  <Image
                    src="/remove.svg"
                    width="24"
                    height="24"
                    className="hidden lg:block py-[12px]"
                  />
                </div>

                {/* Quantity */}
                <div className="flex flex-row justify-center items-center border border-black w-[80px] h-[26px] rounded-md ">
                  <button
                    // onClick={(e) => {
                    //   decreaseCount(item, e);
                    // }}
                    onClick={() => decreaseCount(item.id)}
                    type="button"
                    className="w-[30px] text-[16px]"
                  >
                    -
                  </button>
                  <p className="text-[12px] font-semibold leading-[20px]">
                    {/* {quantity} */}
                    {quantities[item.id] || 0}
                  </p>
                  <button
                    // onClick={(e) => {
                    //   increaseCount(item, e);
                    // }}
                    onClick={() => increaseCount(item.id)}
                    type="button"
                    className="w-[30px]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-start items-end">
                <p
                  className="text-[14px] font-semibold leading-[22px]"
                  style={{ fontFamily: "Inter" }}
                >
                  ${item.price}
                </p>
                <Image
                  src="/remove.svg"
                  width="24"
                  height="24"
                  className="lg:hidden py-[12px]"
                />
              </div>
              <div className="hidden lg:flex">
                <p
                  className="text-[14px] font-semibold leading-[22px]"
                  style={{ fontFamily: "Inter" }}
                >
                  ${item.price * quantities[item.id]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col my-[24px] w-[312px]">
          <p
            className="py-[8px] text-[20px] font-semibold lg:font-medium leading-[28px]"
            style={{ fontFamily: "Poppins" }}
          >
            Have a coupon?
          </p>
          <p
            className="text-[14px] font-normal leading-[22px]"
            style={{ fontFamily: "Inter" }}
          >
            Add your code for an instant cart discount
          </p>
          <div className="border-[2px] rounded-md border-[#6C7275] px-[16px] h-[52px] mt-[16px] flex flex-row">
            <Image src="/CouponCode.svg" width="24" height="24" />
            <input
              type="text"
              placeholder="Coupon Code"
              className="pl-[10px] text-[14px] font-normal leading-[22px]"
              style={{ fontFamily: "Inter" }}
            />
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
      {/* <cart summary> */}
      <div className="border-[2px] rounded-md border-[#6C7275] w-[312px] lg:w-[414px] h-[482px] mx-auto lg:mx-[12px] mb-[30px]">
        <div className="w-[280px] lg:w-[365px] m-[20px]">
          <p
            className="text-[20px] font-semibold lg:font-medium leading-[28px]"
            style={{ fontFamily: "Poppins" }}
          >
            Cart Summary
          </p>
        </div>
        <div className="flex border-[2px] rounded-md border-[#6C7275]  w-[280px] lg:w-[365px] h-[52px] items-center p-[10px] m-[16px] justify-between">
          <p>
            <input
              type="radio"
              id="free shipping"
              name="cart summary"
              value="free shipping"
              className="bg-gray-500"
            />
            <label
              className="text-[16px] font-semibold lg:font-normal leading-[26px] px-[10px]"
              style={{ fontFamily: "Inter" }}
            >
              Free Shipping
            </label>
          </p>

          <p
            className="text-[16px] font-semibold lg:font-normal leading-[26px] px-[10px]"
            style={{ fontFamily: "Inter" }}
          >
            $0.00
          </p>
        </div>
        <div className="flex border-[2px] rounded-md border-[#6C7275]  w-[280px] lg:w-[365px] h-[52px] items-center p-[10px] m-[16px] justify-between">
          <p>
            <input
              type="radio"
              id="free shipping"
              name="cart summary"
              value="free shipping"
              className="bg-gray-500"
            />
            <label
              className="text-[16px] font-semibold lg:font-normal leading-[26px] px-[10px]"
              style={{ fontFamily: "Inter" }}
            >
              Express Shipping
            </label>
          </p>

          <p
            className="text-[16px] font-semibold lg:font-normal leading-[26px] px-[10px]"
            style={{ fontFamily: "Inter" }}
          >
            +$15.00
          </p>
        </div>
        <div className="flex border-[2px] rounded-md border-[#6C7275]  w-[280px] lg:w-[365px] h-[52px] items-center p-[10px] m-[16px] justify-between">
          <p>
            <input
              type="radio"
              id="free shipping"
              name="cart summary"
              value="free shipping"
              className="bg-gray-500"
            />
            <label
              className="text-[16px] font-semibold lg:font-normal leading-[26px] px-[10px]"
              style={{ fontFamily: "Inter" }}
            >
              Pick up
            </label>
          </p>

          <p
            className="text-[16px] font-semibold lg:font-normal leading-[26px] px-[10px]"
            style={{ fontFamily: "Inter" }}
          >
            $21.00
          </p>
        </div>
        <div className="w-[280px] lg:w-[365px] m-[20px] flex flex-row justify-between">
          <p
            className="text-[20px] font-semibold lg:font-normal leading-[28px]"
            style={{ fontFamily: "Poppins" }}
          >
            Subtotal
          </p>
          <p
            className="text-[20px] font-semibold lg:font-normal leading-[28px] px-[10px]"
            style={{ fontFamily: "Poppins" }}
          >
            $0.00
          </p>
        </div>
        <div className="w-[280px] lg:w-[365px] m-[20px] flex flex-row justify-between">
          <p
            className="text-[20px] font-semibold lg:font-normal leading-[28px]"
            style={{ fontFamily: "Poppins" }}
          >
            Total
          </p>
          <p
            className="text-[20px] font-semibold lg:font-normal leading-[28px] px-[10px]"
            style={{ fontFamily: "Poppins" }}
          >
            $0.00
          </p>
        </div>
        <div className="flex border-[2px] rounded-md border-[#6C7275]  w-[280px] lg:w-[365px] h-[52px] items-center justify-center mx-[16px] my-[32px] bg-[#121212] text-[#FFFFFF]">
          <button
            className="text-[16px] font-semibold lg:font-normal leading-[26px]"
            style={{ fontFamily: "Inter" }}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
