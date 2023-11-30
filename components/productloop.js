import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import { BiArrowBack } from "react-icons/bi";
import '@fontsource/poppins'
import'@fontsource/inter'
export default function Productloop() {
  return (
    <div>
  <div className='max-w-[1120px] mx-auto'>
    <div className='flex mb-[16px]'>
      <p className='text-[16px] font-medium leading-[24px] text-[#605F5F] pr-[4px]' style={{ fontFamily: "inter" }}>Home</p>
      <div className='pt-[7px] pr-[16px]'>
        <IoIosArrowForward size="12px" />
      </div>
      <p className='text-[16px] font-medium leading-[24px] text-[#605F5F] pr-[4px]' style={{ fontFamily: "inter" }}>Shop</p>
      <div className='pt-[7px] pr-[16px]'>
        <IoIosArrowForward size="12px" />
      </div>
      <p className='text-[16px] font-medium leading-[24px] text-[#605F5F] pr-[4px]' style={{ fontFamily: "inter" }}>Living Room</p>
      <div className='pt-[7px] pr-[16px]'>
        <IoIosArrowForward size="12px" />
      </div>
      <p className='text-[16px] font-medium leading-[24px] text-[#121212] pr-[4px]' style={{ fontFamily: "inter" }}>Product</p>
    </div>
  </div>

  {/* --------------TRAY IMAGE--------------- */}
  <div className='relative max-w-[1120px] mx-auto'>
    <Image
      src='/blacktray-big.svg'
      width='548'
      height='729'
    />

    {/* ----------------------NEW,50%--------------------- */}
    <div className='absolute top-[16px] left-[16px] '>
      <p className='text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-white' style={{ fontFamily: "inter" }}>NEW</p>
      <p className='text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-green-600 text-white' style={{ fontFamily: "inter" }}>-50%</p>
    </div>

    {/* ----------------Arrow--------------------------------------- */}
    <div className='absolute top-[50%] left-2 '>
      <div className='w-[52px] h-[52px] p-[15px] bg-white rounded-full text-center'>
        <BiArrowBack size='xl' />
      </div>
    </div>
    <div className='absolute top-[50%] right-[580px]'>
      <div className='w-[52px] h-[52px] p-[15px] bg-white rounded-full text-center rotate-180'>
        <BiArrowBack size='xl' />
      </div>
    </div>
  </div>

  {/* -----------------TRAY TABLE REVIEW SECTION--------------------------- */}
  <div className='flex-col absolute mt-[100px] ml-[64px] top-0 right-[160px]'>
    <div className='flex'>
      <p className='text-[40px] font-semibold leading-[44px tracking-[-0.4px]' style={{ fontFamily: "poppins" }}>Tray Table</p>
    </div>
    <div className='my-[16px]'>
      <p className='text-[16px] font-normal leading-[26px] max-w-[508px] h-[78px] text-[#6C7275]'>
        Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with a removable tray top, handy for serving snacks.
      </p>
    </div>
    <div className='mb-[48px]'>
      <p className='text-[28px] font-medium leading-[34px] tracking-[-0.6px]'>$199.00
        <span className='text-[20px] text-[#6C7275] font-medium pl-[12px] line-through'>$400.00</span>
      </p>
    </div>

    {/*  --------OFFER EXPIRES IN---------------- */}
    <div className='absolute bottom-0'>
      <p className=' text-[16px] font-normal leading-[26px]'
      style={{fontFamily:"inter"}}>
        Offer expires in:</p>
    </div>
    <div className='  flex absolute my-[24px]'>
       <div className=' flex flex-col items-center w-[60px] h-[60px] bg-[#F3F5F7] mr-[16px]'>
        <p className=' text-[34px] font-medium leading-[38px tracking-[-0.6px]'
         style={{fontFamily:"poppins"}}>02</p>
        <p>Days</p>
       </div>

       <div className=' flex flex-col items-center w-[60px] h-[60px] bg-[#F3F5F7] mr-[16px]'>
        <p className=' text-[34px] font-medium leading-[38px tracking-[-0.6px]'
         style={{fontFamily:"poppins"}}>12</p>
        <p>Hours</p>
       </div>

       <div className=' flex flex-col items-center w-[60px] h-[60px] bg-[#F3F5F7] mr-[16px]'>
        <p className=' text-[34px] font-medium leading-[38px tracking-[-0.6px]'
         style={{fontFamily:"poppins"}}>45</p>
        <p>Minutes</p>
       </div>

       <div className=' flex flex-col items-center w-[60px] h-[60px] bg-[#F3F5F7]'>
        <p className=' text-[34px] font-medium leading-[38px tracking-[-0.6px]'
         style={{fontFamily:"poppins"}}>05</p>
        <p>Seconds</p>
       </div>

    </div>

    {/* --------------MEASUREMENTS-------------- */}
    <div className=' absolute mt-[120px]'>
      <p className=' text-[16px] font-semibold leading-[26px] text-[#6C7275]
       ' style={{fontFamily:"inter"}}>Measurements</p>
      <p className=' text-[20px] font-normal leading-[32px]'
       style={{fontFamily:"inter"}}>17 1/2x20 5/8 "</p>
    </div>

    {/* ----------------CHOOSE COLOR----------- */}
    <div className=' flex absolute mt-[184px]'>
      <p className=' text-[16px] font-semibold leading-[26px] pr-[4px] text-[#6C7275]'>Choose Color</p>
      <div className='pt-[7px]'>
      <IoIosArrowForward size="12px" />
      </div>
      
    </div>
    <div className='absolute mt-[210px]'>
      <p className=' text-[20px] font-normal leading-[32px]'
       style={{fontFamily:"inter"}}>Black</p>
    </div>

  {/* ----------------TRAY COLOR OPTIONS--------------- */}
  <div className='flex absolute  gap-[16px] mt-[260px]'>
    <Image 
    src="/black-tray.svg"
    width="72"
    height="72"
    />
    <Image 
    src="/grey-tray.svg"
    width="72"
    height="72"
    />
    <Image 
    src="/red-tray.svg"
    width="72"
    height="72"
    />
    <Image 
    src="/faded-tray.svg"
    width="72"
    height="72"
    />
  </div>

{/* -----------PRODUCT CART----------------- */}
{/* -------------PRODUCT COUNT-------------- */}
  <div className=' flex mt-[350px] absolute'>
    <div className=' flex  justify-around items-center  absolute w-[127px] h-[52px]  bg-[#F5F5F5]'>
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4.03711 10H15.7038" stroke="#121212" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
        <p>1</p>
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4691 4.16666C10.4691 3.90777 10.2592 3.69791 10.0003 3.69791C9.74144 3.69791 9.53158 3.90777 9.53158 4.16666V9.53124H4.16699C3.90811 9.53124 3.69824 9.74111 3.69824 9.99999C3.69824 10.2589 3.90811 10.4687 4.16699 10.4687H9.53158V15.8333C9.53158 16.0922 9.74144 16.3021 10.0003 16.3021C10.2592 16.3021 10.4691 16.0922 10.4691 15.8333V10.4687H15.8337C16.0925 10.4687 16.3024 10.2589 16.3024 9.99999C16.3024 9.74111 16.0925 9.53124 15.8337 9.53124H10.4691V4.16666Z" fill="#121212"/>
        </svg>
    </button>
    
    </div>

    <button>
      Wishlist
    </button>
  </div>
  </div>
</div>
  )
}