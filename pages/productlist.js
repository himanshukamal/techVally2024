import Header from "@/components/header";
import Header2 from "@/components/header2";
import Plpageheader from "@/components/plpageheader";
import Productsidebar from "@/components/productsidebar";
import Products from "@/components/productsidebar";
import Productsmain from "@/components/productsmain";

import React, { useEffect, useState } from "react";

export default function Productlist() {
  const [allPrice, setAllPrice] = useState(true);

  const handleAllPriceChange = (event) => {
    const { value } = event.target;
    console.log("all price is selected inside sidebar", value);
    setAllPrice(value);
    // You may also want to check the current state value
    console.log("Current all price state:", allPrice);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=" flex max-w-[1120px] mx-auto">
        <Plpageheader />
      </div>
      <div className=" flex mt-[65px] max-w-[1120px] mx-auto">
        <Productsidebar
          allPrice={allPrice}
          onAllPriceChange={handleAllPriceChange}
        />
        <Productsmain />
      </div>
    </div>
  );
}
