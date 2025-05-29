import Image from 'next/image'
import React from 'react'

const FloatingImageContent = () => {
  return(
  <section className=' container mx-auto py-10 flex flex-col md:flex-row items-center'>

    <div className='md:w-1/2 md:pr-10'>
    <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Burgers</h2>
    <p className='text-white mb-4'>
      Experience the juciest burger in town, made with fresh ingredients and grilled to perfection.
    </p>
    <button
     className='text-white text-center px-4 py-2 bg-green-500 font-medium rounded hover:bg-green-700 transition duration-200'>
      Order Now</button>

      <h3 className='text-center font-semibold text-2xl text-white mt-6 mb-2'>
        ComingSoon: Our New Burger Launches
      </h3>

      <ul>
        <li className='mb-4'>
          <strong> Firestorm Double Patty</strong>
           – Double beef, ghost pepper cheese, and flaming hot sauce for daredevils

        </li>
        


        <li className='mb-4'>
          <strong> Triple Cheese Meltdown</strong>
           – Cheddar, mozzarella, and blue cheese oozing over juicy beef

        </li>
        


        <li className='mb-4'>
          <strong>Mushroom Swiss Wonder  </strong>
           – Portobello patty, dairy-free Swiss, and garlic herb spread

        </li>
        

        <li className='mb-4'>
          <strong>Mexican Fiesta Burger </strong>
           – Spiced beef, guacamole, pico de gallo, and crushed tortilla chips

        </li>
        

        <li className='mb-4'>
          <strong>Nashville Hot Chicken Burger  </strong>
           – Extra crispy chicken, pickles, and fiery hot honey glaze

        </li>
        
     </ul>
  </div>

 <div className='md:w-1/2 mt-6 md:mt-0'>
  <Image
  src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148706001.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740"
  alt="new launches"
  height={100}
  width={100}
  className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'
  
  />

 </div>


   
  </section>

  )

}
  

export default FloatingImageContent
