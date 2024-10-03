import React from 'react'

const CategorySelection = ({onSelectCategory,activeCategory}) => {
    let categories = ["Health","Fintech","Startups","AI","Security","Enterprise","Growth","Apps","Work","Gadgets","Tech"]
  return (
    <div className='px-4 mb-8 lg:space-x-12 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
        <button onClick={() => onSelectCategory(null)} className={`lg:ml-12 mr-2 ${activeCategory ? "" : "active-button"}`}>All</button>
        {
            categories.map(category => (
                <button 
                    onClick={() => onSelectCategory(category)} 
                    key={category}
                    className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}
                >
                    {category}
                </button>
            ))
        }
    </div>
  )
}

export default CategorySelection