import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="items-center">
    <div className="bg-white w-full px-4 py-3 flex justify-evenly fixed z-50">
      <div className="w-full flex justify-between sm:px-10 px-6 items-center">
        <Link to="/" className="flex">
          <img src="/assets/nav_logo.png" alt="logo" className="h-16 ml-4" />
        </Link>
        <div className="flex-row">
          <Link to="/login" className="ml-2 px-6 py-3 rounded-xl text-sm text-prime border border-prime font-bold cursor-pointer hover:bg-gray-100">
            <span>LOGIN</span>
          </Link>
          <Link to="/signup" className="ml-2 px-6 py-3 rounded-xl text-sm text-white bg-prime border border-prime font-bold cursor-pointer hover:bg-indigo-700 hover:border-indigo-700">
            <span>SIGNUP</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
