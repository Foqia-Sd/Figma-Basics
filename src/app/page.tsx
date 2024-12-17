import React from 'react'
import Image from 'next/image'


const page = () => {
  return (
    <>
    <div className="flex justify-center lg:flex-row flex-col items-center h-screen gap-40">

        <div>
          <h1 className='font-bold text-[36px]'>Welcome To Our Website</h1>
          <p className='text-[#4C4C4C] mt-4 font-normal text-[22px]'>
            Lorem Ipsum is simply dummy text of<br/>
            the printing and typesetting industry.<br/>
            Lorem Ipsum has been the industry's<br/>
            standard
          </p>
          <button className='mt-8 bg-black text-white p-2 px-8 font-normal text-[20px]'>Contact Us</button>
        </div>

        <div>
          <Image src={"/images/figma-img.png"} alt='Hero Image' width={350} height={300} />
        </div>

      </div>
    </>
  )
}

export default page