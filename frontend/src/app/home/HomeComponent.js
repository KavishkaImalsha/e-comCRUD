'use client'
import React from 'react'
import { LayoutPanelLeft, House, ShoppingBasket, Search, Settings } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'

const Home = ({products}) => {
  return (
    <>
      <div className='mx-8 mt-5'>
        <div className='mb-5 flex items-center'>
            <Link href='/home' >
                <LayoutPanelLeft className='w-8 h-8'/>
            </Link>
            <div className='text-[18px] font-imprima pl-30'>
                Home
            </div>
        </div>
        <div className='font-imprima w-[172px] h-[62px]'>
          <p className='text-[36px] font-bold'>Explore</p>
          <p className='text-[18px] text-[#797780]'>Best trendy collection!</p>
        </div>
        <div className='mt-10'>
          <button type="button" className="text-body w-12 bg-[#FF7A00] box-border border border-[#FF7A00] shadow-xs font-medium leading-5 rounded-full text-sm p-3 text-white text-[10px]">ALL</button>
        </div>
        <div className='grid grid-cols-2 mt-5'>
          {products.data.map((item, key) => (
            <Link
              href={`/details/${item._id}`} 
              key={item._id}
            >
                <div key={key}>
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={154}
                    className="rounded-lg object-cover"
                  />  
                </div>
                <div>
                  <p className='text-[20px] font-imprima font-bold'>${item.price.toFixed(2)}</p>
                  <p className='text-[16px] font-imprima text-[#797780]'>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-4 flex justify-between items-center z-50'>
          <Link
            href='/home'
          >
            <House className='w-10 h-10'/>
          </Link>

          <Link
            href='/cart'
          >
            <ShoppingBasket className='w-10 h-10'/>
          </Link>

          <Link
            href='/home'
          >
            <Search className='w-10 h-10'/>
          </Link>
          
          <Link
            href='/home'
          >
            <Settings className='w-10 h-10'/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home