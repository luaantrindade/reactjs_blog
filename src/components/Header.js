import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-gradient-to-tr from-glassBlue to-glassPurple p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
      <div className="container mx-auto flex justify-between items-center text-black">
        {/* Logo or Brand Name */}
        <a href="home" className="hover:text-green-500 text-2xl font-bold transition ease-in-out duration-300">
          Me.
        </a>

        {/* Desktop Navigation */}
        <nav className="flex justify-end hidden md:flex space-x-8 items-center text-black">
          <a href="blog" className="hover:text-green-500 transition ease-in-out duration-300">Blog</a>
          <a href="services" className="hover:text-green-500 transition ease-in-out duration-300">Services</a>
          <a href="contact" className="hover:text-green-500 transition ease-in-out duration-300">Contact</a>

          {/* Search Field for Desktop */}
          <div className="relative text-gray-600">
            <input
              type="text"
              className="bg-white h-8 px-4 pr-8 rounded-full text-sm focus:outline-none"
              placeholder="Search..."
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.35-6.65a8 8 0 11-16 0 8 8 0 0116 0z"></path>
              </svg>
            </button>
          </div>
          <a href="write" className="font-thin rounded-full cursor-pointer flex justify-end icon-btn backdrop-brightness-90 p-3 w-100 bg-glassPurple hover:bg-green-100 transition ease-in-out duration-300 ">write+</a>
        </nav>

        {/* Mobile Icons: Search and Hamburger Menu */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Search Icon (for mobile) */}
          <button
            className="text-black focus:outline-none"
            aria-label="Search"
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.35-6.65a8 8 0 11-16 0 8 8 0 0116 0z"></path>
            </svg>
          </button>

          {/* Hamburger Menu Button */}
          <button
            className="text-black focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Search Field */}
      {isSearchOpen && (
        <div className="md:hidden mt-4 flex justify-center">
          <input
            type="text"
            className="bg-white h-8 px-4 w-10/12 rounded-full text-sm focus:outline-none"
            placeholder="Search..."
          />
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg">
          <nav className="flex flex-col items-start p-4 space-y-4">
            <a href="#about" className="hover:text-gray-300">Blog</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
