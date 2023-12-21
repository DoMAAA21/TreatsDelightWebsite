import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sideBar';

const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="ml-64 p-4">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
