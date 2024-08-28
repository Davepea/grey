"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';



const header = () => {
  return (
    <>
        <section className='grid grid-cols-12 items-center xl:gap-1 md:gap-10 py-4 md:px-10 xs:px-2'>
            <div  className=' w-[170px] xl:col-span-4 md:col-span-3 xs:col-span-6'>
            <div>
                <Image
                src="/images/logo.png"
                width={1000}
                height={1000}
                alt='logo'
                />
            </div>
            </div>
            <div className="links bg-[#010101] text-[#FFF] py-5 px-10 rounded-[40px] xl:col-span-4 md:col-span-6 md:block xs:hidden">
                <ul className=' xl:text-[18px] md:text-[15px] flex xl:gap-8 md:gap-2 justify-between font-generalSans font-medium'>
                    <li><Link href="#">Shop</Link></li>
                    <li><Link href="#">Mens</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Customer</Link></li>
                </ul>
                
            </div>

            <div className='text-[#fff] text-[18px] xl:col-span-4 md:col-span-3 xs:col-span-6 flex justify-end'>
                <button>
                    Menu
                </button>
            </div>
        </section>
    </>
  )
}

export default header