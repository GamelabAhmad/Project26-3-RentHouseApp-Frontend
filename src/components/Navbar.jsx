import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-purple-500 sticky-top">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <a href="#" className="font-bold text-white text-lg">
            Rent House
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#info" className="nav-link">
              Info
            </a>
            <a href="#login" className="nav-link">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
