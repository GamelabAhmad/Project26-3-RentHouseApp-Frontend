import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-purple-500 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <a href="#" className="font-bold text-white text-lg">
            My Wedding
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#info" className="nav-link">
              Info
            </a>
            <a href="#story" className="nav-link">
              Story
            </a>
            <a href="#rsvp" className="nav-link">
              RSVP
            </a>
            <a href="#gallery" className="nav-link">
              Gallery
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
