import Banner from '@/components/banner'
import Header from '@/components/header'
import Homecarousel from '@/components/homecarousel'
import Homepagesection2 from '@/components/homepagesection2'
import Productcarousel from '@/components/productcarousel'
import Values from '@/components/values'
import React from 'react'

export default function home() {
  return (
    <div>
        <Header/>
        <Homecarousel/>
        <div className=' mt-[217px] max-w-[1120px] mx-auto'>
          <Homepagesection2/>
        </div>
        <div className='max-w-[1120px] mx-auto'>
        <Productcarousel/>
        </div>
        <div className='mt-[48px] mb-[48px] max-w-[1120px] mx-auto'>
        <Values/>
        </div>
        <div className='ml-auto'>
          <Banner/>
        </div>
        
        
      
    </div>
  )
}
