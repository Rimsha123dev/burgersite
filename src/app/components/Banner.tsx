import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-gray-700 px-6 py-12 font-sans mb-7 mt-7'>
      <div className='absolute inset-0 opacity-20'>
      <Image src="https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740" alt="burger banner" width={50} height={50} 
      className='h-full w-full object-cover'/>
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center'>
        <h2 className="text-white text-5xl mb-4 font-bold ">
              Scroll down for menu

        </h2>
        <p className=" text-white text-lg mb-6 text-center max-w-xl">
          Shop Now and Get Discount!
        </p>
        <button className='bg-cyan-500 py-3 px-6 font-semibold text-white rounded-full shadow-lg hover:bg-blue-500 transition duration-300'>
          Discover Exciting Deals!
        </button>
  

       
      </div>
    </div>
  )
}

export default Banner
