'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, Bookmark } from 'lucide-react';
import Link from 'next/link';

const Details = ({product}) => {
    const [selectedColor, setSelectedColor] = useState(product.data.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.data.size[0])
    console.log(product);
  return (
    <>
        <div>
            <div className='mb-5 mx-5 flex items-center justify-between'>
                <Link href='/home'>
                    <ChevronLeft className='w-8 h-8'/>
                </Link>
                <div className='text-[18px] font-imprima'>
                    Details
                </div>
                <button>
                    <Bookmark className='w-6 h-6'/>
                </button>
            </div>
            <div className='flex justify-center'>
                <Image
                    src={product.data.image}
                    alt="Logo"
                    width={375}
                    height={400}
                />
            </div>
            <div className='mx-6 my-3'>
                <div className='flex'>
                    <h1 className='text-[30px] font-imprima font-semibold'>
                        Premium Tagerine Shirt
                    </h1>
                    <div className="flex gap-4 p-4">
                    {product.data.colors.map((color, key) => (
                        <button
                        key={key}
                        onClick={() => setSelectedColor(color)}
                        className={`
                            w-8 h-8 rounded-full transition-all duration-200 
                            bg-${color}-500
                            ${selectedColor === color 
                            ? 'ring-2 ring-offset-2 ring-blue-400 scale-110' 
                            : 'hover:scale-105 opacity-80 hover:opacity-100'}
                        `}
                        aria-label={`Select ${color} color`}
                        />
                    ))}
                    </div>
                </div>
                <div className='my-4 w-full'>
                    <h1 className='text-[24px] font-imprima font-extrabold'>Size</h1>
                    <div className="flex gap-6 p-2">
                    {product.data.size.map((size) => (
                        <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`
                            w-12 h-12 rounded-lg font-bold transition-all duration-200
                            ${selectedSize === size 
                            ? 'bg-black text-white border-black' 
                            : 'bg-white text-[#797780]'}
                        `}
                        >
                        {size}
                        </button>
                    ))}
                    </div>
                    <div className='flex justify-between my-2'>
                        <span className='w-[120px] h-[36px] font-imprima font-bold'>
                            <p className='text-[36px]'>${product.data.price.toFixed(2)}</p>
                        </span>
                        <button type="button" className="text-body w-50 bg-[#FF7A00] box-border border border-[#FF7A00] shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-5 text-white text-[18px]">Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Details