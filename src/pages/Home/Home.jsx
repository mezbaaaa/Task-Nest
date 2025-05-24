import React from 'react';
import Banner from '../../components/Banner/Banner';
import Tasks from './Tasks';
import { useLoaderData } from 'react-router';
import OurService from './OurService';

const Home = () => {
    const tasksData = useLoaderData();
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
            <OurService></OurService>
        </div>
    );
};

export default Home;