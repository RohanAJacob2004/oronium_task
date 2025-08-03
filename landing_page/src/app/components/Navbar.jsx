import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-white ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-semibold text-gray-900">Beyond UI</h1>
                    </div>

                    {/* Navigation Links and Buttons Grouped Together */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Navigation Links */}
                        <div className="flex items-baseline space-x-8">
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                                Homepage
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                                About Us
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                                Features
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                                Blog
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                                Contact Us
                            </a>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center space-x-3">
                            <button className="text-gray-700 hover:text-gray-900 border-gray-200 px-4 py-1.5 text-sm font-semibold border-2 rounded-xl transition-colors duration-200">
                                Demo
                            </button>
                            <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 text-sm font-semibold rounded-xl transition-colors duration-200">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-gray-900 p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;