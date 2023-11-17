import React from "react";
import "@fontsource/space-grotesk"; // Defaults to weight 400
import "@fontsource/space-grotesk/400.css"; // Specify weight
// import "@fontsource/space-grotesk/400-italic.css"; // Specify weight and style
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div className="flex py-4 justify-between mx-[32px] lg:max-w-[1120px] lg:mx-auto">
      <div
        className="text-3xl font-medium leading-6"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {" "}
        TechValley.
      </div>
​
      <div
        style={{
          fontFamily: "Space Grotesk",
        }}
        className="sm:flex text-[14px] hidden md:block"
      >
        <Link href="#" className="mr-[40px] decoration-inherit">
          Home
        </Link>
        <Link href="#" className="mr-[40px] decoration-inherit">
          Shop
        </Link>
        <Link href="#" className="mr-[40px] decoration-inherit">
          Product
        </Link>
        <Link href="#" className="mr-[40px] decoration-inherit">
          Contact Us
        </Link>
      </div>
​
      <div className="flex">
        <Image
          src="/search 02.svg"
          alt="Search"
          width="24"
          height="24"
          // style={{ marginRight: "16px" }}
          className="mr-[16px] hidden sm:block"
        />
        <Image
          src="/user-circle.svg"
          alt="Search"
          width="24"
          height="24"
          // style={{ marginRight: "16px" }}
          className="mr-[16px] hidden sm:block"
        />
        <Image src="/Cart Button.svg" alt="Search" width="50" height="24" />
        <Image />
      </div>
    </div>
  );
}