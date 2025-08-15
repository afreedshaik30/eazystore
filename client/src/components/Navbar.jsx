import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import CartIcon from "./icons/CartIcon";
import AccountIcon from "./icons/AccountIcon";
import Wishlist from "./icons/WishListIcon";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `transition-colors duration-200 block px-2 py-1 ${
      isActive ? "text-blue-700 font-medium" : "text-gray-700 hover:text-black"
    }`;

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="w-full">
        <div className="flex justify-between items-center py-3 px-4 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl sm:text-4xl text-black font-serif tracking-wide hover:text-blue-700 transition-colors duration-200 lg:ml-14"
          >
            EasyStore
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-16">
            <ul className="flex gap-12">
              <li>
                <NavLink to="/" className={navLinkClasses}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/men" className={navLinkClasses}>
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink to="/women" className={navLinkClasses}>
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink to="/kids" className={navLinkClasses}>
                  Kids
                </NavLink>
              </li>
            </ul>

            {/* Search bar */}
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden px-4 py-2 shadow-sm bg-white">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                className="ml-3 flex-1 outline-none border-none bg-transparent text-gray-700 placeholder-gray-400"
                placeholder="Search"
              />
            </div>

            {/* Icons */}
            <ul className="flex gap-6">
              <li>
                <button>
                  <Wishlist />
                </button>
              </li>
              <li>
                <button>
                  <AccountIcon />
                </button>
              </li>
              <li>
                <Link to="/cart-items">
                  <CartIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 gap-2">
            <li>
              <NavLink
                to="/"
                className={navLinkClasses}
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/men"
                className={navLinkClasses}
                onClick={() => setMenuOpen(false)}
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/women"
                className={navLinkClasses}
                onClick={() => setMenuOpen(false)}
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kids"
                className={navLinkClasses}
                onClick={() => setMenuOpen(false)}
              >
                Kids
              </NavLink>
            </li>
          </ul>

          {/* Search bar mobile */}
          <div className="px-4 py-2">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden px-4 py-2 bg-white">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                className="ml-3 flex-1 outline-none border-none bg-transparent text-gray-700 placeholder-gray-400"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Icons mobile */}
          <ul className="flex gap-6 px-4 py-2">
            <li>
              <button>
                <Wishlist />
              </button>
            </li>
            <li>
              <button>
                <AccountIcon />
              </button>
            </li>
            <li>
              <Link to="/cart-items">
                <CartIcon />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
