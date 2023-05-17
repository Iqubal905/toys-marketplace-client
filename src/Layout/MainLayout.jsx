import React from 'react';
import Navbar from '../pages/Shared/NabBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=' bg-blue-50'>
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;