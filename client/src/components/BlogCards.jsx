import React from 'react'
import { Link } from 'react-router-dom'
import {FaUser} from 'react-icons/fa6'

const BlogCards = ({blogs,selectedCategory,currentPage,pageSize}) => {
    const filteredBlogs = blogs.filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage-1)*pageSize,currentPage*pageSize)
    
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
            filteredBlogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer md:hover:scale-110 transition-all duration-150 ease-in'>
                    <div>
                        <img className='w-full rounded' src={blog.image} alt="" />
                        <h2 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h2>
                        <p className='text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
                        <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default BlogCards