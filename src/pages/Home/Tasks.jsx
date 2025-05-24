import React from 'react';
import Swal from 'sweetalert2';

const Tasks = ({ tasks = [], onBid }) => {
    // Only show the first 6 tasks
    const displayTasks = tasks.slice(0, 6);

    return (
        <>
            {displayTasks.map((task) => {
                const { title, description, budget, deadline, category, _id, id } = task;

                const handleBid = () => {
                    if (onBid) {
                        onBid(task);
                    } else {
                        Swal.fire({
                            title: 'Bid Placed!',
                            html: `You have placed a bid for <span class="font-bold">${title}</span>.`,
                            icon: 'success',
                            confirmButtonColor: "#f472b6",
                            background: "#fff0f5",
                            color: "#333"
                        });
                    }
                };

                return (
                    <div
                        key={_id || id || title}
                        className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 transition hover:shadow-2xl border border-pink-100 dark:border-pink-300"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-pink-600 dark:text-pink-300">{title}</h2>
                        <p className="text-gray-700 dark:text-gray-200 mb-4">{description}</p>
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
                                onClick={handleBid}
                                className="ml-auto bg-pink-400 hover:bg-pink-600 text-white font-semibold px-5 py-1.5 rounded-full shadow transition-all duration-200 cursor-pointer"
                            >
                                Bid Now
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Tasks;