import React, { useEffect, useState } from "react";
import "@fontsource/space-grotesk"; // Defaults to weight 400
import "@fontsource/space-grotesk/400.css"; // Specify weight
// import "@fontsource/space-grotesk/400-italic.css"; // Specify weight and style
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Header() {
  const router = useRouter();
  const [productsCount, setProductsCount] = useState(0);

  const userEmail = useSelector((state) => state.auth.email);
  const productsArrayCount = useSelector((state) => state.products.products);
  console.log("productsArrayCount", productsArrayCount.length);
  useEffect(() => {
    const myEmail = localStorage.getItem("email");
    const myPassword = localStorage.getItem("password");
    console.log("email in Header", myEmail);
    console.log("password in header", myPassword);
    // const productsCount = localStorage.getItem("products").length;
    // console.log("products count is", productsCount);

    const storedProducts = localStorage.getItem("products");
    const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];

    // Set the count of products
    setProductsCount(parsedProducts.length);
    // if (
    //   !myEmail ||
    //   !myPassword ||
    //   (myEmail !== "himanshu.55421@gmail.com" && myPassword !== "himanshu@123")
    // ) {
    //   router.push("/signin");
    // }
  }, []);
  const handleGoToCart = () => {
    router.push("/cartpage");
  };
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
        {/* <Image
          src="/user-circle.svg"
          alt="Search"
          width="24"
          height="24"
          // style={{ marginRight: "16px" }}
          className="mr-[16px] hidden sm:block"
        /> */}
        <p>{userEmail ? userEmail : ""}</p>
        <Image
          src="/Cart Button.svg"
          alt="Search"
          width="50"
          height="24"
          onClick={handleGoToCart}
        />
        <p className="w-[24px] h-[24px] text-white bg-black rounded-full relative right-5 grid place-items-center">
          {productsArrayCount.length ? productsArrayCount.length : 0}
        </p>
      </div>
    </div>
  );
}
