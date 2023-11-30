import Header from '@/components/header'
import Header2 from '@/components/header2'
import Plpageheader from '@/components/plpageheader'
import Productsidebar from '@/components/productsidebar'
import Products from '@/components/productsidebar'
import Productsmain from '@/components/productsmain'

import React from 'react'

export default function Productlist() {
  return (
    <div>
        <div className>
            <Header/>
        </div>
        <div className='max-w-[1120px] mx-auto'>
          <Plpageheader/>
        </div>
        <div className=' flex mt-[60px] max-w-[1120px] mx-auto'>
          <div className=' max-w-[262px] h-auto'> 
            <Productsidebar/>
          </div>
          <div className=' max-w-[858px] mr-auto'>
            <Productsmain/>
          </div>
         
        </div>
        
    </div>
  )
}

