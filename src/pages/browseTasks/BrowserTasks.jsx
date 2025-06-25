import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
import { Helmet } from 'react-helmet';

const BrowserTasks = () => {
    const tasksData = useLoaderData();
    const { loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] w-full">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
            </div>
        );
    }

    const handleBid = (task) => {
        Swal.fire({
            title: 'Bid Placed!',
            html: `You have placed a bid for <span class="font-bold">${task.title}</span>.`,
            icon: 'success',
            confirmButtonColor: "#f472b6",
            background: "#fff0f5",
            color: "#333"
        });
    };

    return (
        <div className=" px-4 py-10">
            <Helmet>
                <title>Browse Task | TaskNest</title>
            </Helmet>
            <h1 className="text-3xl font-extrabold text-pink-600 dark:text-pink-300 mb-10 text-center drop-shadow-lg">Browse All Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tasksData.length === 0 && (
                    <p className="col-span-full text-center text-3xl font-medium text-gray-500">No tasks available.</p>
                )}
                {tasksData.map(task => {
                    const { title, description, budget, deadline, category, _id, id } = task;
                    return (
                        <div
                            key={_id || id || title}
                            className="bg-white dark:bg-gray-900 shadow-2xl hover:shadow-pink-200 dark:hover:shadow-pink-400/40 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-7 border border-pink-100 dark:border-pink-300 relative overflow-hidden"
                        >
                            <div className="absolute -top-4 -right-4 opacity-10 text-pink-400 text-8xl pointer-events-none select-none">★</div>
                            <h2 className="text-2xl font-bold mb-2 text-pink-600 dark:text-pink-300">{title}</h2>
                            <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3">{description}</p>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-green-600 dark:text-green-300 font-bold text-lg">${budget}</span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">
                                    {new Date(deadline).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-semibold shadow">
                                    {category}
                                </span>
                                <button
                                    onClick={() => handleBid(task)}
                                    className="ml-auto bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
                                >
                                    Bid Now
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BrowserTasks;