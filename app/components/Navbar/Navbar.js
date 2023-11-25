import React from 'react'
import Link from 'next/link'
import { FaTwitter,FaTiktok ,FaInstagram ,FaRegUser ,FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className='container lg:p-4 px-6  border-box  bg-[#212122] text-white  font-bold lg:flex items-center hidden lg:block'>
    <div className="links flex-1 ">
    <ul className='list-none flex text-md'>
    <Link href="#" className="group text-white transition duration-300 px-2">
        <li className="hover:text-[#e1c200]">brands</li>
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-[#e1c200]'></span>
    </Link>
    <Link href="#" className="group text-white transition duration-300 px-2">
        <li className="hover:text-[#e1c200]">shop</li>
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-[#e1c200]'></span>
    </Link>
    <Link href="#" className="group text-white transition duration-300 px-2">
        <li className="hover:text-[#e1c200]">premium</li>
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-[#e1c200]'></span>
    </Link>
    <Link href="#" className="group text-white transition duration-300 mx-5">
        <li className="hover:text-[#e1c200]">gift cards</li>
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-[#e1c200]'></span>
    </Link>
   
    </ul>
  

      
    </div>
    <div className="logo p-3 flex flex-1 justify-center items-center text-4xl italic text-[#e1c200]">
    <p>brava</p>
    </div>
    <div className="icons flex-1 hidden lg:block">
    <ul className='list-none flex'>
    <Link href="#" className="group text-white transition duration-300 ">
        <li className="hover:text-[#e1c200]"> become an affiliate</li>
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-[#e1c200]'></span>
    </Link>
     <div className='flex items-center justify-center [&_li]:mx-2 text-lg cursor-pointer '>
     <li className='hover:text-[#e1c200] pl-3'><FaTwitter /></li>
       <li className='hover:text-[#e1c200]'><FaTiktok /></li>
       <li className='hover:text-[#e1c200]'><FaInstagram /></li> 
       <li className='hover:text-[#e1c200]'><FaRegUser /></li>
       <li className='hover:text-[#e1c200]'><FaSearch /></li> 
       <li className='hover:text-[#e1c200]'><FiShoppingBag /></li>
     </div>
    </ul>
    </div>
    </div>
  )
}

export default Navbar