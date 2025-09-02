import React from 'react'
import { workItems } from '../assets/assets'

const Work = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>Our latest work</h1>
                <p className='text-dark/60 max-w-2xl mx-auto text-xl'>From strategy to execution, we craft digital solutions that move your business forward.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {workItems.map((work, index)=>(
                <div key={index} className='rounded-xl overflow-hidden border border-primary/50 hover:scale-105 duration-300 cursor-pointer'>
                    <img src={work.image} alt="" />
                    <div className='mt-6 p-6'>
                        <h1 className='text-xl text-dark'>{work.title}</h1>
                        <p className='text-dark/60 mt-4'>{work.description}</p>
                    </div>
                </div> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work