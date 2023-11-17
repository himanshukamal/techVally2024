import React from 'react'
import Image from 'next/image';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import { Poppins } from 'next/font/google';
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight

export default function signup() {
  return (
    <div className='flex '>
        <div className=' h-[600px]'>
        <Image src="/login.png" alt="login" width="607" height="500" className='object-contain'/> 
        </div>
      <div className='flex items-center ml-[83px]'>
        <div>
          <form>
            <label className=' text-4xl font-medium leading-[44px]'style={{fontFamily:"Poppins"}}>Sign Up</label>
            <p className="text-[16px] mt-[20px] text-gray-600 font-semibold leading-[26px] normal-font-style" style={{fontFamily:"Inter"}}>Already have an account
            <span><a className=' text-green-600 text-[16px]' href='#'>Sign In</a></span></p>

          {/* Text inputs Div NAME,USERNAME,EMAIL,PASSWORD */}
              <div className='flex flex-col'>
                <input type='text' id='name' placeholder='Your name' className='w-[456px] leading-26 font-semibold mb-8 border border-grey p-2'></input>
                <input type='text' id='username' placeholder='User name' className='w-[456px] leading-26 font-semibold mb-8 border border-grey p-2'></input>
                <input type='email' id='email' placeholder='Email address' className='w-[456px] leading-26 font-semibold mb-8 border border-grey p-2'></input>
                <input type='password' id='password' placeholder='Your name' className='w-[456px] leading-26 font-semibold mb-8 border border-grey p-2'></input>
              </div>
          {/* I agree with Privacy Policy and Terms of Use */}
              <div>
              <p><input type='checkbox' id='checkbox'/>
               I agree with <span>Privacy Policy </span>and <span>Terms of Use</span></p>
              </div>
          {/* -----------------SIGN UP BUTTON-------------------------------- */}
              <div>
              <button type="submit" className='w-[456px] p-[10px] px-[40px] bg-black text-white rounded-lg'>Sign Up</button>
              </div>
          </form>
        </div>
      
      </div>
    </div>
  )
}
