import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

useEffect(() => {
  if (sidebarOpen) {
    document.body.classList.add('sidebar-lock');
  } else {
    document.body.classList.remove('sidebar-lock');
  }

  return () => {
    document.body.classList.remove('sidebar-lock');
  };
}, [sidebarOpen]);


  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* ✅ Replaced with lightweight fade-up animation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center justify-between mt-2 px-6 py-4"
      >
        <div className='font-poppins text-xl'>
          <span className="font-bold">QRCode</span>{' '}
          <span className="font-normal">Quick</span>
        </div>

        {/* Hamburger for Mobile */}
        <div className="block lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="focus:outline-none">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 xl:space-x-10 text-black font-medium font-inter">
          <a href="#products" className="cursor-pointer hover:text-blue-500">Product</a>
          <a href="#solutions" className="cursor-pointer hover:text-blue-500">Solutions</a>
          <a href="#blog" className="cursor-pointer hover:text-blue-500">Blog</a>
          <a href="#pricing" className="cursor-pointer hover:text-blue-500">Pricing</a>
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="font-inter w-32 border border-blue-600 text-blue-600 px-4 py-2 rounded-xl text-sm hover:bg-blue-100 transition duration-300">
            Try for Free
          </button>
          <button className="font-inter w-32 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </div>
      </motion.nav>

    {/* Sidebar */}
<div
  className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}

>
  <div className="flex items-center justify-between px-6 py-5 border-b">
    <span className="text-2xl font-bold">Menu</span>
    <button onClick={() => setSidebarOpen(false)} className="text-2xl text-gray-600 hover:text-black">
      ✕
    </button>
  </div>

  <ul className="flex flex-col px-6 py-6 space-y-6 text-black font-medium text-lg">
    <a href="#products" onClick={() => setSidebarOpen(false)} className="hover:text-blue-500">Product</a>
    <a href="#solutions" onClick={() => setSidebarOpen(false)} className="hover:text-blue-500">Solutions</a>
    <a href="#blog" onClick={() => setSidebarOpen(false)} className="hover:text-blue-500">Blog</a>
    <a href="#pricing" onClick={() => setSidebarOpen(false)} className="hover:text-blue-500">Pricing</a>

    <button className="w-full mt-8 border border-blue-600 text-blue-600 px-5 py-3 rounded-xl text-base hover:bg-blue-100 transition duration-300">
      Try for Free
    </button>
    <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl text-base hover:bg-blue-700 transition duration-300">
      Login
    </button>
  </ul>
</div>
    </div>
  );
};

export default Navbar;
