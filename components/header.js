import React, { useEffect, useState } from "react";
import "@fontsource/space-grotesk"; // Defaults to weight 400
import "@fontsource/space-grotesk/400.css"; // Specify weight
// import "@fontsource/space-grotesk/400-italic.css"; // Specify weight and style
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { setSearchQuery } from "@/redux/searchReducer";
// import { setSearchQuery } from "@/redux/searchReducer";
import { setSearchQuery } from "../redux/searchReducer";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [productsCount, setProductsCount] = useState(0);
  // const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchedQuery] = useState("");

  const userEmail = useSelector((state) => state.auth.email);
  console.log("userEmail in header", userEmail);

  const productsArrayCount = useSelector((state) => state.products.products);

  // console.log("productsArrayCount", productsArrayCount.length);

  useEffect(() => {
    const myEmail = localStorage.getItem("email");
    const myPassword = localStorage.getItem("password");
    // console.log("email in Header", myEmail);
    // console.log("password in header", myPassword);
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
  const handleToggleSearch = () => {
    // setIsSearchBarOpen(!isSearchBarOpen);
    setIsExpanded(!isExpanded);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission logic
    console.log("Search submitted with query:", searchQuery);

    dispatch(setSearchQuery({ query: searchQuery }));
    // dispatch(setSearchQuery({ searchQuery }));

    // setSearchQuery(searchQuery);
    console.log("new search query", searchQuery);
    // dispatch(setSearchQuery({ searchQuery }));
  };

  return (
    <div className="flex align-center py-4 justify-between mx-[32px] lg:max-w-[1120px] lg:mx-auto h-[74px] max-h-[74px]">
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
        <Link href="/productlist" className="mr-[40px] decoration-inherit">
          Product
        </Link>
        <Link href="#" className="mr-[40px] decoration-inherit">
          Contact Us
        </Link>
      </div>
      ​
      <div className="flex items-center">
        {/* <Image
          src="/search 02.svg"
          alt="Search"
          width="24"
          height="24"
          // style={{ marginRight: "16px" }}
          className="mr-[16px] hidden sm:block"
        /> */}

        {/* Search Bar (conditionally rendered based on state) */}
        <button className=" focus:outline-none" onClick={handleToggleSearch}>
          <Image
            src="/search 02.svg"
            alt="Search"
            width="24"
            height="24"
            // style={{ marginRight: "16px" }}
            className="mr-[16px] hidden sm:block"
          />
        </button>
        {isExpanded ? (
          <form onSubmit={handleSearchSubmit}>
            <input
              type="search"
              placeholder="Search..."
              className="border rounded p-2 focus:outline-none"
              value={searchQuery}
              onChange={(e) => {
                setSearchedQuery(e.target.value);
                console.log("seaerchedquery in input", searchQuery);
                // dispatch(setSearchQuery(searchQuery));
              }}
            />
            <button type="submit">
              <Image
                src="/search 02.svg"
                alt="Search"
                width="24"
                height="24"
                // style={{ marginRight: "16px" }}
                className="mr-[16px] hidden sm:block"
              />
            </button>
          </form>
        ) : null}
        {/* <Image
          src="/user-circle.svg"
          alt="Search"
          width="24"
          height="24"
          // style={{ marginRight: "16px" }}
          className="mr-[16px] hidden sm:block"
        /> */}
        <p>{userEmail ? userEmail : ""}</p>
        {/* <Image
          src="/Cart Button.svg"
          alt="Search"
          width="50"
          height="24"
          onClick={handleGoToCart}
        /> */}
        <FaShoppingCart
          className="cursor-pointer  text-2xl text-black mr-2"
          onClick={handleGoToCart}
        />
        <p className="w-[24px] h-[24px] text-white bg-black rounded-full  grid place-items-center">
          {productsArrayCount.length ? productsArrayCount.length : 0}
        </p>
      </div>
    </div>
  );
}
