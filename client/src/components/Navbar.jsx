import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

//react icons
import { FaFacebook,FaDribbble,FaTwitter,FaBars,FaXmark } from "react-icons/fa6";
import Modal from './Modal';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen,setIsModalOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    console.log(isModalOpen)

    //NavItems
    const navItems = [
        {path: "/",link: "Home"},
        {path: "/services",link: "Services"},
        {path: "/about",link: "About"},
        {path: "/blogs",link: "Blogs"},
        {path: "/contact",link: "Contact"}
    ]

  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0 z-10'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between'>
            <a href="/" className='text-xl font-bold text-white'>Daily<span className='text-red-500'> Bugle</span></a>

            {/* navitems for lg devices */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path,link}) => (
                        <li key={path} className='text-white'>
                            <NavLink className={({isActive,isPending}) => 
                                isActive 
                                    ? "active"
                                    : isPending 
                                    ? "pending" 
                                    : ""
                            } 
                            to={path}>
                                {link}
                            </NavLink>
                        </li>
                    )
                )}
            </ul>

            {/* menu items */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className='hover:text-red-500'><FaFacebook/></a>
                <a href="/" className='hover:text-red-500'><FaDribbble/></a>
                <a href="/" className='hover:text-red-500'><FaTwitter/></a>
                <button onClick={openModal} className='bg-red-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-red-500 transition-all duration-200 ease-in'>Log in</button>
            </div>

            {/* our modal component is here */}
            <Modal isOpen = {isModalOpen} onClose={closeModal} />

            {/* mobile menu btn, display only on mobile */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                    }
                </button>
            </div>
        </nav>

        {/* menu items for mobile screen */}
        <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                    {
                        navItems.map(({path,link}) => (
                            <li key={path} className='text-black'>
                                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                            </li>
                        )
                    )}
            </ul>
        </div>
    </header>
  )
}

export default Navbar