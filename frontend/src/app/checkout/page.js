import React from 'react'
import Image from 'next/image'
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa6";
import { ChevronLeft } from 'lucide-react';

const Checkout = () => {
  return (
    <div className='mx-8 my-5'>
        <div className='mb-5 flex items-center'>
            <button className=''>
                <ChevronLeft className='w-8 h-8'/>
            </button>
            <div className='text-[18px] font-imprima pl-25'>
                Checkout
            </div>
        </div>
        <div>
            <h1 className='text-[14px] font-imprima text-[#797780]'>Delivey Address</h1>
            <div className='flex justify-between items-center my-4'>
                <div className='flex gap-3'>
                    <Image
                        src="/images/map.png"
                        alt="Logo"
                        width={46}
                        height={46}
                    />
                    <div className='w-[164px] h-[48px] text-[16px] font-imprima'>
                        <p>25/3 Housing Estate, Sylhet</p>
                    </div>
                </div>
                <div>
                    <button className='underline text-[#797780] text-[16px]'>
                        change
                    </button>
                </div>
            </div>
            <div className='flex gap-4'>
                <Image
                    src="/images/Time_Circle.png"
                    alt="Logo"
                    width={25}
                    height={25}
                />
                <p className='text-[16px] font-imprima text-[#0D0D0E]'>Delivered in next 7 days</p>
            </div>
        </div>

        <div className='mt-10'>
            <h1 className='text-[14px] font-imprima text-[#797780]'>Payment Method</h1>
            <div className='flex gap-8'>
                <button>
                    <RiVisaLine className='w-15 h-15'/>
                </button>
                <button>
                    <FaCcMastercard className='w-15 h-15'/>
                </button>
                <button>
                    <FaCcPaypal className='w-15 h-15'/>
                </button>
                <button>
                    <FaApplePay className='w-15 h-15'/>
                </button>
            </div>
        </div>

        <div className='my-8'>
            <button type="button" className="text-body text-[#797780] bg-[#FCFCFC] w-full box-border border rounded-full border-[#797780] shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5">Add Voucher</button>
        </div>

        <div className='w-full h-[72px]'>
            <p className='text-[#797780]'>
                <span className='text-red-500'>Note</span> : Use your order id at the payment. Your Id <span className='text-[#161626]'>#154619</span> if you forget to put your order id we can’t confirm the payment.
            </p>
        </div>

        <div className='mt-7 flex flex-col gap-y-4'>
            <div className='flex justify-between'>
                <p className='text-[#797780] text-[18px] font-imprima'>Total items (2)</p>
                <p className='text-black font-bold text-[18px] font-imprima'>$116.00</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-[#797780] text-[18px] font-imprima'>Standard Delivery</p>
                <p className='text-black font-bold text-[18px] font-imprima'>$12.00</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-[#797780] text-[18px] font-imprima'>Total Payment</p>
                <p className='text-black font-bold text-[18px] font-imprima'>$128.00</p>
            </div>
        </div>
        <div className='my-8 flex justify-center'>
            <button type="button" className="text-body w-[192px] bg-[#FF7A00] box-border border border-[#FF7A00] shadow-xs font-medium leading-5 rounded-full font-imprima text-sm px-4 py-5 text-white text-[18px]">Pay Now</button>
        </div>
    </div>
  )
}

export default Checkout