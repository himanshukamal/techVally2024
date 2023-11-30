import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '@fontsource/inter'
import'@fontsource/poppins'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function Plpageheader() {
  return (
    <div>
        <div className=' flex justify-center relative'>
            <Image
            src="/shop-page.svg"
            alt="shoppage"
            width="1120"
            height="392"
            
            />
            <div className=' flex flex-col  items-center  absolute mt-[115px]'>
            <div className=' flex'>
                <div>
                <Link className=' text-[14px] font-medium leading-[24px] text-[#605F5F]' 
                style={{fontFamily:"inter"}} href="#">Home</Link>
                </div>
                <div className=' pt-[7px] pr-[16px]'>
                <IoIosArrowForward size="12px"/>
                </div>
                <div>
                <Link href="#" className='text-[14px] font-medium leading-[24px]'>Shop</Link>
                </div>
               
            </div>
            <div className='my-[24px]'>
                <p className=' text-[54px]  font-semibold leading-[58px] tracking-[-1px]'
                style={{fontFamily:"poppins"}}
                >Shop Page</p>
            </div>
            <div>
                <p className='text-[20px] font-normal leading-[32px]'
                style={{fontFamily:"inter"}}>
                Let’s design the place you always imagined.
                </p>
            </div>
            </div>
            
           
            
        </div>
      
    </div>
  )
}
