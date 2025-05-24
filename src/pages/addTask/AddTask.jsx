import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const categories = [
    "Web Development",
    "Design",
    "Writing",
    "Marketing",
    "Data Entry",
    "Video Editing",
    "Other"
];

const handleSubmit = e => {
    e.preventDefault();


const AddTask = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="px-4">
            <div className="text-center my-8">
                <h1 className="text-4xl md:text-5xl font-semibold text-pink-600 dark:text-pink-300">Add New Task</h1>
                <p className="mt-4 max-w-2xl dark:text-gray-300 mx-auto">
                    Post your task and connect with top freelancers. Fill in the details below to get started!
                </p>
            </div>
            <form onSubmit={handleSubmit} className="border border-pink-200 dark:border-pink-300 bg-white dark:bg-gray-900 p-6 rounded-xl max-w-2xl mx-auto shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Task Title */}
                    <fieldset className="fieldset bg-pink-50 dark:bg-gray-800  rounded-lg w-full border p-4">
                        <label className="label text-gray-700 dark:text-gray-200">Task Title</label>
                        <input
                            type="text"
                            name="title"
                            className="input w-full focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-300"
                            placeholder="Enter task title"
                            required
                        />
                    </fieldset>
                    {/* Category */}
                    <fieldset className="fieldset bg-pink-50 dark:bg-gray-800 rounded-lg w-full border p-4">
                        <label className="label text-gray-700 dark:text-gray-200">Category</label>
                        <select
                            name="category"
                            className="input w-full focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-300"
                            required
                        >
                            <option value="">Select category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </fieldset>
                    {/* Deadline */}
                    <fieldset className="fieldset bg-pink-50 dark:bg-gray-800 rounded-lg w-full border p-4">
                        <label className="label text-gray-700 dark:text-gray-200">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            className="input w-full focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-300"
                            required
                        />
                    </fieldset>
                    {/* Budget */}
                    <fieldset className="fieldset bg-pink-50 dark:bg-gray-800  rounded-lg w-full border p-4">
                        <label className="label text-gray-700 dark:text-gray-200">Budget ($)</label>
                        <input
                            type="number"
                            name="budget"
                            min="1"
                            className="input w-full focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-300"
                            placeholder="Enter your budget"
                            required
                        />
                    </fieldset>
                </div>
                {/* Description */}
                <fieldset className="fieldset bg-pink-50 dark:bg-gray-800 rounded-lg w-full border p-4 mt-6">
                    <label className="label text-gray-700 dark:text-gray-200">Description</label>
                    <textarea
                        name="description"
                        rows={7}
                        className="input w-full focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-300 resize-none"
                        placeholder="Describe what needs to be done"
                        required
                    ></textarea>
                </fieldset>
                {/* User Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <fieldset className="fieldset bg-pink-50 dark:bg-gray-800 rounded-lg w-full border p-4">
                        <label className="label text-gray-700 dark:text-gray-200">Your Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={user?.displayName || ""}
                            readOnly
                            className="input w-full focus:outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-300 cursor-not-allowed"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-pink-50 dark:bg-gray-800  rounded-lg w-full border p-4">
                        <label className="label text-gray-700 dark:text-gray-200">Your Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            defaultValue={user?.email || ""}
                            readOnly={!!user?.email}
                            className={`input w-full focus:outline-none ${user?.email ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed' : 'bg-white dark:bg-gray-900'} text-gray-800 dark:text-white border border-pink-200 dark:border-pink-300`}
                            placeholder="Enter your email"
                            required
                        />
                    </fieldset>
                </div>
                {/* Add Button */}
                <div className="mt-8 flex justify-center">
                    <input
                        className="w-full md:w-1/2 py-3 border-none rounded-lg bg-pink-400 hover:bg-pink-600 text-white font-semibold text-lg cursor-pointer transition"
                        type="submit"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddTask;