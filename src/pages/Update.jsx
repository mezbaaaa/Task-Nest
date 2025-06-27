import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
    const navigate = useNavigate();
    const updatedTask = useLoaderData();
    console.log("Updated Task:", updatedTask);
    const { _id, title, description, budget, deadline } = updatedTask;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newUpdatedTask = Object.fromEntries(formData.entries());

        // Make sure deadline is in proper ISO format before sending
        newUpdatedTask.deadline = new Date(newUpdatedTask.deadline).toISOString();

        fetch(
            `https://freelance-task-marketplace-server-pi.vercel.app/update-task/${_id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUpdatedTask),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your task has been updated.",
                        icon: "success",
                    });
                    navigate("/my_posted_tasks");
                }
            });
    };

    return (
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 mt-10 border border-pink-100 dark:border-pink-300">
            <Helmet>
                <title>Update | TaskNest</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-300 mb-6 text-center">
                Update Task
            </h2>
            <form className="space-y-5" onSubmit={handleUpdate}>
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={title}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
                        Description
                    </label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
                        rows={4}
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
                        Budget
                    </label>
                    <input
                        type="number"
                        name="budget"
                        defaultValue={budget}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
                        Deadline
                    </label>
                    <input
                        type="date"
                        name="deadline"
                        defaultValue={
                            deadline && !isNaN(new Date(deadline))
                                ? new Date(deadline).toISOString().split("T")[0]
                                : ""
                        }
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 shadow"
                >
                    Update Task
                </button>
            </form>
        </div>
    );
};

export default Update;
