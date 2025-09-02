import React from 'react'
import { FaApple, FaFacebook, FaGoogle, FaGoogleDrive, FaInstagram, FaLinkedin, FaMicrosoft } from 'react-icons/fa'

const Company = () => {
  return (
    <div className='py-20 bg-white'>
        <div className='container mx-auto px-6'>    
            <p className='text-xl md:text-2xl text-center mb-16'>Trusted by leading companies</p>
            <div className='flex flex-wrap items-center justify-center gap-12'>
                <div className='w-20 h-20 rounded-full border border-primary/60 flex items-center justify-center'>
                    <FaMicrosoft className='h-10 w-10 text-primary' />
                </div>
                <div className='w-20 h-20 rounded-full border border-primary/60 flex items-center justify-center'>
                    <FaFacebook className='h-10 w-10 text-primary' />
                </div>
                <div className='w-20 h-20 rounded-full border border-primary/60 flex items-center justify-center'>
                    <FaLinkedin className='h-10 w-10 text-primary' />
                </div>
                <div className='w-20 h-20 rounded-full border border-primary/60 flex items-center justify-center'>
                    <FaApple className='h-10 w-10 text-primary' />
                </div>
                <div className='w-20 h-20 rounded-full border border-primary/60 flex items-center justify-center'>
                    <FaInstagram className='h-10 w-10 text-primary' />
                </div>
                <div className='w-20 h-20 rounded-full border border-primary/60 flex items-center justify-center'>
                    <FaGoogle className='h-10 w-10 text-primary' />
                </div>
                <div className='w-20 h-20 rounded-full border border-primary/60 flex items-center justify-center'>
                    <FaGoogleDrive className='h-10 w-10 text-primary' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Company