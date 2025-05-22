import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;