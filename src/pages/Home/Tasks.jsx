import React from 'react';
import { useNavigate } from 'react-router';

const Tasks = ({ tasks = [] }) => {
    const navigate = useNavigate();
    // Only show the first 6 tasks
    const displayTasks = tasks.slice(0, 8);

    return (
        <>
            {displayTasks.map((task) => {
                const { title, budget, deadline, category, _id, id } = task;

                return (
                    <div className='px-4' key={_id || id}>
                        <div
                            className="bg-white dark:bg-gray-900 shadow-2xl hover:shadow-pink-200 dark:hover:shadow-pink-400/40 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-7 border border-pink-100 dark:border-pink-300 relative overflow-hidden"
                        >
                            <div className="absolute -top-4 -right-4 opacity-10 text-pink-400 text-8xl pointer-events-none select-none">★</div>
                            <h2 className="text-2xl font-bold mb-2 text-pink-600 dark:text-pink-300">{title}</h2>
                            {/* <p className="text-gray-700 dark:text-gray-200 mb-4">{description}</p> */}
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-green-600 dark:text-green-300 font-bold text-lg">${budget}</span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">
                                    {new Date(deadline).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                                    {category}
                                </span>
                                <button
                                    onClick={() => navigate(`/task/${_id || id}`)}
                                    className="ml-auto bg-pink-400 hover:bg-pink-600 text-white font-semibold px-5 py-1.5 rounded-full shadow transition-all duration-200 cursor-pointer"
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Tasks;