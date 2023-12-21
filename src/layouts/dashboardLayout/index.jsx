import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sideBar';


const DashboardLayout = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
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
            <Navbar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            <div className="flex">
                <div className="ml-64 p-4">
                <Sidebar isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
