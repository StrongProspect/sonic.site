import { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    <NavLink
      className="text-white hover:text-gray-300 transition-colors duration-300"
      key="/"
      to="/"
    >
      Home
    </NavLink>,
    <NavLink
      className="text-white hover:text-gray-300 transition-colors duration-300"
      key="/why"
      to="/why"
    >
      Why
    </NavLink>,
    <NavLink
      className="text-white hover:text-gray-300 transition-colors duration-300"
      key="/tools"
      to="/tools"
    >
      Tools
    </NavLink>,
    <NavLink
      className="text-white hover:text-gray-300 transition-colors duration-300"
      key="/help"
      to="/help"
    >
      Contact
    </NavLink>,
    <NavLink
      className="text-white hover:text-gray-300 transition-colors duration-300"
      key="/blog"
      to="/blog"
    >
      Blog
    </NavLink>,
    <NavLink
      className="text-white hover:text-gray-300 transition-colors duration-300"
      key="/signup"
      to="/signup"
    >
      Sign Up
    </NavLink>,
    <NavLink
      className="text-white hover:text-gray-300 transition-colors duration-300"
      key="/login"
      to="/login"
    >
      Login
    </NavLink>,
  ];

  return (
    <header className="bg-[#3aabe8] text-gray-900 font-sans shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 max-w-xs">
            <img src="../public/assets/sonicdiy_logo.png" />
          </div>
          <nav className="hidden md:flex space-x-6">{navLinks}</nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-black focus:outline-none"
              aria-label="Open menu"
            >
              {isMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">{navLinks}</nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
