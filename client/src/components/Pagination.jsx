import React from 'react'

const Pagination = ({onPageChange,blogs,currentPage,pageSize}) => {
    const totalPages = Math.ceil(blogs.length / pageSize)
    
    const renderPagination = () => {
        return Array.from({length: totalPages},(_,i) => i+1).map((pageNumber) =>
        (
            <li key={pageNumber} className={pageNumber === currentPage ? "activepagination" : ""}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={()=> onPageChange(currentPage-1)} disabled={currentPage===1}>Previous</button>
        </li>
        <div className='flex gap-1'>{renderPagination()}</div>
        <li>
            <button onClick={() => onPageChange(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
        </li>
        
    </ul>
  )
}

export default Pagination