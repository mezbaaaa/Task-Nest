import { Eye, EyeOff } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const SingUp = () => {
    const [show, setShow] = useState(false)
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSingUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const photo = formData.get('photo');
        const password = formData.get('password');
        const singUpUser = { name, email, photo, password };
        console.log(singUpUser);
    }

    const handleGoogleLogin = () => {
        googleSignIn().then(result => {
            const user = result.user;
            if (user) {
                Swal.fire({
                    title: "Login Successful",
                    text: "You are now logged in!",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: true,
                    confirmButtonColor: "#f472b6",
                    timerProgressBar: true
                });
                navigate('/');
            }
        })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-pink-200 dark:border-pink-400 p-6 max-sm:p-2 w-full mx-auto my-10 max-w-sm shrink-0 rounded-2xl">
            <h1 className="text-3xl text-center font-bold text-pink-600 dark:text-pink-300 mb-2">Create Account</h1>
            <div className="card-body text-gray-800 dark:text-gray-200">
                <form onSubmit={handleSingUp} className="fieldset flex flex-col gap-2">
                    <label className="label text-gray-700 dark:text-gray-200">Name</label>
                    <input type="text" name='name' className="input focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-400" placeholder="Name" />
                    <label className="label text-gray-700 dark:text-gray-200">Email</label>
                    <input type="email" name='email' className="input focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-400" placeholder="Email" />
                    <label className="label text-gray-700 dark:text-gray-200">Photo URL</label>
                    <input type="text" name='photo' className="input focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-400" placeholder="Photo URL" />
                    <div className='relative'>
                        <label className="label text-gray-700 dark:text-gray-200">Password</label>
                        <input
                            type={show ? 'text' : 'password'}
                            name='password'
                            className="input focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-400"
                            placeholder="Password" />
                        <span className='absolute right-3 bottom-2.5 cursor-pointer' onClick={() => setShow(!show)}>{show ? <Eye size={20} color='#f472b6' /> : <EyeOff size={20} color='#f472b6' />} </span>
                    </div>
                    <button className=" py-2 rounded-md text-base font-medium cursor-pointer bg-pink-500 hover:bg-pink-500 text-white border-none mt-6 transition">Sign Up</button>
                </form>
                <div onClick={handleGoogleLogin} className='border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer text-center w-full py-2 mt-2 hover:bg-pink-50 dark:hover:bg-gray-700 transition text-gray-700 dark:text-white'>
                    <p  className='flex justify-center font-medium text-base items-center gap-2'>
                        <FcGoogle size={21} />Login with Google
                    </p>
                </div>
                <p className='font-medium mt-4 text-center text-gray-800 dark:text-gray-200'>
                    Already have an account?{' '}
                    <Link to="/login" className='text-pink-600 dark:text-pink-300 underline hover:text-pink-800 dark:hover:text-pink-400 transition'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SingUp;