import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyPostedTasks = () => {
    const { user } = useContext(AuthContext);
    const allTasks = useLoaderData();

    // Make myTasks a state variable
    const [myTasks, setMyTasks] = useState(
        allTasks.filter(task => task.userEmail === user?.email)
    );

    // SweetAlert handlers
    const handleUpdate = (task) => {
        Swal.fire({
            title: 'Update Task',
            text: `You clicked update for "${task.title}"`,
            icon: 'info',
            confirmButtonColor: "#f472b6",
            background: "#fff0f5",
            color: "#333"
        });
    };

    const handleDelete = (task) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to delete "${task.title}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#a1a1aa",
            confirmButtonText: 'Yes, delete it!',
            background: "#fff0f5",
            color: "#333"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/tasks/${task._id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your task has been deleted.",
                            icon: "success"
                        });
                        // Update state to remove deleted task
                        const remainingTasks = myTasks.filter(t => t._id !== task._id);
                        setMyTasks(remainingTasks);
                    }
                });
            }
        });
    };

    const handleViewBids = (task) => {
        Swal.fire({
            title: 'View Bids',
            text: `Show bids for "${task.title}" (implement navigation or modal here)`,
            icon: 'info',
            confirmButtonColor: "#f472b6",
            background: "#fff0f5",
            color: "#333"
        });
    };

    return (
        <div className="px-4 py-10 max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-pink-600 dark:text-pink-300 mb-10 text-center drop-shadow-lg">My Posted Tasks</h2>
            {
                myTasks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {myTasks.map(task => (
                            <div
                                key={task._id}
                                className="bg-white dark:bg-gray-900 shadow-2xl hover:shadow-pink-200 dark:hover:shadow-pink-400/40 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-7 border border-pink-100 dark:border-pink-300 relative overflow-hidden"
                            >
                                <div className="absolute -top-4 -right-4 opacity-10 text-pink-400 text-8xl pointer-events-none select-none">★</div>
                                <h3 className="text-2xl font-bold mb-2 text-pink-600 dark:text-pink-300">{task.title}</h3>
                                <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3">{task.description}</p>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-green-600 dark:text-green-300 font-bold text-lg">${task.budget}</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                                        {new Date(task.deadline).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-semibold shadow">
                                        {task.category}
                                    </span>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <button
                                        onClick={() => handleUpdate(task)}
                                        className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-white font-semibold px-4 py-1.5 rounded-full shadow transition-all duration-200"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(task)}
                                        className="bg-red-500 cursor-pointer hover:bg-red-700 text-white font-semibold px-4 py-1.5 rounded-full shadow transition-all duration-200"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleViewBids(task)}
                                        className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded-full shadow transition-all duration-200"
                                    >
                                        Bids
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-8">You haven't posted any tasks yet.</p>
                )
            }
        </div>
    );
};

export default MyPostedTasks;