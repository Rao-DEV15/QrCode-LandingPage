import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className='font-poppins text-2xl'>
          <span className="font-bold">QRCode</span>{' '}
          <span className="font-normal">Quick</span>
        </div>
      </div>
    </header>
  );
};

export default Header;