import React from 'react'
import Image from 'next/image'
import "@fontsource/inter"
import "@fontsource/poppins"
import { BiArrowBack } from "react-icons/bi";
export default function Banner() {
  return (
    <div>
    <div className='flex'>
        {/* BANNER IMAGE SECTION */}
      <div>
        <Image
            src="/saleup.svg"
            width="720"
            height="532"
            alt="saleup"
        />
      </div>
{/* ---------------RIGHT SIDE-------------------------------- */}
    <div className=' grid  content-center gap-4 w-720 h-532 bg-[#F3F5F7] '>
      <div className='ml-[72px]'>
        <p className=' text-[#377DFF] text-[16px] font-bold leding-[16px]' 
        style={{fontFamily:"inter"}}>SALE UP TO 35% OFF</p>
      </div>
      <div className='ml-[72px]'>
        <p className='text-[#141718] text-[40px] font-semibold leading-[44px] tracking-[-0.4px]' 
        style={{fontFamily:"poppins"}}>HUNDREDS of </p>
        <p className='text-[#141718] text-[40px] font-semibold leading-[44px] tracking-[-0.4px]' 
        style={{fontFamily:"poppins"}}>New lower prices!</p>
      </div>
      <div className=' ml-[72px]'>
        <p className=' text-[20px] leading-[32px] font-normal'
        style={{fontFamily:"inter"}}>It’s more affordable than ever to give every room in your home a stylish makeover</p>
      </div>
      <div className='  flex  ml-[72px]'>
        <div className=' mt-[9px]'>
            <p>Shop Now</p>
        </div>
        <div className='mt-[12px] rotate-180'>
            <BiArrowBack size="20px"/>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
