import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import Productloop from "@/components/productloop";
import { useRouter } from "next/router";

export default function Productdetails() {
  const router = useRouter();

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
      <div>
        <Header />
        <Productloop />
      </div>
    </div>
  );
}
