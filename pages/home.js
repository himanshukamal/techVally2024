import Banner from "@/components/banner";
import Header from "@/components/header";
import Homecarousel from "@/components/homecarousel";
import Homepagesection2 from "@/components/homepagesection2";
import LineChart from "@/components/lineChart";
import Productcarousel from "@/components/productcarousel";
import Values from "@/components/values";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   const myEmail = localStorage.getItem("email");
  //   const myPassword = localStorage.getItem("password");
  //   console.log("email in Header", myEmail);
  //   console.log("password in header", myPassword);
  //   if (!myPassword) {
  //     router.push("/signin");
  //   }
  // }, []);
  useEffect(() => {
    const handleStorageChange = () => {
      const myPassword = localStorage.getItem("password");
      if (!myPassword) {
        router.replace("/signin");
      }
    };

    // Attach storage event listener
    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [router]);

  return (
    <div>
      <Header />
      <Homecarousel />
      <div className=" mt-[217px] max-w-[1120px] mx-auto">
        <Homepagesection2 />
      </div>
      <div className="max-w-[1120px] mx-auto">
        <Productcarousel />
      </div>
      <div className="mt-[48px] mb-[48px] max-w-[1120px] mx-auto">
        <Values />
      </div>
      <div className="ml-auto">{/* <Banner /> */}</div>
    </div>
  );
}
