import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navlinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "About",
        link: "/about",
    },
    {
        id: 3,
        title: "Menu",
        link: "/menu",
    },
    {
        id: 4,
        title: "Services",
        link: "/services",
    },
    {
        id: 5, // Fixed ID for "Contact"
        title: "Contact",
        link: "/contact",
    },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle Menu
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="shadow-xl">
                {/* Gradient Background */}
                <div className="container py-3  mx-auto sm:py-0 flex items-center justify-between bg-gradient-to-r from-[rgb(1,0,0)] via-[#750404] to-[#4e4c4c]">
                    {/* Logo Section with Hover Effect */}
                    <div>
                        <a href="/#">
                        <h1 className="py-5 text-white font-bold text-4xl font-poppins">BURGER KINGS</h1>
                            {/* <img
                                src="o.jpg"
                                alt="Logo"
                                className="w-20 h-14 transition-transform duration-300 hover:scale-110"
                            /> */}
                        </a>
                    </div>

                    {/* Navbar Links (For Desktop) */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <ul className="flex space-x-6">
                            {Navlinks.map((link) => {
                                return (
                                    <li key={link.id}>
                                        <NavLink
                                            to={link.link} // Use NavLink component for navigation
                                            className="text-lg text-white hover:text-[hsl(0,86%,58%)] transition-all duration-300"
                                        >
                                            {link.title}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Order Button (For Desktop) - Right Side */}
                    <div className="md:flex justify-end">
                        
                    </div>

                    {/* Hamburger Icon (For Mobile) with Animation */}
                    <div className="md:hidden">
                        <button
                            onClick={handleMenuToggle}
                            className="text-4xl text-white hover:text-yellow-300 transition-all duration-300 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <span className="font-bold text-3xl transform rotate-45 transition-all duration-300">
                                    &times;
                                </span> // Close icon
                            ) : (
                                <span className="font-bold text-3xl transform transition-all duration-300">
                                    &#9776;
                                </span> // Hamburger icon
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 p-4 space-y-4 rounded-b-xl`}
                >
                    <ul className="flex flex-col items-center space-y-4">
                        {Navlinks.map((link) => (
                            <li key={link.id}>
                                <NavLink
                                    to={link.link} // Use NavLink component for mobile navigation
                                    className="text-white text-lg hover:text-[red] transition-all duration-300"
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
