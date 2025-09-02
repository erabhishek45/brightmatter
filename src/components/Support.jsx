import React from 'react'
import { FaApple, FaGoogle, FaMicrosoft, FaTwitter } from 'react-icons/fa'

const Support = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>How we can Help you?</h1>
                <p className='text-dark/60 text-xl max-w-2xl mx-auto'>From strategy to execution, we craft digital solutions that move your business forward.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='rounded-xl p-12 border border-primary flex items-center gap-6'>
                    <div className='flex-shrink-0 w-20 aspect-square border-4 border-primary/30 rounded-full flex items-center justify-center'>
                        <FaGoogle className='w-10 h-10 text-primary' />
                    </div>
                    <div>
                        <h1 className='text-xl text-dark'>Advertising</h1>
                        <p className='text-dark/60'>We turn bold ideas into powerful digital solutions that connect, engage..</p>
                    </div>
                </div>
                <div className='rounded-xl p-12 border border-primary flex items-center gap-6'>
                    <div className='flex-shrink-0 w-20 aspect-square border-4 border-primary/30 rounded-full flex items-center justify-center'>
                        <FaMicrosoft className='w-10 h-10 text-primary' />
                    </div>
                    <div>
                        <h1 className='text-xl text-dark'>Advertising</h1>
                        <p className='text-dark/60'>We turn bold ideas into powerful digital solutions that connect, engage..</p>
                    </div>
                </div>

                <div className='rounded-xl p-12 border border-primary flex items-center gap-6'>
                    <div className='flex-shrink-0 w-20 aspect-square border-4 border-primary/30 rounded-full flex items-center justify-center'>
                        <FaApple className='w-10 h-10 text-primary' />
                    </div>
                    <div>
                        <h1 className='text-xl text-dark'>Advertising</h1>
                        <p className='text-dark/60'>We turn bold ideas into powerful digital solutions that connect, engage..</p>
                    </div>
                </div>

                <div className='rounded-xl p-12 border border-primary flex items-center gap-6'>
                    <div className='flex-shrink-0 w-20 aspect-square border-4 border-primary/30 rounded-full flex items-center justify-center'>
                        <FaTwitter className='w-10 h-10 text-primary' />
                    </div>
                    <div>
                        <h1 className='text-xl text-dark'>Advertising</h1>
                        <p className='text-dark/60'>We turn bold ideas into powerful digital solutions that connect, engage..</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Support