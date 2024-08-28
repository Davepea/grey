"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';



const header = () => {
  return (
    <>
        <section className='grid grid-cols-12 items-center py-4 px-10'>
            <div  className=' w-[170px] col-span-4'>
            <div>
                <Image
                src="/images/logo.png"
                width={1000}
                height={1000}
                alt='logo'
                />
            </div>
            </div>
            <div className="links bg-[#010101] text-[#FFF] py-5 px-10 rounded-[40px] col-span-4">
                <ul className=' text-[18px] flex gap-8 justify-between font-generalSans font-medium'>
                    <li><Link href="#">Shop</Link></li>
                    <li><Link href="#">Mens</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Customer</Link></li>
                </ul>
                
            </div>

            <div className='text-[#fff] text-[18px] col-span-4 flex justify-end'>
                <button>
                    Menu
                </button>
            </div>
        </section>
    </>
  )
}

export default header