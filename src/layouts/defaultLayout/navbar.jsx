import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    closeMobileMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [isMobileMenuOpen]);

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2 border">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img src={Logo} className="h-20 sm:h-16" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">

                <li>
                  <a
                    href="#"
                    className={`block py-2 pr-4 pl-4 text-xl ${currentPage.name === 'home' ?'text-violet-700' : ' text-gray-700'} hover:text-violet-700 
                      `}
                    onClick={() => handlePageChange({ name: 'home' })}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block py-2 pr-4 pl-4 text-xl ${currentPage.name === 'about' ? 'text-violet-700' : ' text-gray-700'} hover:text-violet-700 
                      `}
                    onClick={() => handlePageChange({ name: 'about' })}
                  >
                    About
                  </a>
                </li>


              </ul>
            </div>
          </div>
        </nav>


      </header>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed bg-gray-800 w-full h-full top-16 left-0 opacity-50 z-10 mt-14"
            onClick={closeMobileMenu}
          ></div>
          <div
            className="fixed bg-white w-full lg:hidden transition-all duration-300 mt-0 z-20"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-800 hover:bg-gray-50 dark:text-white"
                  aria-current="page"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-800 hover:bg-gray-50 dark:text-white"
                  aria-current="page"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3  text-gray-800 hover:bg-gray-50 dark:text-white"
                  aria-current="page"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
