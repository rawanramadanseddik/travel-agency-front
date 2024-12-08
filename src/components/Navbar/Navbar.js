import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-lg">Travel Agency</h1>
        <div>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/all-in-one-trips" className="px-4">All-In-One Trips</Link>
          {/* Add more navigation links here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
