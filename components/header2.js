import React from "react";
import "@fontsource/poppins";
import Link from "next/link";
export default function Header2() {
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
        <Link href="/productlist" className="mr-[40px] decoration-inherit">
          Product
        </Link>
        <Link href="#" className="mr-[40px] decoration-inherit">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
