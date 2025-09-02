import React from 'react'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { VscNoNewline } from 'react-icons/vsc'

const Contact = () => {
  return (
    <div className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>Reach out to us</h1>
                <p className='text-dark/60 max-w-xl mx-auto'>Let’s talk! Whether it’s a quick question or a big project, we’re just a message away.</p>
            </div>
            <div className='max-w-2xl mx-auto mt-12'>
                <form  >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label htmlFor="" className='mb-2 block text-dark'>Your name</label>
                            <div className='flex items-center gap-4 py-2 pl-4 rounded border border-dark/40'>
                                <FaUser />
                                <input
                                className='w-full outline-none placeholder:text-dark/60 placeholder:text-sm'
                                placeholder='Enter your name' 
                                type="text" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='mb-2 block text-dark'>Your Email</label>
                            <div className='flex items-center gap-4 py-2 pl-4 rounded border border-dark/40'>
                                <FaEnvelope />
                                <input
                                className='w-full outline-none placeholder:text-dark/60 placeholder:text-sm'
                                placeholder='Enter your email' 
                                type="email" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <label htmlFor="" className='block mb-2 text-dark'>Your message</label>
                        <textarea
                        className='px-6 w-full h-60 py-6 outline-none rounded border border-dark/40' 
                        placeholder='Enter your message'></textarea>
                    </div>
                    <button className='px-6 py-2.5 rounded-full bg-primary text-dark flex items-center gap-2 mt-4 cursor-pointer font-semibold'>
                        submit
                        <FaArrowRightLong />
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact