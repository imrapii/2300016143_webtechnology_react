import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              RapiAPP
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:bg-blue-700 px-3 py-2 rounded">
              Home
            </a>
            <a href="#about" className="hover:bg-blue-700 px-3 py-2 rounded">
              About
            </a>
            <a href="#services" className="hover:bg-blue-700 px-3 py-2 rounded">
              Services
            </a>
            <a href="#contact" className="hover:bg-blue-700 px-3 py-2 rounded">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-2 px-2 pt-2 pb-3 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded hover:bg-blue-700">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 rounded hover:bg-blue-700">
              About
            </a>
            <a href="#services" className="block px-3 py-2 rounded hover:bg-blue-700">
              Services
            </a>
            <a href="#contact" className="block px-3 py-2 rounded hover:bg-blue-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
