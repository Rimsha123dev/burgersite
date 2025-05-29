import React from 'react'

const Progressor = () => {
  return (
    <div>
    <div className='flex flex-start max-w-screen-lg w-full mx-auto mt-10'>
      <div className='w-full'>
        <div className='w-full flex items-center'>
           <div className='w-8 h-8 rounded-full bg-amber-400 shrink-0 p-1.5 mx-[-1px] flex items-center justify-center'>
          <span className='text-base text-black font-bold'>1</span>

        </div>
        <div className='bg-cyan-500 w-full h-1 mx-4 rounded-lg'>

        </div>

      </div>
    
      <div className='mt-2 mr-4'>
        <h6 className='text-amber-500 text-base font-bold'>Step:1 Choose your dish</h6>
        <p className='text-xs text-white'>Explore our menu and select your meal.</p>
      </div>

        </div>

         <div className='w-full'>
        <div className='w-full flex items-center'>
           <div className='w-8 h-8 rounded-full bg-amber-400 shrink-0 p-1.5 mx-[-1px] flex items-center justify-center'>
          <span className='text-base text-black font-bold'>2</span>

        </div>
        <div className='bg-cyan-500 w-full h-1 mx-4 rounded-lg'>

        </div>

      </div>
    
      <div className='mt-2 mr-4'>
        <h6 className='text-amber-500 text-base font-bold'>Step:2 Customize your order</h6>
        <p className='text-xs text-white'>order your meal according to your taste.</p>
      </div>

        </div>


         <div className='w-full'>
        <div className='w-full flex items-center'>
           <div className='w-8 h-8 rounded-full bg-amber-400 shrink-0 p-1.5 mx-[-1px] flex items-center justify-center'>
          <span className='text-base text-black font-bold'>3</span>

        </div>
        <div className='bg-cyan-500 w-full h-1 mx-4 rounded-lg'>

        </div>

      </div>
    
      <div className='mt-2 mr-4'>
        <h6 className='text-amber-500 text-base font-bold'>Step:3 Place your order</h6>
        <p className='text-xs text-white'>Enjoy your meal to fullest.</p>
      </div>

        </div>
       

      
    </div>
    </div>
  )
}

export default Progressor
