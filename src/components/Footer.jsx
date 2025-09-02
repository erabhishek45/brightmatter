import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div>
                    <div className='mb-4'>
                        <span className='text-dark text-2xl font-semibold'>Brightmatter.ai</span>
                        <div className='w-4 h-4 rounded-full bg-primary'></div>
                    </div>
                    <p className='mb-4 text-dark/60'>From strategy to execution, we craft digital solutions that move your business forward.</p>
                    <div className='py-2 flex items-center gap-6 font-semibold text-dark/70'>
                        <a href="#home">Home</a>
                        <a href="#sevices">Services</a>
                        <a href="#works">Our Works</a>
                        <a href="#contact">Contact us</a>

                    </div>
                </div>
                <div>
                    <h3 className='text-dark text-xl font-semibold mb-3'>Subscribe to our newsletter</h3>
                    <p className='text-sm text-dark/70'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='mt-4 flex flex-col md:flex-row items-start gap-2'>
                        <input 
                        className='w-full px-6 py-3 border border-dark/40 rounded outline-none placehoder:text-sm placeholder:text-dark/60'
                        placeholder='Enter your email'
                        type="email" />
                        <button className='px-6 py-3 bg-primary rounded text-dark font-semibold cursor-pointer'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='mt-6 border-t border-t-dark/40 py-4 flex flex-col md:flex-row items-start gap-6 justify-between'>
                <p className='text-dark/70'>Copyright 2025 © TheAbhishekCodes - All Right Reserved.</p>
                <div className='flex items-center gap-4 text-xl text-primary'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedin />
                    <FaGoogle />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer