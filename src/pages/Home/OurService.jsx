import React from 'react';
import { FaTasks, FaUserShield, FaRocket, FaHandshake, FaRegSmile, FaRegClock } from 'react-icons/fa';

const OurService = () => {
    return (
        <section className="py-12 px-4">
            <h2 className="text-4xl font-extrabold text-center text-pink-600 dark:text-pink-300 mb-4 drop-shadow-lg">
                Our Services
            </h2>
            <p className="text-center mb-12 max-w-2xl mx-auto">
                Empowering freelancers and clients with a seamless, secure, and efficient task marketplace experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-4 max-w-6xl mx-auto">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-pink-200 dark:hover:shadow-pink-400/40 transition-all duration-300 p-8 flex flex-col items-center text-center border border-pink-100 dark:border-pink-300">
                    <FaTasks className="text-pink-500 text-4xl mb-3" />
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300 mb-2">Post & Manage Tasks</h3>
                    <p className="text-gray-600 dark:text-gray-200">Easily post freelance tasks, set deadlines, and manage your projects in one place.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-pink-200 dark:hover:shadow-pink-400/40 transition-all duration-300 p-8 flex flex-col items-center text-center border border-pink-100 dark:border-pink-300">
                    <FaUserShield className="text-pink-500 text-4xl mb-3" />
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300 mb-2">Secure Authentication</h3>
                    <p className="text-gray-600 dark:text-gray-200">Sign up or log in securely with Email/Password or Google using Firebase Authentication.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-pink-200 dark:hover:shadow-pink-400/40 transition-all duration-300 p-8 flex flex-col items-center text-center border border-pink-100 dark:border-pink-300">
                    <FaRocket className="text-pink-500 text-4xl mb-3" />
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300 mb-2">Fast Bidding</h3>
                    <p className="text-gray-600 dark:text-gray-200">Browse tasks and place bids instantly. Get your work done faster with real-time updates.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-pink-200 dark:hover:shadow-pink-400/40 transition-all duration-300 p-8 flex flex-col items-center text-center border border-pink-100 dark:border-pink-300">
                    <FaHandshake className="text-pink-500 text-4xl mb-3" />
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300 mb-2">Easy Collaboration</h3>
                    <p className="text-gray-600 dark:text-gray-200">Communicate and collaborate with freelancers and clients for seamless project delivery.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-pink-200 dark:hover:shadow-pink-400/40 transition-all duration-300 p-8 flex flex-col items-center text-center border border-pink-100 dark:border-pink-300">
                    <FaRegSmile className="text-pink-500 text-4xl mb-3" />
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300 mb-2">User-Friendly UI</h3>
                    <p className="text-gray-600 dark:text-gray-200">Enjoy a modern, responsive, and intuitive interface powered by Tailwind CSS & React.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-pink-200 dark:hover:shadow-pink-400/40 transition-all duration-300 p-8 flex flex-col items-center text-center border border-pink-100 dark:border-pink-300">
                    <FaRegClock className="text-pink-500 text-4xl mb-3" />
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300 mb-2">Deadline Reminders</h3>
                    <p className="text-gray-600 dark:text-gray-200">Stay on track with automated deadline reminders and notifications for your tasks.</p>
                </div>
            </div>
        </section>
    );
};

export default OurService;