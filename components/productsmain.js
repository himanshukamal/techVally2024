import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import Productcard from "./productcard";
import "@fontsource/inter";
import { Inter } from "next/font/google";
import Productsidebar from "./productsidebar";
import { AiOutlineControl } from "react-icons/ai";
import "@fontsource/inter";
import axios from "axios";
import LineChart from "./lineChart";
import { useSelector } from "react-redux";
// import { Inter } from "next/font/google";
// import { useState } from "react";

const defaultFilterOptions = {
  showAllProducts: true,
  selectedCategories: [], // Initial value is an empty array for no category filter
  minPrice: 0,
  maxPrice: Infinity,
};

export default function Productsmain({ allPrice, onAllPriceChange }) {
  // fetching search value from store
  const searchedQuery = useSelector((state) => state.search.query);

  console.log("searchedquery in productsmain", searchedQuery);

  useEffect(() => {
    // console.log("allPrice in Productsmain changed:", allPrice);
    // You can invoke onAllPriceChange here if needed
    // onAllPriceChange(someNewValue);
  }, [allPrice]);

  const [filterOptions, setFilterOptions] = useState(defaultFilterOptions);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      discountedprice: 700,
      discountpercentage: 20,
      description: "Powerful laptop with high-performance features.",
      imageUrl: "/productitem1.svg",
      category: "Electronics",
    },
    {
      id: 1,
      name: "Sofa fabric",
      price: 999.99,
      discountedprice: 700,
      discountpercentage: 20,
      description: "Powerful laptop with high-performance features.",
      imageUrl: "/productitem1.svg",
      category: "Home",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 499.99,
      discountedprice: 200,
      discountpercentage: 60,
      description: "Latest smartphone with advanced camera and features.",
      imageUrl: "/productitem2.svg",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 79.99,
      discountedprice: 60,
      discountpercentage: 10,
      description: "Comfortable running shoes with advanced cushioning.",
      imageUrl: "/productitem3.svg",
      category: "Fashion",
    },
    {
      id: 4,
      name: "Appliance1",
      price: 49.99,
      discountedprice: 30,
      discountpercentage: 7,
      description:
        "High-quality coffee maker for brewing your favorite coffee.",
      imageUrl: "/productitem4.svg",
      category: "Appliances",
    },
    {
      id: 5,
      name: "Appliance2",
      price: 39.99,
      discountedprice: 32,
      discountpercentage: 10,
      description: "Table lamp with wooden stand.",
      imageUrl: "/lamp1.svg",
      category: "Appliances",
    },
    {
      id: 6,
      name: "Appliance3",
      price: 500.0,
      discountedprice: 299.0,
      discountpercentage: 55,
      description: "High-quality Luxuary sofa.",
      imageUrl: "/luxuarysofa.svg",
      category: "Appliances",
    },
    {
      id: 7,
      name: "Appliance4",
      price: 89.99,
      discountedprice: 70.0,
      discountpercentage: 12,
      description: "Drawer_unit.",
      imageUrl: "/drawer_unit.svg",
      category: "Appliances",
    },
    {
      id: 8,
      name: "Clothing",
      price: 19.99,
      discountedprice: 15.0,
      discountpercentage: 5,
      description: "Black tray.",
      imageUrl: "/blacktray.svg",
      category: "Clothing",
    },
    {
      id: 9,
      name: "Home",
      price: 5.99,
      discountedprice: 3.99,
      discountpercentage: 8,
      description: "White Pillow.",
      imageUrl: "/pillow.svg",
      category: "Home",
    },
    {
      id: 10,
      name: "Book",
      price: 319.99,
      discountedprice: 315.0,
      discountpercentage: 5,
      description: "Black tray.",
      imageUrl: "/blacktray.svg",
      category: "Books",
    },

    // Add more products as needed
  ];

  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Books",
    "Home",
    "Appliances",
    "Fashion",
  ];
  const priceRanges = [
    { label: "All Price", range: [] },
    { label: "$0.00 - 99.99", range: [0, 99.99] },
    { label: "$100.00 - 199.99", range: [100, 199.99] },
    { label: "$200.00 - 299.99", range: [200, 299.99] },
    { label: "$300.00 - 399.99", range: [300, 399.99] },
    { label: "$400.00+", range: [400, Infinity] },
  ];

  // console.log("all price in productsmain", allPrice, onAllPriceChange);

  // Filter products based on the selected options
  // const filteredProducts = products.filter((product) => {
  //   // Check category filter
  //   // const filterbyName = product.name.includes(searchedQuery);
  //   if (
  //     filterOptions.selectedCategories.length === 0 ||
  //     filterOptions.selectedCategories.includes(product.category)
  //   ) {
  //     // Check price range filter
  //     if (
  //       product.price >= filterOptions.minPrice &&
  //       product.price <= filterOptions.maxPrice
  //     ) {
  //       return true;
  //     }
  //   }

  //   return false;
  // });
  const filteredProducts = products.filter((product) => {
    // Check if the product name includes the searched query
    const nameMatches = product.name
      .toLowerCase()
      .includes(searchedQuery.toLowerCase());

    // Check category filter
    const categoryFilter =
      filterOptions.selectedCategories.length === 0 ||
      filterOptions.selectedCategories.includes(product.category);

    // Check price range filter
    const priceFilter =
      product.price >= filterOptions.minPrice &&
      product.price <= filterOptions.maxPrice;

    // Return true only if all conditions are met
    return nameMatches && categoryFilter && priceFilter;
  });

  const handleCategoryChange = (category) => {
    setFilterOptions((prevOptions) => {
      const updatedCategories = [...prevOptions.selectedCategories];

      if (updatedCategories.includes(category)) {
        // Remove category if already selected
        const index = updatedCategories.indexOf(category);
        updatedCategories.splice(index, 1);
      } else {
        // Add category if not selected
        updatedCategories.push(category);
      }

      return {
        ...prevOptions,
        selectedCategories: updatedCategories,
      };
    });
  };

  // useState
  const [category, setCategory] = useState("jewelery");
  const [priceRange, setPriceRange] = useState([]);

  // useEffect is used for sideeffects
  useEffect(() => {
    // your effect
    // fetch some data from the api
    // first filter categories
    // 2nd filter prices

    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        console.log("product response", res);
      });

    // fetch('https://fakestoreapi.com/products?limit=5')
    // .then(res=>res.json())
    // .then(json=>console.log("single product",json))
    axios
      .get(`https://fakestoreapi.com/products?limit=5`)
      .then((adarsh) => {
        // console.log("adarsh", adarsh);
      })
      .catch((err) => {});
  }, [category]);

  // Handle "All Price" checkbox change
  const handleShowAllProductsChange = () => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      showAllProducts: !prevOptions.showAllProducts,
    }));
  };

  const handlePriceRangeChange = (range) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      minPrice: range[0],
      maxPrice: range[1],
    }));
  };

  const handleJewelery = () => {
    setCategory("jewelery");
  };
  const handleElectronics = () => {
    setCategory("electronics");
  };
  const handleMensClothing = () => {
    setCategory("men's clothing");
  };
  const handleWomensClothing = () => {
    setCategory("women's clothing");
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div>
          <div className="hidden lg:block">
            {/* ------------------SIDE BAR----------------------- */}

            <div>
              {/* -----------------CATEGORIES------------------------*/}
              <div className="flex items-center ">
                <AiOutlineControl size="24px" className=" rotate-90 mr-[8px]" />
                <p
                  className=" text-[20px] font-semibold leading-[32px]"
                  style={{ fontFamily: "inter" }}
                >
                  Filter
                </p>
              </div>

              <div className="mt-[32px] mb-[16px] ">
                <p
                  className=" text-[16px] font-semibold  leading-[26px]"
                  style={{ fontFamily: "inter" }}
                >
                  CATEGORIES
                </p>
              </div>
              {/* Buttons Div */}
              <div className="grid gap-[12px]">
                <div className="grid gap-[12px]">
                  {categories.map((category) => (
                    <div key={category}>
                      <label
                        className="flex items-center text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                        style={{ fontFamily: "inter" }}
                      >
                        {category}
                        <input
                          type="checkbox"
                          checked={filterOptions.selectedCategories.includes(
                            category
                          )}
                          onChange={() => handleCategoryChange(category)}
                        />
                      </label>
                    </div>
                  ))}
                </div>

                {/* Price Range */}
                <div className="mt-[32px] flex-col">
                  {/* ... existing code ... */}
                  <div className="mb-[8px]">
                    <label
                      className="flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                      style={{ fontFamily: "inter" }}
                    >
                      All Price
                      <input
                        type="checkbox"
                        checked={filterOptions.showAllProducts}
                        onChange={handleShowAllProductsChange}
                      />
                    </label>
                  </div>
                  {/* ... existing code ... */}
                </div>
              </div>

              {/* ----------------PRICE--------------------- */}
              <div className=" mt-[32px]  flex-col ">
                <div className="mb-[16px]">
                  <p
                    className=" text-[16px] font-semibold  leading-[26px]"
                    style={{ fontFamily: "inter" }}
                  >
                    PRICE
                  </p>
                </div>
                <div className="mb-[8px]">
                  <label
                    className=" flex  justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                    style={{ fontFamily: "inter" }}
                  >
                    All Price
                    <input
                      type="checkbox"
                      className="w-[24px] h-[24px]"
                      // checked={showAllProducts}
                      // onChange={() => setShowAllProducts(!showAllProducts)}
                      checked={filterOptions.showAllProducts}
                      onChange={handleShowAllProductsChange}
                    />
                  </label>
                </div>
                {/* <div className="mb-[8px]">
                  <label
                    className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                    style={{ fontFamily: "inter" }}
                  >
                    $0.00 - 99.99
                    <input
                      type="checkbox"
                      className="w-[24px] h-[24px]"
                      //  checked={showPriceRange1}
                      //  onChange={()=>setShowPriceRange1}
                    />
                  </label>
                </div>
                <div className="mb-[8px]">
                  <label
                    className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                    style={{ fontFamily: "inter" }}
                  >
                    $100.00 - 199.99
                    <input type="checkbox" className="w-[24px] h-[24px]" />
                  </label>
                </div>
                <div className="mb-[8px]">
                  <label
                    className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                    style={{ fontFamily: "inter" }}
                  >
                    $200.00 - 299.99
                    <input type="checkbox" className="w-[24px] h-[24px]" />
                  </label>
                </div>
                <div className="mb-[8px]">
                  <label
                    className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                    style={{ fontFamily: "inter" }}
                  >
                    $300.00 - 399.99
                    <input type="checkbox" className="w-[24px] h-[24px]" />
                  </label>
                </div>
                <div className="mb-[8px]">
                  <label
                    className=" flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]"
                    style={{ fontFamily: "inter" }}
                  >
                    $400.00+
                    <input type="checkbox" className="w-[24px] h-[24px]" />
                  </label>
                </div> */}
                {priceRanges.map((range) => (
                  <div key={range.label} className="mb-[8px]">
                    <label className="flex justify-between text-[#807E7E] text-[14px] font-semibold leading-[22px]">
                      {range.label}
                      <input
                        type="checkbox"
                        checked={
                          filterOptions.minPrice === range.range[0] &&
                          filterOptions.maxPrice === range.range[1]
                        }
                        onChange={() => handlePriceRangeChange(range.range)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="  flex justify-between ml-[24px] max-w-[858px] ">
          <p>Living Room</p>

          {/*  Thumbnail icons */}
          <div>
            <button className="border border-gray-500 p-[11px] mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M1.5 3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H6C6.39782 1.5 6.77936 1.65804 7.06066 1.93934C7.34196 2.22064 7.5 2.60218 7.5 3V6C7.5 6.39782 7.34196 6.77936 7.06066 7.06066C6.77936 7.34196 6.39782 7.5 6 7.5H3C2.60218 7.5 2.22064 7.34196 1.93934 7.06066C1.65804 6.77936 1.5 6.39782 1.5 6V3ZM9 3C9 2.60218 9.15804 2.22064 9.43934 1.93934C9.72064 1.65804 10.1022 1.5 10.5 1.5H13.5C13.8978 1.5 14.2794 1.65804 14.5607 1.93934C14.842 2.22064 15 2.60218 15 3V6C15 6.39782 14.842 6.77936 14.5607 7.06066C14.2794 7.34196 13.8978 7.5 13.5 7.5H10.5C10.1022 7.5 9.72064 7.34196 9.43934 7.06066C9.15804 6.77936 9 6.39782 9 6V3ZM16.5 3C16.5 2.60218 16.658 2.22064 16.9393 1.93934C17.2206 1.65804 17.6022 1.5 18 1.5H21C21.3978 1.5 21.7794 1.65804 22.0607 1.93934C22.342 2.22064 22.5 2.60218 22.5 3V6C22.5 6.39782 22.342 6.77936 22.0607 7.06066C21.7794 7.34196 21.3978 7.5 21 7.5H18C17.6022 7.5 17.2206 7.34196 16.9393 7.06066C16.658 6.77936 16.5 6.39782 16.5 6V3ZM1.5 10.5C1.5 10.1022 1.65804 9.72064 1.93934 9.43934C2.22064 9.15804 2.60218 9 3 9H6C6.39782 9 6.77936 9.15804 7.06066 9.43934C7.34196 9.72064 7.5 10.1022 7.5 10.5V13.5C7.5 13.8978 7.34196 14.2794 7.06066 14.5607C6.77936 14.842 6.39782 15 6 15H3C2.60218 15 2.22064 14.842 1.93934 14.5607C1.65804 14.2794 1.5 13.8978 1.5 13.5V10.5ZM9 10.5C9 10.1022 9.15804 9.72064 9.43934 9.43934C9.72064 9.15804 10.1022 9 10.5 9H13.5C13.8978 9 14.2794 9.15804 14.5607 9.43934C14.842 9.72064 15 10.1022 15 10.5V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H10.5C10.1022 15 9.72064 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V10.5ZM16.5 10.5C16.5 10.1022 16.658 9.72064 16.9393 9.43934C17.2206 9.15804 17.6022 9 18 9H21C21.3978 9 21.7794 9.15804 22.0607 9.43934C22.342 9.72064 22.5 10.1022 22.5 10.5V13.5C22.5 13.8978 22.342 14.2794 22.0607 14.5607C21.7794 14.842 21.3978 15 21 15H18C17.6022 15 17.2206 14.842 16.9393 14.5607C16.658 14.2794 16.5 13.8978 16.5 13.5V10.5ZM1.5 18C1.5 17.6022 1.65804 17.2206 1.93934 16.9393C2.22064 16.658 2.60218 16.5 3 16.5H6C6.39782 16.5 6.77936 16.658 7.06066 16.9393C7.34196 17.2206 7.5 17.6022 7.5 18V21C7.5 21.3978 7.34196 21.7794 7.06066 22.0607C6.77936 22.342 6.39782 22.5 6 22.5H3C2.60218 22.5 2.22064 22.342 1.93934 22.0607C1.65804 21.7794 1.5 21.3978 1.5 21V18ZM9 18C9 17.6022 9.15804 17.2206 9.43934 16.9393C9.72064 16.658 10.1022 16.5 10.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V21C15 21.3978 14.842 21.7794 14.5607 22.0607C14.2794 22.342 13.8978 22.5 13.5 22.5H10.5C10.1022 22.5 9.72064 22.342 9.43934 22.0607C9.15804 21.7794 9 21.3978 9 21V18ZM16.5 18C16.5 17.6022 16.658 17.2206 16.9393 16.9393C17.2206 16.658 17.6022 16.5 18 16.5H21C21.3978 16.5 21.7794 16.658 22.0607 16.9393C22.342 17.2206 22.5 17.6022 22.5 18V21C22.5 21.3978 22.342 21.7794 22.0607 22.0607C21.7794 22.342 21.3978 22.5 21 22.5H18C17.6022 22.5 17.2206 22.342 16.9393 22.0607C16.658 21.7794 16.5 21.3978 16.5 21V18Z"
                  fill="#141718"
                />
              </svg>
            </button>
            <button className="border border-gray-500 p-[11px] mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M8.75 13.5C9.34674 13.5 9.91903 13.7371 10.341 14.159C10.7629 14.581 11 15.1533 11 15.75V19.25C11 19.8467 10.7629 20.419 10.341 20.841C9.91903 21.2629 9.34674 21.5 8.75 21.5H5.25C4.65326 21.5 4.08097 21.2629 3.65901 20.841C3.23705 20.419 3 19.8467 3 19.25V15.75C3 15.1533 3.23705 14.581 3.65901 14.159C4.08097 13.7371 4.65326 13.5 5.25 13.5H8.75ZM18.75 13.5C19.3467 13.5 19.919 13.7371 20.341 14.159C20.7629 14.581 21 15.1533 21 15.75V19.25C21 19.8467 20.7629 20.419 20.341 20.841C19.919 21.2629 19.3467 21.5 18.75 21.5H15.25C14.6533 21.5 14.081 21.2629 13.659 20.841C13.2371 20.419 13 19.8467 13 19.25V15.75C13 15.1533 13.2371 14.581 13.659 14.159C14.081 13.7371 14.6533 13.5 15.25 13.5H18.75ZM8.75 3.5C9.34674 3.5 9.91903 3.73705 10.341 4.15901C10.7629 4.58097 11 5.15326 11 5.75V9.25C11 9.84674 10.7629 10.419 10.341 10.841C9.91903 11.2629 9.34674 11.5 8.75 11.5H5.25C4.65326 11.5 4.08097 11.2629 3.65901 10.841C3.23705 10.419 3 9.84674 3 9.25V5.75C3 5.15326 3.23705 4.58097 3.65901 4.15901C4.08097 3.73705 4.65326 3.5 5.25 3.5H8.75ZM18.75 3.5C19.3467 3.5 19.919 3.73705 20.341 4.15901C20.7629 4.58097 21 5.15326 21 5.75V9.25C21 9.84674 20.7629 10.419 20.341 10.841C19.919 11.2629 19.3467 11.5 18.75 11.5H15.25C14.6533 11.5 14.081 11.2629 13.659 10.841C13.2371 10.419 13 9.84674 13 9.25V5.75C13 5.15326 13.2371 4.58097 13.659 4.15901C14.081 3.73705 14.6533 3.5 15.25 3.5H18.75Z"
                  fill="#6C7275"
                />
              </svg>
            </button>
            <button className="border border-gray-500 p-[11px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M13 15.75C13 15.1533 13.2371 14.581 13.659 14.1591C14.081 13.7371 14.6533 13.5 15.25 13.5L18.75 13.5C19.3467 13.5 19.919 13.7371 20.341 14.1591C20.7629 14.581 21 15.1533 21 15.75L21 19.25C21 19.8468 20.7629 20.4191 20.341 20.841C19.919 21.263 19.3467 21.5 18.75 21.5L15.25 21.5C14.6533 21.5 14.081 21.263 13.659 20.841C13.2371 20.4191 13 19.8468 13 19.25L13 15.75ZM13 5.75005C13 5.15331 13.2371 4.58101 13.659 4.15906C14.081 3.7371 14.6533 3.50005 15.25 3.50005L18.75 3.50005C19.3467 3.50005 19.919 3.7371 20.341 4.15906C20.7629 4.58101 21 5.15331 21 5.75005L21 9.25004C21 9.84678 20.7629 10.4191 20.341 10.841C19.919 11.263 19.3467 11.5 18.75 11.5L15.25 11.5C14.6533 11.5 14.081 11.263 13.659 10.841C13.2371 10.4191 13 9.84678 13 9.25005L13 5.75005ZM3 15.75C3 15.1533 3.23705 14.581 3.65901 14.1591C4.08097 13.7371 4.65326 13.5 5.25 13.5L8.75 13.5C9.34674 13.5 9.91903 13.7371 10.341 14.1591C10.7629 14.581 11 15.1533 11 15.75L11 19.25C11 19.8468 10.7629 20.4191 10.341 20.841C9.91903 21.263 9.34674 21.5 8.75 21.5L5.25 21.5C4.65326 21.5 4.08097 21.263 3.65901 20.841C3.23705 20.4191 3 19.8468 3 19.25L3 15.75ZM3 5.75005C3 5.15331 3.23705 4.58101 3.65901 4.15906C4.08097 3.7371 4.65326 3.50005 5.25 3.50005L8.75 3.50005C9.34674 3.50005 9.91903 3.7371 10.341 4.15906C10.7629 4.58101 11 5.15331 11 5.75005L11 9.25005C11 9.84678 10.7629 10.4191 10.341 10.841C9.91903 11.263 9.34674 11.5 8.75 11.5L5.25 11.5C4.65326 11.5 4.08097 11.263 3.65901 10.841C3.23705 10.4191 3 9.84678 3 9.25005L3 5.75005Z"
                  fill="#6C7275"
                />
                <path
                  d="M6 21.5L6 13.502L18 13.502L18 21.5L6 21.5Z"
                  fill="#6C7275"
                />
                <path
                  d="M6 11.4981L6 3.50005L18 3.50005L18 11.4981L6 11.4981Z"
                  fill="#6C7275"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* -----------------PRODUCT LIST------------------------------- */}
        <div className="flex-col mt-[40px] ml-[24px] mx-auto">
          <div>
            {/* -----------Row 1-------------- */}
            {/* <ul className="flex justify-around flex-wrap  gap-[55px] lg:w-[900px]">
              {products.map((product) => (
                <Productcard key={product.id} product={product} />
              ))}
            </ul> */}
            <ul className="flex justify-around flex-wrap gap-[55px] lg:w-[900px]">
              {/* {console.log("product length", products.length)} */}
              {filteredProducts.map((product) => (
                <Productcard key={product.id} product={product} />
              ))}
            </ul>
          </div>
          {/* --------------------2nd row-------------------- */}
          <div className="flex mt-[52px]">
            <ul className="flex"></ul>
          </div>
          {/* ----------------3rd row------------------------------ */}
          <div className="flex mt-[52px]">
            <ul className="flex"></ul>
          </div>
        </div>
        <div className="flex item justify-center mt-[5px] w-[163px] h-[40px] mx-auto rounded-full border border-black">
          <button
            className="  text-[15px] font-semibold leading-[28px] tracking-[-0.4px]"
            style={{ fontFamily: "Inter" }}
          >
            Show More
          </button>
        </div>
        {/* make 3 buttons for category */}
        <div className="flex justify-around">
          <button
            onClick={handleJewelery}
            className="p-2 rounded-full text-white bg-blue-600"
          >
            jewelery
          </button>
          <button
            onClick={handleElectronics}
            className="p-2 rounded-full text-white bg-blue-600"
          >
            electronics
          </button>
          <button
            onClick={handleMensClothing}
            className="p-2 rounded-full text-white bg-blue-600"
          >
            men's clothing
          </button>
          <button
            onClick={handleWomensClothing}
            className="p-2 rounded-full text-white bg-blue-600"
          >
            women's clothing
          </button>
        </div>
      </div>
    </div>
  );
}
