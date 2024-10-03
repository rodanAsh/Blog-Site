import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom' 

const Sidebar = () => {
    const [popularBlogs,setPopularBlogs] = useState([])

    useEffect(()=> {
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopularBlogs(data).slice(0,15))
    },[])
  return (
    <div>
        {/* Latest Blogs */}
        <div>
            <h3 className='text-2xl font-semibold px-4'>Latest blogs</h3>
            {popularBlogs.slice(0,5).map((blog) => (
                <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link to="/" className='font-medium hover:text-red-500 inline-flex items-center mb-2'>
                        Read more<FaArrowRight className='mt-2 ml-2' />
                    </Link>
                </div>
            ))}
        </div>
        {/* Popular Blogs */}
        <div>
            <h3 className='text-2xl font-semibold px-4'>Popular blogs</h3>
            {popularBlogs.slice(6,10).map((blog) => (
                <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link to="/" className='font-medium hover:text-red-500 inline-flex items-center mb-2'>
                        <span>Read more</span><FaArrowRight className='mt-2 ml-2' />
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar