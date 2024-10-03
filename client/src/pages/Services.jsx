import React from 'react'
import { FaAtlassian,FaCss3,FaDiceD6,FaComputer,FaCircleNodes,FaThumbsUp } from "react-icons/fa6";

const Services = () => {
  return (
    <div>
      <div className='text-white text-center bg-black py-20 px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'><span className='text-red-500'>Services</span> Page</h2>
      </div>

      {/* Services Page */}
      <div className='max-w-7xl mx-auto px-12 py-12'>
        <div className='text-center'>
          <p className='text-lg text-red-500 font-semibold'>Our Services</p>
          <h2 className='text-5xl font-bold mb-4'>What We Offer</h2>
          <p className='text-base text-gray-500'>There are many variations of passages of Lorem Ipsum available <br />but the majority have suffered alteration in some form.</p>
        </div>

        <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center'>
          <div className='px-8 py-4 w-92 bg-[#f5f5f5] rounded-lg flex flex-col justify-center gap-4'>
            <FaAtlassian className='text-[#077EFF] text-5xl' />
            <p className='text-base font-semibold'>Refreshing Design</p>
            <p className='text-base text-gray-500'>We dejoy with discerning clients, people for whom quality, service, integrity & aesthetics</p>
          </div>
          <div className='px-8 py-4 w-92 bg-[#f5f5f5] rounded-lg flex flex-col justify-center gap-4'>
            <FaCss3 className='text-[#077EFF] text-5xl'  />
            <p className='text-base font-semibold'>Based on Tailwind CSS</p>
            <p className='text-base text-gray-500'>We dejoy with discerning clients, people for whom quality, service, integrity & aesthetics</p>
          </div>
          <div className='px-8 py-4 w-92 bg-[#f5f5f5] rounded-lg flex flex-col justify-center gap-4'>
            <FaDiceD6 className='text-[#077EFF] text-5xl'  />
            <p className='text-base font-semibold'>300+ Components</p>
            <p className='text-base text-gray-500'>We dejoy with discerning clients, people for whom quality, service, integrity & aesthetics</p>
          </div>
          <div className='px-8 py-4 w-92 bg-[#f5f5f5] rounded-lg flex flex-col justify-center gap-4'>
            <FaComputer className='text-[#077EFF] text-5xl'  />
            <p className='text-base font-semibold'>Speed Optimized</p>
            <p className='text-base text-gray-500'>We dejoy with discerning clients, people for whom quality, service, integrity & aesthetics</p>
          </div>
          <div className='px-8 py-4 w-92 bg-[#f5f5f5] rounded-lg flex flex-col justify-center gap-4'>
            <FaCircleNodes className='text-[#077EFF] text-5xl'  />
            <p className='text-base font-semibold'>Fully Customizable</p>
            <p className='text-base text-gray-500'>We dejoy with discerning clients, people for whom quality, service, integrity & aesthetics</p>
          </div>
          <div className='px-8 py-4 w-92 bg-[#f5f5f5] rounded-lg flex flex-col justify-center gap-4'>
            <FaThumbsUp className='text-[#077EFF] text-5xl'  />
            <p className='text-base font-semibold'>Regular updates</p>
            <p className='text-base text-gray-500'>We dejoy with discerning clients, people for whom quality, service, integrity & aesthetics</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services