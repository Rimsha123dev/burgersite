import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col space-y-10 items-center mb-0 m-10'>
        <nav className='flex justify-center text-slate-500 font-medium flex-wrap gap-6 bg-gradient-to-r from-black to bg-gray-700'>
        
          <Link
          className=' uppercase text-amber-500 hover:text-cyan-500 '
          href="#">
            Home
          
          </Link>
           <Link
          className=' uppercase text-amber-500 hover:text-cyan-500 '
          href="#">
            about
          
          </Link>
           <Link
          className=' uppercase text-amber-500 hover:text-cyan-500 '
          href="#">
            Delivery
          
          </Link>
           <Link
          className=' uppercase text-amber-500 hover:text-cyan-500 '
          href="#">
            contact
          
          </Link>


        </nav>

        <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>
               <Link
               href="https://facebook.com"
               target='blank'
               rel='noopener nofollow'
               >
                <Image
                src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                alt='facebook'
                width={50}
                height={50}
                />

               </Link>
                <Link
               href="https://linkedin.com"
               target='blank'
               rel='noopener nofollow'
               >
                <Image
                src="https://img.icons8.com/?size=96&id=13930&format=png"
                alt='facebook'
                width={50}
                height={50}
                />

               </Link>
                <Link
               href="https://instagram.com"
               target='blank'
               rel='noopener nofollow'
               >
                <Image
                src="https://img.icons8.com/?size=96&id=32323&format=png"
                alt='facebook'
                width={50}
                height={50}
                />

               </Link>
                <Link
               href="https://twitter.com"
               target='blank'
               rel='noopener nofollow'
               >
                <Image
                src="https://img.icons8.com/?size=96&id=13963&format=png"
                alt='facebook'
                width={50}
                height={50}
                />

               </Link>


        </div>
        <p className='text-center font-medium text-amber-500 hover:text-cyan-500 mb-4'>
          2025 RimshaDev. All rights reserved
        </p>
        <br />
      
      

      </footer>
      
    </div>
  )
}

export default Footer
