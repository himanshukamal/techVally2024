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
        <div>
            <Header/>
        </div>
        <div className=' flex max-w-[1120px] mx-auto'>
          <Plpageheader/>
        </div>
        <div className=' flex mt-[65px] max-w-[1120px] mx-auto'>
        <Productsidebar/>
        <Productsmain/>
       
            
           
        </div>
        
    </div>
  )
}

