"use client"
import React from 'react'

type Offer ={
  title: string;
  description:string;

}
const Specialoffers : React.FC =() =>{
  const offers:Offer[]=[
    {
      title:"Happy Hour",
      description:"Enjoy 50% off on all drinks from 5pm to 7pm. Don't miss out!"
    },
     {
      title:"Family Meal Deal",
      description:"Order 2 main course meals and avail the family coupon offer!"
    },
     {
      title:"Weekly Brunch",
      description: "Get a free complimentary dessert on us!"
    },
  
  
  ];

  const handleOfferClick =(description:string)=>{
    alert(description);
  }


  return(
    <section className='py-10'>
      <div className='container mx-auto text-center'>
        <h1 className='text-4xl font-bold text-white mb-6'>Special Offers</h1>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            offers.map((offer,index)=>(
              <button key={index} 
              onClick={()=>handleOfferClick(offer.description)}
              className='bg-white hover:bg-gray-300 duration-300 transition transform hover:scale-105 text-center rounded-lg shadow-lg'>
                
                <h3 className='text-red-700 font-semibold text-2xl'>{offer.title}</h3>
                <p className='text-lg text-slate-700 mt-3 px-1'>{offer.description}</p>

              </button>
            ))
          }
         
        </div>

      </div>

    </section>

  )

}

export default Specialoffers
