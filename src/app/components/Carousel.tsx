import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Carousel = () => {
  return (
    <div>
      <section className='bg-gradient-to-r from-black to-gray-700'>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 flex flex-col h-auto md:h-full'>
              <Link href="" 
              className='group relative flex-col flex-grow overflow-hidden  rounded-lg px-4 pb-4 pt-40'>
                <Image 
                src="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740"
                alt='burger1'
                height={100}
                width={100}
                className='w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>

                </div>
                <h3 className='z-10 absolute top-0 text-white text-2xl font-medium left-0 p-4 sm:text-xl md:text-0xl '>
                  Classic Bites{" "}
                </h3>

              </Link>

            </div>
           <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 flex flex-col h-auto md:h-full'>
             <Link href="" 
              className='group relative flex-col flex-grow overflow-hidden  rounded-lg px-4 pb-4 pt-40 mb-4'>
                <Image 
                src="https://img.freepik.com/free-photo/meat-burger-wooden-board-french-fries-side-view_141793-2388.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740"
                alt='burger2'
                height={50}
                width={50}
                className='w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>

                </div>
                <h3 className='z-10 absolute top-0 text-white text-2xl font-medium left-0 p-4 sm:text-xl md:text-0xl '>
                  Grilled beef bites{" "}
                </h3>

              </Link>

               <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
             <Link href="" 
              className='group relative flex-col flex-grow overflow-hidden  rounded-lg px-4 pb-4 pt-40 mb-4'>
                <Image 
                src="https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-french-fries-dark-background_140725-89714.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740"
                alt='burger3'
                height={50}
                width={50}
                className='w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>

                </div>
                <h3 className='z-10 absolute top-0 text-white text-2xl font-medium left-0 p-4 sm:text-xl md:text-0xl '>
                  spicy ham burger{" "}
                </h3>

              </Link>
               <Link href="" 
              className='group relative flex-col flex-grow overflow-hidden  rounded-lg px-4 pb-4 pt-40 mb-4'>
                <Image 
                src="https://img.freepik.com/free-photo/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns_141793-4883.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740"
                alt='burger4'
                height={50}
                width={50}
                className='w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>

                </div>
                <h3 className='z-10 absolute top-0 text-white text-2xl font-medium left-0 p-4 sm:text-xl md:text-0xl '>
                  Double Petty Bomb{" "}
                </h3>

              </Link>

           </div>


           </div>

           <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700 flex flex-col h-auto md:h-full'>
             <Link href="" 
              className='group relative flex-col flex-grow overflow-hidden  rounded-lg px-4 pb-4 pt-40 mb-4'>
                <Image 
                src="https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740"
                alt='burger5'
                height={50}
                width={50}
                className='w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>

                </div>
                <h3 className='z-10 absolute top-0 text-white text-2xl font-medium left-0 p-4 sm:text-xl md:text-0xl '>
                  Cheesy Delight{" "}
                </h3>

              </Link>

           </div>

          



          </div>
        </div>



      </section>
      
    </div>
  )
}

export default Carousel
