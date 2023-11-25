"use client";

import React, { useState } from "react";
import {
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaRegUser,
  FaSearch,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="-mr-2 -my-2 md:hidden h-22 w-full bg-[#212122] p-2 mt-[1px]">
        <div className="flex items-center justify-between px-2">
          <div className="-mr-2">
            {open ? (
              <>
                <button
                  type="button"
                  className=" rounded-md p-2 inline-flex items-center justify-center  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset "
                  onClick={handleOpen}
                >
                  {/* close btn */}
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <button
                type="button"
                className=" rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:bg-[#212122]"
                onClick={handleOpen}
              >
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
          </div>
          <p className="text-4xl italic text-[#e1c200]">brava</p>

          <ul className="flex text-lg text-white">
            <li className="hover:text-[#e1c200]">
              <FaSearch />
            </li>
            <li className="hover:text-[#e1c200] ml-3">
              <FiShoppingBag />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          open
            ? "opacity-100 scale-100  ease-out duration-300 absolute top-0 inset-x-0 mt-[97px] transition transform origin-bottom md:hidden z-10"
            : "opacity-0 scale-0 absolute top-22 inset-x-0 p-2 transition transform origin-bottom  md:hidden"
        }
      >
        <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-[#212122] text-white divide-y-2 divide-gray-50  h-screen">
          <div className="pt-5 pb-6 px-5">
            <div className="mt-6">
              <nav className="grid gap-y-6">
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:text-gray-300"
                >
                  <span className="text-white text-2xl ">brand</span>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:text-gray-300"
                >
                  <span className="text-white text-2xl ">shop</span>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:text-gray-300"
                >
                  <span className="text-white text-2xl ">gift cards</span>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:text-gray-300"
                >
                  <span className="text-white text-2xl ">premium</span>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:text-gray-300"
                >
                  <span className="text-white text-2xl ">become an  affiliate</span>
                </a>

                {/* bottom part of nav */}


        <div className="icons">
<ul className="flex text-lg ">
<li className='hover:text-[#e1c200]'><FaTwitter /></li>
       <li className='hover:text-[#e1c200] mx-2'><FaTiktok /></li>
       <li className='hover:text-[#e1c200] mx-2'><FaInstagram /></li> 
</ul>
        </div>
                {/* <div className="">
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Docs
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Enterprise
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Help Center
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Guides
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Security
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Events
          </a>
        </div>
        <div>
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign up
          </a>
          <p className="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div> */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNav;
