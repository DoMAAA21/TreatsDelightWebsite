import React from 'react';
import Logo from '../../assets/logo.png';

const Sidebar = ({ isMobileMenuOpen, closeMobileMenu }) => {
  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50"
          onClick={closeMobileMenu}
        ></div>
      )}
      <div className={`lg:flex fixed bg-white  h-full top-0 left-0 z-50 border-r border-gray-200 ${isMobileMenuOpen ? 'block w-80' : 'hidden w-64'}`}>
        <ul className="flex flex-col font-medium p-2 w-full">
          <li className='mb-8 flex'>
            <a href="#" className="flex items-center">
              <img src={Logo} className="h-16 sm:h-16 ml-5" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800 font-title">Treats Delight</span>
            </a>
            <button className="text-gray-600 mr-4 ml-auto lg:hidden" onClick={closeMobileMenu}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </li>

          <li className="hover:bg-gray-400  text-gray-600 hover:text-white p-2 rounded">
            <a
              href="#"
              className="block py-2 px-4"
            >
              Dashboard
            </a>
          </li>
          <li className="hover:bg-gray-400  text-gray-600 hover:text-white p-2 rounded">
            <a
              href="#"
              className="block py-2 px-4"
              onClick={closeMobileMenu}
            >
              Users
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};




export default Sidebar;
