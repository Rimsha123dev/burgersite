import React from 'react'
import Image from 'next/image'



const products = [
  {
    id: 1,
    title:"Meatball",
    category:"fixing",
    price: "200",
    imageUrl:"/b1.png",
    bgColr:"bg-amber-500"

  },
    {
    id: 2,
    title:"Cheezy",
    category:"fixing",
    price: "300",
    imageUrl:"/b2.png",
    bgColr:"bg-teal-500"

  },
    {
    id: 3,
    title:"Grilled Double",
    category:"fixing",
    price: "500",
    imageUrl:"/b4.png",
    bgColr:"bg-amber-500"

  }
]

const Productlist = () => {
  return (
    <div 
    className='p-1 flex flex-wrap items-center justify-center mb-6'>
      {
        products.map((product)=>(
          <div key={product.id} className={`flex-shrink-0 m-6 relative overflow-hidden ${product.bgColr} rounded-lg shadow-lg max-w-xs group`}>
            <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
             <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div className='relative flex items-center justify-center  px-10 pt-10  group-hover:scale-110 transition-transform'>
              <div className='block absolute w-48 h-48 -mb-24 bottom-0 left-0 ml-3'
               style={{background:"radial-gradient(black,transparent 60%)",transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity:"0.2"}}>

                
              </div>
              <Image
              className='relative w-52 object-cover'
              src={product.imageUrl}
              alt={product.title}
              width={50}
              height={50}
              />


            </div>

            <div className='relative text-white px-6 pb-6 mt-6 '>
              <span className='block opacity-75 -mb-1'>{product.category}</span>
                 <div className='flex justify-between gap-7 '>
                        <span className='block font-semibold text-xl py-1 '>{product.title}</span>
                         <span className='block text-amber-500 bg-white text-xs rounded-full  items-center font-bold px-3 py-2 leading-none'>{product.price}</span>

</div>

            </div>
               
          </div>

        ))
      }

      
    </div>
  )
}

export default Productlist
