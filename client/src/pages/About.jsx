import React from 'react'
import about from '../assets/about.png'
import author1 from '../assets/user-01.png'
import author2 from '../assets/user-02.png'
import author3 from '../assets/user-03.png'
import { FaRegFileLines } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <div className='text-white text-center bg-black py-20 px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'><span className='text-red-500'>About us</span> Page</h2>
      </div>

      <div className='max-w-7xl mx-auto px-12 py-12 '>
        <div className='flex md:flex-row flex-col items-center gap-10 mb-10'>
          <div>
            <img src={about} className='w-[340px] sm:min-w-[480px] h-auto object-fill' alt="" />
          </div>
          <div className='flex-1 space-y-4'>
            <p className='text-red-500 text-lg font-semibold'>Who we are</p>
            <h3 className='text-balck font-bold text-4xl'>We provide high quality Articles & blogs</h3>
            <p className='text-base text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus explicabo voluptatum ipsa eius quos voluptatem doloribus soluta corrupti eum reiciendis, quasi iste perferendis architecto veniam non porro quisquam placeat sapiente.</p>
            <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sunt neque perspiciatis excepturi nesciunt quos nihil cumque sequi laboriosam doloribus.</p>
          </div>
        </div> 

        <div>
          <h2 className='font-bold text-4xl mb-5'>Top Authors</h2>
          <hr className='mb-10 border' />
          <div className='flex flex-wrap gap-5'>
            <div className='p-10 bg-[#f5f5f5] text-gray-500 w-fit rounded-lg flex flex-col items-center justify-center flex-1'>
              <img src={author1} alt="" />
              <p>John Doe</p>
              <p className='text-center'>Director of Operations</p>
              <p className='flex items-center gap-2 text-center'><span><FaRegFileLines /></span>12 Article published</p>
            </div>
            <div className='p-10 bg-[#f5f5f5] text-gray-500 w-fit rounded-lg flex flex-col items-center justify-center flex-1'>
              <img src={author2} alt="" />
              <p>John Doe</p>
              <p className='text-center'>Content Writer</p>
              <p className='flex items-center gap-2 text-center'><span><FaRegFileLines /></span>5 Article published</p>
            </div>
            <div className='p-10 bg-[#f5f5f5] text-gray-500 w-fit rounded-lg flex flex-col items-center justify-center flex-1'>
              <img src={author3} alt="" />
              <p>John Doe</p>
              <p className='text-center'>Head of Marketing</p>
              <p className='flex items-center gap-2 text-center'><span><FaRegFileLines /></span>6 Article published</p>
            </div>
            <div className='p-10 bg-[#f5f5f5] text-gray-500 w-fit rounded-lg flex flex-col items-center justify-center flex-1'>
              <img src={author1} alt="" />
              <p>John Doe</p>
              <p className='text-center'>Head of Marketing</p>
              <p className='flex items-center gap-2 text-center'><span><FaRegFileLines /></span>4 Article published</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About