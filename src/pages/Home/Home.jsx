import React, { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import Tasks from './Tasks';
import { useLoaderData } from 'react-router';
import OurService from './OurService';
import HowItsWork from './HowItsWork';
import Stats from './Starts';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
    const tasksData = useLoaderData();
    const { loading } = useContext(AuthContext);

    // Show loader while auth or data is loading
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] w-full">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
            </div>
        );
    }

    // Sort tasks by deadline (earliest first)
    const sortedTasks = [...tasksData].sort(
        (a, b) => new Date(a.deadline) - new Date(b.deadline)
    );

    return (
        <div className="flex flex-col items-center justify-center my-10">
            <Banner />
            <div>
                <div>
                    <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-300 my-6 text-center">
                        Latest Freelance Tasks
                    </h2>
                    {
                        sortedTasks.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                <Tasks tasks={sortedTasks} />
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 mt-8">No tasks available at the moment.</p>
                        )
                    }
                </div>
            </div>
            <OurService />
            <HowItsWork />
            <Stats />
        </div>
    );
};

export default Home;