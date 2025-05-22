import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-pink-200 dark:border-pink-400 p-6 max-sm:p-2 w-full mx-auto my-10 max-w-sm shrink-0 rounded-2xl">
            <h1 className="text-3xl text-center font-bold text-pink-600 dark:text-pink-300 mb-2">Welcome Back!</h1>
            <div className="card-body text-gray-800 dark:text-gray-200">
                <form className="fieldset flex flex-col gap-2">
                    <label className="label text-gray-700 dark:text-gray-200">Email</label>
                    <input type="email" name='email' className="input focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-400" placeholder="Email" />
                    <label className="label text-gray-700 dark:text-gray-200">Password</label>
                    <input type="password" name='password' className="input focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-400" placeholder="Password" />
                    <div className="flex justify-end">
                        <a className="link link-hover text-pink-500 dark:text-pink-300 text-sm">Forgot password?</a>
                    </div>
                    <button className=" py-2 rounded-md text-base font-medium cursor-pointer bg-pink-500 hover:bg-pink-500 text-white border-none mt-4 transition">Login</button>
                </form>
                <div className='border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer text-center w-full py-2 mt-2 hover:bg-pink-50 dark:hover:bg-gray-700 transition text-gray-700 dark:text-white'>
                    <p className='flex justify-center font-medium text-base items-center gap-2'>
                        <FcGoogle size={21} />Login with Google
                    </p>
                </div>
                <p className='font-medium mt-4 text-center text-gray-800 dark:text-gray-200'>
                    New here?{' '}
                    <Link to="/signup" className='text-pink-600 dark:text-pink-300 underline hover:text-pink-800 dark:hover:text-pink-400 transition'>
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
