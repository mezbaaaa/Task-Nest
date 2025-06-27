import React from "react";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle, FaFacebookMessenger } from "react-icons/fa";

const Support = () => (
    <div className="max-w-2xl mx-auto my-12 px-4 py-10 bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-6 text-center">Support</h1>
        <p className="text-center text-gray-700 dark:text-gray-200 mb-8">
            Need help? Our support team is here for you 24/7. Choose any of the options below to get in touch or find answers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6">
                <FaEnvelope className="text-pink-500 text-3xl mb-2" />
                <h2 className="text-lg font-semibold mb-1">Email Support</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">support@tasknest.com</p>
                <a href="mailto:support@tasknest.com" className="text-pink-600 dark:text-pink-300 font-medium hover:underline">Send Email</a>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6">
                <FaPhoneAlt className="text-pink-500 text-3xl mb-2" />
                <h2 className="text-lg font-semibold mb-1">Phone Support</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">+880 1234 567890</p>
                <a href="tel:+8801234567890" className="text-pink-600 dark:text-pink-300 font-medium hover:underline">Call Now</a>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6">
                <FaFacebookMessenger className="text-pink-500 text-3xl mb-2" />
                <h2 className="text-lg font-semibold mb-1">Messenger Chat</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">Chat with us on Facebook Messenger</p>
                <a href="https://m.me/tasknest" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-300 font-medium hover:underline">Start Chat</a>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6">
                <FaQuestionCircle className="text-pink-500 text-3xl mb-2" />
                <h2 className="text-lg font-semibold mb-1">FAQ & Help Center</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">Find answers to common questions in our Help Center.</p>
                <a href="/faq" className="text-pink-600 dark:text-pink-300 font-medium hover:underline">Visit FAQ</a>
            </div>
        </div>
    </div>
);

export default Support;