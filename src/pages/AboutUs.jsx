import React from "react";

const AboutUs = () => (
    <div className="max-w-4xl mx-auto my-12 px-4 py-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-6 text-center">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-4 text-center">
            <b>TaskNest</b> is a modern freelance task marketplace connecting clients and freelancers for seamless project collaboration. 
            Our mission is to empower individuals and businesses to get work done efficiently, securely, and transparently.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
                <h2 className="text-2xl font-semibold text-pink-500 mb-2">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    To be the most trusted platform for freelance work, where talent meets opportunity and every project is a success story.
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-pink-500 mb-2">Why Choose Us?</h2>
                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300">
                    <li>Secure and easy task posting & bidding</li>
                    <li>Verified freelancers and clients</li>
                    <li>Modern, user-friendly interface</li>
                    <li>Responsive support and community</li>
                </ul>
            </div>
        </div>
        <div className="mt-10 text-center">
            <span className="inline-block bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-200 px-6 py-2 rounded-full font-semibold">
                Join TaskNest and experience the future of freelance work!
            </span>
        </div>
    </div>
);

export default AboutUs;