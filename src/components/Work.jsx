import React from 'react'

const Work = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>Our latest work</h1>
                <p className='text-dark/60 max-w-2xl mx-auto text-xl'>From strategy to execution, we craft digital solutions that move your business forward.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div className='rounded-xl overflow-hidden border border-primary/50 hover:scale-105 duration-300 cursor-pointer'>
                    <img src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_640.jpg" alt="" />
                    <div className='mt-6 p-6'>
                        <h1 className='text-xl text-dark'>Mobile marketing</h1>
                        <p className='text-dark/60 mt-4'>We turn bold ideas into powerful digital solutions that connect, engage...</p>
                    </div>
                </div>

                <div className='rounded-xl overflow-hidden border border-primary/50 hover:scale-105 duration-300 cursor-pointer'>
                    <img src="https://media.istockphoto.com/id/1407200725/photo/close-up-of-businessman-using-a-laptop-with-graphs-and-charts-on-a-laptop-computer.jpg?s=1024x1024&w=is&k=20&c=KUOh0j5B696E1T1A2s2TzoOCsUGKKC_QKz5iSXWYxdA=" alt="" />
                    <div className='mt-6 p-6'>
                        <h1 className='text-xl text-dark'>Dashboard management</h1>
                        <p className='text-dark/60 mt-4'>We turn bold ideas into powerful digital solutions that connect, engage...</p>
                    </div>
                </div>

                <div className='rounded-xl overflow-hidden border border-primary/50 hover:scale-105 duration-300 cursor-pointer'>
                    <img src="https://cdn.pixabay.com/photo/2016/11/22/22/25/abs-1850926_640.jpg" alt="" />
                    <div className='mt-6 p-6'>
                        <h1 className='text-xl text-dark'>Fitness app promotion</h1>
                        <p className='text-dark/60 mt-4'>We turn bold ideas into powerful digital solutions that connect, engage...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work