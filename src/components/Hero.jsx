import React from 'react'

const Hero = () => {
  return (
    <div className='w-full py-40 '>
        <div className='container mx-auto px-6'>
            <div className='flex items-center mx-auto gap-4 border border-primary/60 rounded-full pl-2 py-2 w-[25%] mb-12'>
              <div className='flex items-center -space-x-3'>
                <img className='w-8 h-8 rounded-full object-cover object-center' src="https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435_1280.jpg" alt="" />
                <img className='w-8 h-8 rounded-full object-cover object-center' src="https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_640.jpg" alt="" />
                <img className='w-8 h-8 rounded-full object-cover object-center' src="https://cdn.pixabay.com/photo/2018/07/28/09/23/woman-3567600_640.jpg" alt="" />
                <img className='w-8 h-8 rounded-full object-cover object-center' src="https://cdn.pixabay.com/photo/2016/06/19/22/46/girl-1467820_640.jpg" alt="" />
              </div>
              <span>Trusted by 20k+ people</span>
            </div>

            <h1 className='text-center text-dark  text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6'>
                <span>We Help Brands Grow With</span>
                <br />
                <span className='bg-primary from-dark/50 to-primary/80 bg-clip-text text-transparent'>Performance</span>
                <span>Marketing</span>
            </h1>
            <p className='max-w-xl mx-auto text-2xl font-thin text-dark/80 text-center mb-12'>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
            
            <div className='mb-6 flex items-center justify-center gap-6'>
              <button className='px-6 py-2.5 bg-primary rounded-full text-dark font-semibold cursor-pointer'>Contact Me</button>
              <button className='px-6 py-2.5 bg-dark text-white font-semibold cursor-pointer rounded-full'>Engage Digital</button>
            </div>
            
            <div className='max-w-5xl mx-auto mt-16 rounded-2xl shadow overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2018/09/05/07/33/computer-3655665_640.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero