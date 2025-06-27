import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const TaskDetails = () => {
    const task = useLoaderData();
    const navigate = useNavigate();

    if (!task || task.error) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <span className="text-red-500 text-xl font-semibold">Task not found.</span>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto my-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 rounded bg-pink-100 dark:bg-gray-800 text-pink-600 dark:text-pink-300 font-semibold hover:bg-pink-200 dark:hover:bg-gray-700 transition cursor-pointer"
            >
                &larr; Back
            </button>
            {task.image && (
                <img
                    src={task.image}
                    alt={task.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
            )}
            <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-300 mb-4">{task.title}</h1>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{task.description}</p>
            <div className="flex flex-wrap gap-4 mb-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                    {task.category}
                </span>
                <span className="text-green-600 dark:text-green-300 font-bold">
                    ${task.budget}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                    Deadline: {new Date(task.deadline).toLocaleDateString()}
                </span>
            </div>
        </div>
    );
};

export default TaskDetails;