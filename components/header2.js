import React from "react";
import "@fontsource/poppins";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Header2() {
  const router = useRouter();

  const handleProductList = () => {
    router.push("/productlist");
  };
  return (
    <div>
      <div className=" flex" style={{ fontFamily: "poppins" }}>
        TechValley
      </div>
      <div style={{ fontFamily: "Space Grotesk" }}>
        <Link href="#" className=" mr-[40px] decoration-inherit">
          Home
        </Link>
        <Link href="#" className=" mr-[40px] decoration-inherit">
          Shop
        </Link>
        <button
          // href="/pages/productlist.js"
          onClick={handleProductList}
          className="mr-[40px] decoration-inherit"
        >
          Product
        </button>
        <Link href="#" className="mr-[40px] decoration-inherit">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
