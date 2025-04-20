import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-lime-100 to-green-100 shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/images/logo_desctop.webp"
            alt="Krishi Samriddhi Logo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-green-700 shadow-sm"
          />
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-600 via-lime-600 to-green-900 text-transparent bg-clip-text tracking-wide"
          >
            KRISHI SAMRIDDHI
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-green-800">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 text-lg font-semibold text-gray-800">

          <Link
            to="/SoilMoisture"
            className="relative group transition-all duration-300"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-600">
              Soil Moisture
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/CropRecommendation"
            className="relative group transition-all duration-300"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-600">
              Crop Recommendation
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/Analysis"
            className="relative group transition-all duration-300"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-600">
              Analysis
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/RiceDiseasePredictor"
            className="relative group transition-all duration-300"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-600">
              Rice Disease Predictor
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/About"
            className="relative group transition-all duration-300"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-600">
              About
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-3">
          {[
            "soilmoisture",
            "crop-recommendation",
            "analysis",
            "ricediseasepredictor",
          ].map((item, index) => (
            <Link
              key={index}
              to={`/${item}`}
              onClick={toggleMenu}
              className="block text-lg font-semibold text-green-800 hover:text-lime-700 transition-all duration-300"
            >
              {item.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
