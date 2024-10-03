import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { FaUser } from 'react-icons/fa6'
import { FaClock } from 'react-icons/fa6'

const SingleBlog = () => {
    const data = useLoaderData()
    console.log(data)

    const {id,title,image,category,author,published_date,reading_time,content} = data[0]
  return (
    <div>
       <div className='text-white text-center bg-black py-20 px-4'>
          <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'><span className='text-red-500'>Single Blog</span> Page</h2>
        </div>

      {/* Blog Details */}
      <div className='max-w-7xl px-4 mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
          <img src={image} alt="" className='w-full mx-auto rounded' />
          <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
          <p className='mb-3 flex items-center text-gray-600'><FaUser className='inline-flex items-center mr-2' />{author} | {published_date}</p>
          <p className='mb-3 flex items-center text-gray-600'><FaClock className='inline-flex items-center mr-2' />{reading_time}</p>
          <p className='text-base text-gray-500 mb-6'>{content}</p>
          <div className='text-base text-gray-500 text-justify'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laboriosam earum eos ab consequuntur qui quos temporibus, aliquid repellendus, perferendis sapiente consequatur nam maxime repudiandae odit provident quam iusto dicta?</p><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laboriosam earum eos ab consequuntur qui quos temporibus, aliquid repellendus, perferendis sapiente consequatur nam maxime repudiandae odit provident quam iusto dicta?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laboriosam earum eos ab consequuntur qui quos temporibus, aliquid repellendus, perferendis sapiente consequatur nam maxime repudiandae odit provident quam iusto dicta?</p><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laboriosam earum eos ab consequuntur qui quos temporibus, aliquid repellendus, perferendis sapiente consequatur nam maxime repudiandae odit provident quam iusto dicta?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laboriosam earum eos ab consequuntur qui quos temporibus, aliquid repellendus, perferendis sapiente consequatur nam maxime repudiandae odit provident quam iusto dicta?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laboriosam earum eos ab consequuntur qui quos temporibus, aliquid repellendus, perferendis sapiente consequatur nam maxime repudiandae odit provident quam iusto dicta?</p><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laboriosam earum eos ab consequuntur qui quos temporibus, aliquid repellendus, perferendis sapiente consequatur nam maxime repudiandae odit provident quam iusto dicta?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laboriosam earum eos ab consequuntur qui quos temporibus, aliquid repellendus, perferendis sapiente consequatur nam maxime repudiandae odit provident quam iusto dicta?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laboriosam earum eos ab consequuntur qui quos temporibus, aliquid repellendus, perferendis sapiente consequatur nam maxime repudiandae odit provident quam iusto dicta?</p>
          </div>
        </div>
        <div className='lg:w-1/2'>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default SingleBlog