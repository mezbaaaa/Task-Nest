import React from 'react';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center my-14">
            <Banner></Banner>
            <div >
                <p className='text-2xl font-bold'>Welcome to the home page!</p>
            </div>
        </div>
    );
};

export default Home;