import Image from 'next/image'
import React from 'react'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter"
export default function Productcarousel() {
  return (
    <div>
      <div className=' flex  items-center overflow-x-auto lg:mx-auto w-[1120px] mx-[16px] sm:mx-auto'>
        <p className=' text-black font-semibold text-2xl leading-[44px] tracking-tight' style={{fontFamily:"poppins"}}>
          New Arrivals
        </p>
          <span className=' text-base font-medium leading-7 tracking-tight ml-auto' style={{fontFamily:"inter"}}>
            <a>More Products</a></span>        
      </div>
      <div className='flex'>
        <div className='flex lg:mx-auto w-[1120px] mx-[16px] overflow-x-auto'>
          <ul className='flex'>
            {/* New arrival list item 1 */}
            <li>
              <div className=' flex justify-start gap-4 relative w-[300px] h-[360px]'>
              <Image
              src="/productitem1.svg"
              alt="bedroom image"
              width="262"
              height="349"
              />
              <div className=' absolute bottom-[16px] left-[-20px] w-full text-center'>
              <button className=' bg-black font-medium leading-[25px] tracking-[0.4px]
               w-[230px] h-[46px] text-white px-[24px] py-[8px] rounded shadow-sm' style={{fontFamily:"inter"}}>
                Add to cart</button>
              </div>
              {/* NEW  50%*/}
              <div className='absolute top-[16px] left-[16px] '>

                  <p className=' text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-white'
                  style={{fontFamily:"inter"}}>NEW</p>
                  <p  className=' text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-green-600 text-white'
                  style={{fontFamily:"inter"}}>-50%</p>
                
              </div>

              
              </div>

{/* Ratings */}
<div class="flex flex-row-reverse justify-end items-center">
  <input id="hs-ratings-readonly-1" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-1" value="1" />
  <label for="hs-ratings-readonly-1" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-2" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-1" value="2" />
  <label for="hs-ratings-readonly-2" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-3" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-1" value="3" />
  <label for="hs-ratings-readonly-3" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-4" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-1" value="4" />
  <label for="hs-ratings-readonly-4" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-5" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-1" value="5" />
  <label for="hs-ratings-readonly-5" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  {/* ratings end */}
  
  {/* PRICE AND NAME */}
  
</div>
<div>
  <p className=' text-base font-semibold leading-6' style={{fontFamily:"inter"}}>Loveseat Sofa</p>
  <p className=' text-sm font-semibold leading-5' style={{fontFamily:"inter"}}>$199.00<span className=' decoration-[#6C7275]  text-[#6C7275] line-through pl-[12px] ' 
  style={{fontFamily:"inter"}}>$400.00</span></p>
</div>
            </li>
            {/* New arrival list item 2 */}
            <li>
              <div className=' flex justify-start
               relative w-[300px] h-[360px]'>
              <Image
              src="/productitem2.svg"
              alt="bedroom image"
              width="262"
              height="349"
              />
              {/* ADD to cart Button */}
              <div className='absolute bottom-[16px] left-[-20px] w-full text-center'>
              <button className=' bg-black font-medium leading-[25px] tracking-[0.4px]
               w-[230px] h-[46px] text-white px-[24px] py-[8px] rounded shadow-sm'style={{fontFamily:"inter"}}>
                Add to cart</button>
              </div>
               <div className='absolute top-[16px] left-[16px] '>

                  <p className=' text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-white'
                  style={{fontFamily:"inter"}}>NEW</p>
                  <p  className=' text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-green-600 text-white'
                  style={{fontFamily:"inter"}}>-50%</p>
                
              </div>
              </div>
              <div class="flex flex-row-reverse justify-end items-center">
  <input id="hs-ratings-readonly-1-2" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-2" value="1" />
  <label for="hs-ratings-readonly-1-2" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-2-2" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-2" value="2" />
  <label for="hs-ratings-readonly-2-2" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-3-2" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-2" value="3" />
  <label for="hs-ratings-readonly-3-2" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-4-2" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-2" value="4" />
  <label for="hs-ratings-readonly-4-2" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-5-2" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-2" value="5" />
  <label for="hs-ratings-readonly-5-2" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  {/* ratings end */}
  
  {/* PRICE AND NAME */}
  
</div>
<div>
  <p className=' text-base font-semibold leading-6' style={{fontFamily:"inter"}}>Table Lamp</p>
  <p className=' text-sm font-semibold leading-5' style={{fontFamily:"inter"}}>$24.99</p>
</div>
            </li>
            {/* New arrival list item3 */}
            <li>
              <div className=' flex justify-start relative w-[300px] h-[360px]'>
              <Image
              src="/productitem3.svg"
              alt="bedroom image"
              width="262"
              height="349"
              />
              <div className='absolute bottom-[16px] left-[-20px] w-full text-center'>
              <button className=' bg-black font-medium leading-[25px] tracking-[0.4px]
               w-[230px] h-[46px] text-white px-[24px] py-[8px] rounded shadow-sm' style={{fontFamily:"inter"}}>
                Add to cart</button>
              </div>
               <div className='absolute top-[16px] left-[16px] '>

                  <p className=' text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-white'
                  style={{fontFamily:"inter"}}>NEW</p>
                  <p  className=' text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-green-600 text-white'
                  style={{fontFamily:"inter"}}>-50%</p>
                
              </div>
              </div>
              {/* RATINGS */}
  <div class="flex flex-row-reverse justify-end items-center">
  <input id="hs-ratings-readonly-1-3" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-3" value="1" />
  <label for="hs-ratings-readonly-1-3" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-2-3" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-3" value="2" />
  <label for="hs-ratings-readonly-2-3" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-3-3" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-3" value="3" />
  <label for="hs-ratings-readonly-3-3" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-4-3" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-3" value="4" />
  <label for="hs-ratings-readonly-4-3" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-5-3" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-3" value="5" />
  <label for="hs-ratings-readonly-5-3" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  {/* ratings end */}
  
  {/* PRICE AND NAME */}
  
</div>
<div>
  <p className=' text-base font-semibold leading-6' style={{fontFamily:"inter"}}>Beige Table Lamp</p>
  <p className=' text-sm font-semibold leading-5' style={{fontFamily:"inter"}}>$24.99</p>
</div>
            </li>
            {/* New arrival list item4 */}
            <li>
              <div className=' flex justify-start relative w-[300px] h-[360px]' >
              <Image
              src="/productitem4.svg"
              alt="bedroom image"
              width="262"
              height="349"
              />
              <div className='absolute bottom-[16px] left-[-20px] w-full text-center'>
              <button className=' bg-black font-medium leading-[25px] tracking-[0.4px]
               w-[230px] h-[46px] text-white px-[24px] py-[8px] rounded shadow-sm'style={{fontFamily:"inter"}}>
                Add to cart</button>
              </div>
               <div className='absolute top-[16px] left-[16px] '>

                  <p className=' text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-white'
                  style={{fontFamily:"inter"}}>NEW</p>
                  <p  className=' text-[16px] font-bold leading-[16px] uppercase py-[4px] px-[14px] rounded bg-green-600 text-white'
                  style={{fontFamily:"inter"}}>-50%</p>
                
              </div>
              </div>
               {/* RATINGS */}
  <div class="flex flex-row-reverse justify-end items-center">
  <input id="hs-ratings-readonly-1-4" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-4" value="1" />
  <label for="hs-ratings-readonly-1-4" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-2-4" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-4" value="2" />
  <label for="hs-ratings-readonly-2-4" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-3-4" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-4" value="3" />
  <label for="hs-ratings-readonly-3-4" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-4-4" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-4" value="4" />
  <label for="hs-ratings-readonly-4-4" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  <input id="hs-ratings-readonly-5-4" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly-4" value="5" />
  <label for="hs-ratings-readonly-5-5" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </label>
  {/* ratings end */}
  
  {/* PRICE AND NAME */}
  
</div>
<div>
  <p className=' text-base font-semibold leading-6' style={{fontFamily:"inter"}}>Bamboo basket</p>
  <p className=' text-sm font-semibold leading-5' style={{fontFamily:"inter"}}>$24.99</p>
</div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}
