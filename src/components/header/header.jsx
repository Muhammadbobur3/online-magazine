import React, { useContext } from "react";
import { FaSearch, FaUser, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BasketContext } from "../../contexts/basket.context";

const Header = () => {
  const { items } = useContext(BasketContext);

  const basketItemCount = items?.length;

  return (
    <header className="bg-white text-gray-800 fixed top-0 left-0 w-full z-10 shadow-lg py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          {/* <img src="path/to/logo.png" alt="Logo" className="w-10 h-10 mr-2" /> */}
          <h1 className="text-lg font-bold">Magazine</h1>
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:bg-gray-200"
            />
            <div className="absolute top-0 right-0 mt-3 mr-4">
              <FaSearch className="text-gray-600" />
            </div>
          </div>
          <button className="ml-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center">
            <FaUser className="text-gray-800" />
            <span className="ml-2 hidden md:block">Login</span>
          </button>
          <Link to="/basket">
            <button className="ml-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 relative">
              <FaShoppingBasket className="text-gray-800" />
              {basketItemCount > 0 && (
                <span className="ml-1 text-xs absolute -top-1 -left-1 font-semibold bg-red-500 text-white rounded-full w-4 h-4">
                  {basketItemCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
      <div className="relative block md:hidden mt-3">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg w-full text-gray-800 focus:outline-none bg-gray-200"
        />
        <div className="absolute top-0 right-0 mt-3 mr-4">
          <FaSearch className="text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
