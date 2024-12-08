import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';
import luxorImg from '../images/luxor.jpg';
import marinaImg from '../images/marina.jpg';
import sharmImg from '../images/sharm.jpg';
import backgroundImage from '../images/background.jpg';

const locations = [
  { id: 1, name: 'Luxor', image: luxorImg },
  { id: 2, name: 'Sharm El Sheikh', image: sharmImg },
  { id: 3, name: 'Marina', image: marinaImg },
];

const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();
  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };
  const handleAllInOneTrip = (location) => {
    navigate('/all-in-one-trip', { state: { selectedLocation: location.name } });
};

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
  {/* Header (Navbar with background) */}
  <header
    className="relative bg-cover bg-center h-screen text-white"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50">
      {/* Top Section: Logo, Slogan, and Navigation */}
      <div className="flex justify-between items-start px-6 py-6">
        {/* Logo and Slogan (Top Left) */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-32 h-32" />
          <img src={slogan} alt="Slogan" className="h-14" />
        </div>
        
        {/* Navigation Bar (Top Right) */}
        <nav className="space-x-6">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/single-services" className="text-white hover:text-gray-300">Single Services</a>
          <a href="/customizable-trip" className="text-white hover:text-gray-300 ">Customize Trip</a> 
          <a href="/public-transport" className="text-white hover:text-gray-300">Public Transportation</a>
          <a href="/trips" className="text-white hover:text-gray-300">Trips</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
        </nav>
      </div>
      
      
      {/* Headline Section (Centered) */}
      <div className="absolute bottom-16 inset-x-0 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Are you ready to start your traveling journey?</h1>
        <p className="text-lg">We are very excited to be part of your exploration phase. Let's create unforgettable memories together!</p>
      </div>
    </div>
  </header>

      {/* Locations Grid */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div
                key={location.id}
                className="relative cursor-pointer"
                onClick={() => handleLocationClick(location)}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-white rounded-b-lg">
                  <h3 className="text-2xl font-bold">{location.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      {selectedLocation && (
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img
              src={selectedLocation.image}
              alt={selectedLocation.name}
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-800">{selectedLocation.name}</h2>

            {/* Location Options */}
            <div className="mt-8 space-y-4">
              <button className="w-full py-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                Book a single service
              </button>
              <button className="w-full py-3 text-lg text-white bg-green-500 rounded-lg hover:bg-green-600 transition">
                Show the available trips
              </button>
              <button className="w-full py-3 text-lg text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition">
                Customize my own trip
              </button>
              <button
        className="w-full py-3 text-lg text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
        onClick={() => handleAllInOneTrip(selectedLocation)}
    >
        All-in-One Trip
    </button>
            </div>
          </div>
        </section>
      )}

      {/* Feedback Button */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-200">
            Give Feedback
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
