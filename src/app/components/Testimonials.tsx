import React from 'react'

const Testimonials = () => {
  return (
    <section className='bg-gradient-to-r from-black to bg-slate-900 py-10 text-white'>
    
      <div className='container mx-auto text-center'>
        
        <h2 className='text-3xl mb-6 font-bold text-white'>Make a Reservation</h2>
        <form  
        className='mx-auto max-w-md'>
          <div className='mb-4'>
            <input
             type="text"
             placeholder='Your Name' 
             required
             className='w-full p-3 border border-gray-300 rounded-md'
             
             />

          </div>

            <div className='mb-4'>
            <input
             type="email"
             placeholder='email' 
             required
             className='w-full p-3 border border-gray-300 rounded-md'
             
             />

          </div>

            <div className='mb-4'>
            <input
             type="date"
             required
             className='w-full p-3 border border-gray-300 rounded-md'
             
             />

          </div>

            <div className='mb-4'>
            <input
             type="time"
             required
             className='w-full p-3 border border-gray-300 rounded-md'
             
             />

          </div>

          <div className='mb-4'>
            <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md'>
              Reserve Table
            </button>

          </div>

        </form>
      
    </div>

    </section>
    
  )
}

export default Testimonials
