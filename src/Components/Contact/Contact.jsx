import React from "react";

export const Contact = () => {
    return (
        <>
            {/* Full Contact Section with Beautiful Background */}
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#060707] to-[rgb(242,245,242)]">

                {/* Contact Form Container */}
                <div className="w-full sm:w-2/3 lg:w-1/2 flex flex-col shadow-xl rounded-lg overflow-hidden bg-[#323233] bg-opacity-80">

                    {/* Left Side (Text and Contact Form) */}
                    <div className="w-full p-8 sm:p-12 flex flex-col items-center justify-center">

                        {/* Text Section */}
                        <div className="mb-8 text-center">
                            <h2 className="text-4xl font-bold text-[#fff] mb-4">
                                Get In Touch
                            </h2>
                            <p className="text-lg text-[#fff]">
                                We'd love to hear from you! Please feel free to reach out by filling in the form below.
                            </p>
                        </div>
                        
                        {/* Contact Form */}
                        <form className="space-y-6 w-full">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    rows="4"
                                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                                />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full bg-[#131313] text-white py-4 rounded-lg text-lg hover:bg-[#ec3232] transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
