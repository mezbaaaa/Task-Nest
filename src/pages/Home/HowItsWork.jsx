import React from 'react';
import { FaUserPlus, FaClipboardList, FaGavel, FaCheckCircle } from 'react-icons/fa';

const HowItsWork = () => {
    return (
        <section className="py-16 px-4">
            <h2 className="text-4xl font-extrabold text-center mb-6 drop-shadow-lg tracking-tight">
                How It Works
            </h2>
            <p className="text-center mb-12 max-w-2xl mx-auto text-lg">
                Get started in just a few simple steps!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-pink-100 dark:border-pink-300 hover:scale-105 transition-transform duration-300">
                    <FaUserPlus className="text-pink-500 text-5xl mb-4" />
                    <h3 className="font-bold mb-2 text-xl">Sign Up</h3>
                    <p>Create your free account using email or Google.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-pink-100 dark:border-pink-300 hover:scale-105 transition-transform duration-300">
                    <FaClipboardList className="text-pink-500 text-5xl mb-4" />
                    <h3 className="font-bold mb-2 text-xl">Post or Browse Tasks</h3>
                    <p>Post your own tasks or browse available projects.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-pink-100 dark:border-pink-300 hover:scale-105 transition-transform duration-300">
                    <FaGavel className="text-pink-500 text-5xl mb-4" />
                    <h3 className="font-bold mb-2 text-xl">Bid & Collaborate</h3>
                    <p>Place bids or accept offers and start collaborating.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-pink-100 dark:border-pink-300 hover:scale-105 transition-transform duration-300">
                    <FaCheckCircle className="text-pink-500 text-5xl mb-4" />
                    <h3 className="font-bold mb-2 text-xl">Complete & Review</h3>
                    <p>Finish the task, leave a review, and grow your profile.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItsWork;