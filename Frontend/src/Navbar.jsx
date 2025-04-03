import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg py-4 px-4 sm:px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 z-20">
      <h1
        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-teal-600 cursor-pointer tracking-tight"
        onClick={() => {
          navigate("/");
          setIsOpen(false);
        }}
      >
        Green City
      </h1>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-8">
        <button
          className="text-gray-800 font-medium text-base lg:text-lg hover:text-teal-600 transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="text-gray-800 font-medium text-base lg:text-lg hover:text-teal-600 transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="bg-teal-600 text-white font-medium text-base lg:text-lg py-2 px-4 lg:px-5 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"} {/* Toggle between hamburger and close icon */}
      </button>
      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6">
          <button
            className="text-gray-800 font-medium text-lg w-full text-center py-2 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
          >
            Home
          </button>
          <button
            className="text-gray-800 font-medium text-lg w-full text-center py-2 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
            onClick={() => {
              navigate("/login");
              setIsOpen(false);
            }}
          >
            Login
          </button>
          <button
            className="bg-teal-600 text-white font-medium text-lg w-3/4 py-2 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300"
            onClick={() => {
              navigate("/signup");
              setIsOpen(false);
            }}
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;