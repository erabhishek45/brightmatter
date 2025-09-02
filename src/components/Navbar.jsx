import React, { useState } from 'react'
import { FaBarcode, FaBars, FaMoon } from 'react-icons/fa'
import { FaArrowRightLong, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='w-full fixed top-0 z-50 backdrop-blur-2xl'>
        <div className='flex items-center justify-between px-6 py-8 sm:px-12 md:px-24 lg:px-48'>
            {/* logo */}
            <div>
                <div>
                    <span className='text-3xl font-bold'>Brightmatter.io</span>
                    <div className='w-4 h-4 rounded-full bg-primary'></div>
                </div>
            </div>

            {/* Nav Menu */}
            <nav className='hidden md:flex items-center space-x-6 text-dark/80 font-semibold'>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>

            </nav>

            {/* buttons */}
            <div className='hidden md:flex items-center space-x-6'>
                {/* <div className='w-10 h-10 border rounded-full border-dark/30 flex items-center justify-center cursor-pointer'>
                    <FaMoon className='text-primary'/>
                </div> */}
                <button className='flex items-center gap-2 px-6 py-2 bg-primary  rounded-full text-dark font-semibold cursor-pointer'>
                    Contact Me
                    <FaArrowRightLong />
                </button>
            </div>
            {/* Mobile buttons */}
            <div className='md:hidden z-10'>
                {
                    showMenu ? 
                    <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-xl cursor-pointer' /> :
                    <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-xl cursor-pointer' />
                }
                
            </div>
        </div>

        {/* Mobile menu */}
        {
            showMenu && (
                <div className='flex flex-col space-y-4 items-center justify-center fixed top-0 right-0 w-64 bg-primary/50 text-dark font-semibold h-screen'>
                    <Link>Home</Link>
                    <Link>Services</Link>
                    <Link>Work</Link>
                    <Link>Contact Us</Link>
                </div>
            )
        }
    </div>
  )
}

export default Navbar