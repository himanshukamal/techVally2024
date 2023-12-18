import React, { useState } from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import Image from "next/image";
import { Poppins } from "next/font/google";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import { useRouter } from "next/router";
// import "@fontsource/inter/400-italic.css"; // Specify weight and style

export default function Signin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    console.log("Logging in...");
    // if (password === "lalitapassword") {
    router.push("/home");
    // }
  };
  return (
    <div className="flex flex-wrap items-start mb-8">
      {/* Image and Form div */}
      <div className="md:w-[42vw] bg-gray-100 md:h-screen">
        <Image
          src="/login.png"
          width="600"
          height="832"
          alt="signinImage"
          className="md:pl-[5em]"
        />
      </div>
      {/* <Image src="/logo.png"alt="logo"width="150"  height="80" position="relative"/> */}
      <div className=" flex self-center md:w-[58vw] ">
        <div className=" w-[456px] mt-10">
          <form className="space-y-8 ">
            <label
              className=" text-[40px] not-italic font-medium leading-44 tracking-[-0.4px]"
              style={{ fontFamily: "Poppins" }}
            >
              Sign In
            </label>
            <br />
            <p
              className="text-[16px] not-italic font-normal decoration-gray-600 mt-[24px] leading-[26px] "
              style={{ fontFamily: "Inter" }}
            >
              Don’t have an account yet?
              <span>
                <a
                  href="#"
                  className=" text-green-600 text-[16px] not-italic leading-26 font-semibold"
                >
                  Sign Up
                </a>
              </span>
            </p>
            <div>
              <input
                type="text"
                value={email}
                onChange={handleEmail}
                id="username"
                placeholder="Your username or email address"
                className=" text-[16px] not-italic w-[456px] leading-26 font-normal mb-8 border border-grey p-2"
              ></input>
              <br />
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                id="password"
                placeholder="Password"
                className=" decoration-gray-600 w-[456px] leading-26 font-normal mb-8 border border-grey p-2"
              ></input>
              <br />
            </div>
            <div className=" flex justify-between space-x-1">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="checkbox"
                  className=" w-[24px] h-[24px] text-16 leading-26 flex items-center"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="font-semibold">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-[456px] p-[10px] px-[40px] bg-black text-white rounded-lg"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
