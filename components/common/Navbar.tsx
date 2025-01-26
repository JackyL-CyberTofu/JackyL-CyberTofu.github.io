'use client';
import React, { useState } from 'react';
import clsx from "clsx";

export const MobileMenuCSS = (isOpen: boolean) => {
    const base = `md:hidden fixed top-[60px] left-0 w-full z-50
    origin-top transition-all duration-300 ease-out transform overflow-hidden`;

    const openStyles = 'scale-y-100 opacity-100 pointer-events-auto';
    const closedStyles = 'scale-y-0 opacity-0 pointer-events-none';

    const currentState = isOpen ? openStyles : closedStyles;

    return clsx(base, currentState);
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Main navigation bar */}
            <nav className="">
                <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl font-semibold dark:text-white">
                          MySite
                        </span>
                    </div>

                    {/* Hamburger button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobileMenu"
                        className="block md:hidden z-50 p-2 text-gray-600 dark:text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 17 14"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    {/* Horizontal nav links */}
                    <ul className="hidden md:flex md:space-x-8 font-medium">
                        <li>
                            <a href="#" className="px-3 py-2  dark:hover:bg-gray-700">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 dark:hover:bg-gray-700">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 dark:hover:bg-gray-700">
                                Services
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            <div id="mobileMenu" className={MobileMenuCSS(isOpen)} style={{ willChange: 'transform, opacity' }}>
                <ul className="font-medium flex flex-col space-y-2 p-4">
                    <li>
                        <a href="#" className="block px-3 py-2">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-3 py-2">
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="py-2 px-3 rounded block text-white bg-blue-700 hover:bg-blue-800 dark:text-white dark:hover:bg-blue-700"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}