import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default Root;