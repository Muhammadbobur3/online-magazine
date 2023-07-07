import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Online Magazine</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <nav className="flex flex-wrap">
            <a href="/" className="text-gray-400 hover:text-white mr-4 mb-2">
              Home
            </a>
            <a href="/" className="text-gray-400 hover:text-white mr-4 mb-2">
              About
            </a>
            <a href="/" className="text-gray-400 hover:text-white mr-4 mb-2">
              Products
            </a>
            <a href="/" className="text-gray-400 hover:text-white mb-2">
              Contact
            </a>
          </nav>
        </div>
        <hr className="border-gray-700 my-4" />
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Online Magazine. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
