import React from 'react';

const MyPostedTasks = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold text-pink-600 dark:text-pink-300 mb-2">My Posted Tasks</h1>
            <div className="card bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-pink-200 dark:border-pink-400 p-6 max-sm:p-2 w-full mx-auto my-10 max-w-sm shrink-0 rounded-2xl">
                <form className="fieldset flex flex-col gap-2">
                    <label className="label text-gray-700 dark:text-gray-200">Search My Tasks</label>
                    <input type="text" name='search' className="input focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-pink-200 dark:border-pink-400" placeholder="Search My Tasks" />
                    <button type='submit' className='btn btn-primary'>Search</button>
                </form>
            </div>
        </div>
    );
};

export default MyPostedTasks;