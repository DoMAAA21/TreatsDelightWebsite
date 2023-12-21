import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';


const DefaultLayout =  () => {
    

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default DefaultLayout;
