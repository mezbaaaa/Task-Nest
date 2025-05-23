import React from 'react';
import errorPhoto from '../../assets/Illustration.png';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex h-screen items-center justify-center max-sm:flex-col-reverse max-sm:gap-10 max-sm:text-center sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="w-[400px]">
                <h1 className="text-6xl font-bold max-sm:hidden text-blue-600 dark:text-pink-400">Oops..!</h1>
                <p className="text-3xl font-medium mt-3 max-sm:text-4xl text-gray-800 dark:text-gray-100">Page not found</p>
                <p className="text-lg mt-3 text-gray-700 dark:text-gray-300">
                    This page doesn’t exist or was removed!<br />
                    We suggest you go back to home.
                </p>
                <Link
                    to="/"
                    className="bg-blue-500 dark:bg-pink-400 text-white px-4 py-2 rounded-md mt-5 inline-block hover:bg-blue-600 dark:hover:bg-pink-600 transition"
                >
                    Back to Home
                </Link>
            </div>
            <div className="w-[400px] max-sm:w-3/4">
                <img src={errorPhoto} alt="Error Illustration" className="drop-shadow-lg dark:drop-shadow-none" />
            </div>
        </div>
    );
};

export default Error;