import React, { useState, useEffect } from 'react';
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
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center justify-between mt-2 px-6 py-4"
      >
        {/* Logo on the left */}
        <div className="font-poppins text-2xl font-semibold leading-none text-gray-900">
          <span className="text-blue-600">QR</span>
          <span>Quick</span>
        </div>

        {/* Desktop Menu shown from md breakpoint */}
        <ul className="hidden md:flex space-x-8 xl:space-x-10 text-black font-medium font-inter ml-auto">
          <a href="#hero" className="cursor-pointer hover:text-blue-500">Home</a>
          <a href="#products" className="cursor-pointer hover:text-blue-500">Product</a>
          <a href="#solutions" className="cursor-pointer hover:text-blue-500">Solutions</a>
          <a href="#Tips" className="cursor-pointer hover:text-blue-500">Tips</a>
        </ul>

        {/* Hamburger for Mobile (below md) */}
        <div className="block md:hidden">
          <button onClick={() => setSidebarOpen(true)} className="focus:outline-none" aria-label="Open sidebar menu">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Overlay to prevent background scroll and clicks */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setSidebarOpen(false)}
          onTouchMove={e => e.preventDefault()}
          onWheel={e => e.preventDefault()}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <span className="text-2xl font-bold">Menu</span>
          <button onClick={() => setSidebarOpen(false)} className="text-2xl text-gray-600 hover:text-black" aria-label="Close sidebar menu">
            ✕
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 space-y-6 text-black font-medium text-lg">
          <a href="#hero" onClick={() => setSidebarOpen(false)} className="hover:text-blue-500">Home</a>
          <a href="#products" onClick={() => setSidebarOpen(false)} className="hover:text-blue-500">Products</a>
          <a href="#solutions" onClick={() => setSidebarOpen(false)} className="hover:text-blue-500">Solutions</a>
          <a href="#Tips" onClick={() => setSidebarOpen(false)} className="hover:text-blue-500">Tips</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
