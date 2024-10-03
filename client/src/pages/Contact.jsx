import React, { useState } from 'react'
import contactImage from '../assets/contact.png'

const Contact = () => {
  const [contact,setContact] = useState({
    'fname':'',
    'email':'',
    'subject':'',
    'message': ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact({...contact,[name]:value})
  }
  return (
    <div>
      <div className='text-white text-center bg-black py-20 px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'><span className='text-red-500'>Contact</span> Page</h2>
      </div>

      {/* contact Page */}
      <div className='max-w-7xl mx-auto px-12 flex items-center gap-5'> 
        <div className='sm:block hidden'>
          <img src={contactImage} className='lg:w-[700px] md:w-[640px] sm:w-[580px] h-auto' alt="" />
        </div>
        <div className='flex-1'>
          <form action="contact" onSubmit={handleSubmit} className='my-5 text-base'>
            <div className='flex flex-col gap-4'>
              <label htmlFor="name" className='text-gray-500 font-semibold'>Full Name</label>
              <input 
                type="text" 
                placeholder='Full Name' 
                className='px-4 py-2 border rounded-sm  outline-[#077EFF]' 
                name='fname'
                onChange={handleChange}
              />
            </div>
            <div className='my-2 flex flex-col gap-4 mb-3'>
              <label htmlFor="email">Email Address</label>
              <input 
                type="text" 
                placeholder='johndoe@gmail.com' 
                className='px-4 py-2 border rounded-sm outline-[#077EFF]' 
                name='email'
                onChange={handleChange}
              />
            </div>
            <div className='my-2 flex flex-col gap-4 mb-3'>
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                placeholder='Enter your subject' 
                className='px-4 py-2 border rounded-sm outline-[#077EFF]' 
                name='subject'
                onChange={handleChange}
              />
            </div>
            <div className='my-2 flex flex-col gap-4 mb-5'>
              <label htmlFor="message">Message</label>
              <textarea 
                name="message" 
                id="message" 
                placeholder='Type your message' 
                className='px-4 py-2 border rounded-sm outline-[#077EFF]' 
                onChange={handleChange}
              />
            </div>
            <button className='px-8 py-2 rounded-md outline-none border-none text-white bg-[#077EFF]'>Submit</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Contact