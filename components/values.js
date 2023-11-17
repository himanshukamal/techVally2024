import React from 'react'
import Image from 'next/image'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
export default function Values() {
  return (
    <div>
      <div className='flex flex-wrap justify-between '>
​
{/* CARD 1 */}
<div className='bg-[#F3F5F7] w-full  max-w-[262px] max-h-[220px] h-auto'>
  <div className='pb-[16px] px-[32px] pt-[48px]'>
    {/* Content of Card 1 */}
    <Image
      src="/fast delivery.svg"
      alt="fastdelivery"
      width="48"
      height="48"
    />
  </div>
  <div className='text-base font-semibold leading-7 pl-[32px]' style={{ fontFamily: "poppins" }}>
    <p>Free Shipping</p>
  </div>
  <div className='pl-[32px] pb-[48px] text-[#6C7275] text-sm font-normal leading-6' style={{ fontFamily: "poppins" }}>
    <p>Order above $200</p>
  </div>
</div>
​
{/* CARD 2 */}
<div className='bg-[#F3F5F7] w-full sm:w-[48%] max-w-[262px] max-h-[220px] h-auto'>
  <div className='pb-[16px] px-[32px] pt-[48px]'>
    {/* Content of Card 2 */}
    <Image
      src="/money.svg"
      alt="fastdelivery"
      width="48"
      height="48"
    />
  </div>
  <div className='text-base font-semibold leading-7 pl-[32px]' style={{ fontFamily: "poppins" }}>
    <p>Money-back</p>
  </div>
  <div className='pl-[32px] text-[#6C7275] text-sm font-normal leading-6' style={{ fontFamily: "poppins" }}>
    <p>30 days guarantee</p>
  </div>
</div>
​
{/* CARD 3 */}
<div className='bg-[#F3F5F7] w-full  max-w-[262px] max-h-[220px] h-auto'>
  <div className='pb-[16px] px-[32px] pt-[48px]'>
    {/* Content of Card 3 */}
    <Image
      src="/lock 01.svg"
      alt="fastdelivery"
      width="48"
      height="48"
    />
  </div>
  <div className='text-base font-semibold leading-7 pl-[32px]' style={{ fontFamily: "poppins" }}>
    <p>Secure Payments</p>
  </div>
  <div className='pl-[32px] text-[#6C7275] text-sm font-normal leading-6' style={{ fontFamily: "poppins" }}>
    <p>Secured by Stripe</p>
  </div>
</div>
​
{/* CARD 4 */}
<div className='bg-[#F3F5F7] w-full  max-w-[262px] max-h-[220px] h-auto'>
  <div className='pb-[16px] px-[32px] pt-[48px]'>
    {/* Content of Card 4 */}
    <Image
      src="/call.svg"
      alt="fastdelivery"
      width="48"
      height="48"
    />
  </div>
  <div className='text-base font-semibold leading-7 pl-[32px]' style={{ fontFamily: "poppins" }}>
    <p>24/7 Support</p>
  </div>
  <div className='pl-[32px] text-[#6C7275] text-sm font-normal leading-6' style={{ fontFamily: "poppins" }}>
    <p>Phone and Email support</p>
  </div>
</div>
​
</div>
    </div>
  )
}
