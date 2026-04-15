'use client'
import React, { useMemo, useState } from 'react'
import SwipeableItem from './SwipeableItem.js'
import { ChevronLeft } from 'lucide-react';

const Cart = () => {
    const items = [
        {name: "premium Tagerine Shirt", image: '/images/ProductImage.png' ,color: "Yellow", size: "8", qty: 1, price: 257.85},
        {name: "Leather Tagerine Coart", image: '/images/ProductImage2.png' ,color: "Yellow", size: "8", qty: 1, price: 257.85},
    ]

    const total = useMemo(() => {
        return items.reduce((sum, item) => {
        return sum + item.price * item.qty;
        }, 0);
    }, [items]);

    const [delFee, setDelFee] = useState(10)
  return (
    <div className='mx-8 mt-5'>
        <div className='mb-5 flex items-center'>
            <button className=''>
                <ChevronLeft className='w-8 h-8'/>
            </button>
            <div className='text-[18px] font-imprima pl-30'>
                Cart
            </div>
        </div>
        <h1 className='text-[42px] font-bold font-imprima'>My Orders</h1>
        <div>
            {items.map((item, idx) => (
                <SwipeableItem key={idx} item={item} />
            ))}
        </div>
        <div className='mt-8'>
            <div className='flex justify-center'>
                <hr className='w-[90%] text-[#E3E3E3]'/>
            </div>
            <div className='mt-7 flex flex-col gap-y-4'>
                <div className='flex justify-between'>
                    <p className='text-[#797780] text-[18px] font-imprima'>Total items ({items.length})</p>
                    <p className='text-black font-bold text-[18px] font-imprima'>${total}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-[#797780] text-[18px] font-imprima'>Standard Delivery</p>
                    <p className='text-black font-bold text-[18px] font-imprima'>${delFee}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-[#797780] text-[18px] font-imprima'>Total Payment</p>
                    <p className='text-black font-bold text-[18px] font-imprima'>${total + delFee}</p>
                </div>
            </div>
            <div className='my-8 flex justify-center'>
                <button type="button" className="text-body w-[192px] bg-[#FF7A00] box-border border border-[#FF7A00] shadow-xs font-medium leading-5 rounded-full font-imprima text-sm px-4 py-5 text-white text-[18px]">Checkout Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cart