import React, { useState } from "react";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-2xl mx-auto my-12 px-4 py-10 bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl">
            <h1 className="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-6 text-center">Contact Us</h1>
            <p className="text-center text-gray-700 dark:text-gray-200 mb-8">
                Have a question or need support? Fill out the form below and our team will get back to you soon.
            </p>
            {submitted ? (
                <div className="text-green-600 text-center font-semibold py-8">
                    Thank you for contacting us! We will respond as soon as possible.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex-1">
                            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Your Name</label>
                            <input
                                type="text"
                                required
                                className=" focus:outline-none input input-bordered w-full bg-white dark:bg-gray-900 border-pink-200 dark:border-pink-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Your Email</label>
                            <input
                                type="email"
                                required
                                className=" focus:outline-none input input-bordered w-full bg-white dark:bg-gray-900 border-pink-200 dark:border-pink-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Message</label>
                        <textarea
                            required
                            className=" focus:outline-none textarea textarea-bordered w-full bg-white dark:bg-gray-900 border-pink-200 dark:border-pink-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
                            rows={5}
                            placeholder="Type your message here"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-semibold px-10 py-2 rounded-full shadow-lg transition-all duration-200"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Contact;