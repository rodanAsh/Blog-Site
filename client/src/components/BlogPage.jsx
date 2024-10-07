import React, { useEffect } from 'react'
import { useState } from 'react' 
import BlogCards from './BlogCards'
import Pagination from './Pagination'
import CategorySelection from './CategorySelection'
import Sidebar from './Sidebar'

const BlogPage = () => {
    const [blogs,setBlogs] = useState([])
    const [error,setError] = useState()
    const [currentPage,setCurrentPage] = useState(1)
    let pageSize = 12 //blogs per page
    const [selectedCategory,setSelectedCategory] = useState(null)
    const [activeCategory,setActiveCategory] = useState(null)

    useEffect(() => {
      const fetchBlogs = async() => {
        let URL = `https://blog-site-server-oraj.onrender.com/blogs?page=${currentPage}&limit=${pageSize}`

        if(selectedCategory){
          URL += `?category=${selectedCategory}`
        }

        try{
          const response = await fetch(URL)
          const blogs = await response.json()

          setBlogs(blogs)
        }catch(err){
          setError(err)
        }
      }
      fetchBlogs()
    },[])

    if(error){
      return <div>oops something went wrong :(</div>
    }

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

    const handleCategoryChange = (category) => {
      setSelectedCategory(category)
      setCurrentPage(1)
      setActiveCategory(category)
    }
    
  return (
    <div>
        {/* Category section */}
        <div>
          <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
        </div>

        {/* Blog section */}
        <div className='flex flex-col lg:flex-row gap-12'>
            {/* Blogcards component */}
            <BlogCards blogs={blogs} currentPage={currentPage} pageSize={pageSize} selectedCategory={selectedCategory} />

            {/* Sidebar component */}
            <div>
              <Sidebar />
            </div>
        </div>

        {/* Pagination section */}
        <div>
          <Pagination onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} pageSize={pageSize} />
        </div>

    </div>
  )
}

export default BlogPage