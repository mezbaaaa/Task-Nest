import React from 'react';
import { FaUsers, FaBriefcase, FaStar } from 'react-icons/fa';
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <section className="py-12 px-4">
            <h2 className="text-3xl font-extrabold text-center mb-8 drop-shadow-lg tracking-tight">
                Platform Stats
            </h2>
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center rounded-xl shadow-md px-8 py-6 border border-pink-100 dark:border-pink-300 min-w-[180px]">
                    <FaUsers className="text-pink-500 text-3xl mb-2" />
                    <div className="text-2xl font-bold mt-1">
                        <CountUp end={1200} duration={2} separator="," />+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">Workers</div>
                </div>
                <div className="flex flex-col items-center rounded-xl shadow-md px-8 py-6 border border-pink-100 dark:border-pink-300 min-w-[180px]">
                    <FaBriefcase className="text-pink-500 text-3xl mb-2" />
                    <div className="text-2xl font-bold mt-1">
                        <CountUp end={3500} duration={2} separator="," />+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">Tasks Completed</div>
                </div>
                <div className="flex flex-col items-center rounded-xl shadow-md px-8 py-6 border border-pink-100 dark:border-pink-300 min-w-[180px]">
                    <FaStar className="text-pink-500 text-3xl mb-2" />
                    <div className="text-2xl font-bold mt-1">
                        <CountUp end={2800} duration={2} separator="," />+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">Total Reviews</div>
                </div>
            </div>
        </section>
    );
};

export default Stats;