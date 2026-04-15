'use client'
import React from 'react'
import Image from 'next/image'

const Login = () => {
  return (
    <>
      <div className='flex justify-center'>
        <Image
          src="/images/loginpg-img.png"
          alt="Logo"
          width={375}
          height={465}
          className='w-full'
        />
      </div>
      <div className='mx-8 my-3'>
        <h2 className='text-[42px] font-imprima font-extrabold leading-10'>
          Find The Best Collections 
        </h2>
        <p className='my-2 font-imprima text-[#797780]'>
          Get your dream item easily with FashionHub and get other intersting offer
        </p>
        <div className='my-2 flex justify-center gap-2'>
          <button type="button" className="text-body w-50 bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium  shadow-xs font-medium leading-5 rounded-full text-[18px] text-sm px-4 py-5 ">Signup</button>
          <button type="button" className="text-body w-50 bg-[#FF7A00] box-border border border-[#FF7A00] shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-5 text-white text-[18px]">Login</button>
        </div>
      </div>
    </>
  )
}

export default Login