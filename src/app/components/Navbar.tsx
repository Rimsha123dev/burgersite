import React from 'react'
import { FaHamburger } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='bg-pink-600'>
        <div className='grid xl:grid-cols-1 grid-cols-1 bg-yellow-100'>
            <div className='bg-green-300 p-5'>
            <div className='bg-red-300 py-3 px-3 border rounded-xl w-full' >
                 <div className='bg-purple-300  flex justify-between items-center'>
                    <div className='bg-blue-700 flex justify-items-center items-center gap-2 '>
                        {/* burger icon */}
                        <FaHamburger className='w-6 h-6  text-yellow-400 hover:text-cyan-300'/>
                         </div>
                          </div>
            </div>


            </div>
               
                        </div>

                        </div>
               

        
      
    
  )
}

export default Navbar
