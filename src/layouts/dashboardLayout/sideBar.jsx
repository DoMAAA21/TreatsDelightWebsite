import React from 'react';
import Logo from '../../assets/logo.png';

const Sidebar = () => {
    return (
      <div className="hidden lg:flex fixed bg-white w-64 h-full top-0 left-0 z-100 border-r border-gray-200">
        <ul className="flex flex-col font-medium p-2 w-full">
          <li className='mb-8'>
            <a href="#" className="flex items-center">
              <img src={Logo} className="h-20 sm:h-16" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">Treats Delight</span>
            </a>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <a
              href="#"
              className="block py-2 px-4 text-gray-600 hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <a
              href="#"
              className="block py-2 px-4 text-gray-600 hover:text-white"
            >
              Users
            </a>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>
    );
  };
  

  

export default Sidebar;
