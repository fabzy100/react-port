import React from "react";

const Header = () => {
    return (
      <header className="bg-gray-900 text-white fixed top-0 w-full shadow-lg z-10">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-gray-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  