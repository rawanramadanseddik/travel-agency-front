import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';
import backgroundImage from '../images/background.jpg';



const HomePage = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch locations from the backend
    const fetchLocations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/locations');
        if (response.ok) {
          const data = await response.json();
          setLocations(data);
        } else {
          console.error('Failed to fetch locations');
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handleButtonClick = (path) => {
    // Pass the selected location to the next page using navigate
    navigate(path, { state: { selectedLocation } });
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
              <a href="/signup" className="text-white hover:text-gray-300">Sign Up</a>
              <a href="/contactus" className="text-white hover:text-gray-300">Contact Us</a>
              <a href="/aboutus" className="text-white hover:text-gray-300">About Us</a>
            </nav>
          </div>

          {/* Headline Section (Centered) */}
          <div className="absolute bottom-16 inset-x-0 text-center px-6">
            <h1 className="text-5xl font-bold mb-4">Are you ready to start your traveling journey?</h1>
            <p className="text-lg">
              We are very excited to be part of your exploration phase. Let's create unforgettable memories together!
            </p>
          
          </div>
        </div>
      </header>
      {/* Buttons Section */}
  <section className="bg-gray-200 py-8 text-center">
    <div className="space-x-4">
      <button
        onClick={() => handleButtonClick('/single-service')}
        className="py-3 px-6 text-lg text-white bg-blue-500 rounded-lg hover:bg-green-600 transition"
      >
        Book a single service
      </button>
      <button
        onClick={() => handleButtonClick('/available-trips')}
        className="py-3 px-6 text-lg text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
      >
        Show the available trips
      </button>
    </div>
  </section>

      {/* Locations Grid */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div
                key={location._id}
                className="relative cursor-pointer"
                onClick={() => handleLocationClick(location)}
              >
                <img
                  src={location.imageUrl}
                  alt={location.imageUrl}
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
              src={selectedLocation.imageUrl}
              alt={selectedLocation.name}
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-800">{selectedLocation.name}</h2>

            {/* Location Options */}
            <div className="mt-8 space-y-4">
           
              <button
                onClick={() => handleButtonClick('/customize-trip')}
                className="w-full py-3 text-lg text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
              >
                Customize my own trip
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Feedback Button */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-x-4">
          <button
            onClick={() => handleButtonClick('/feedback')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-200"
          >
            Give Feedback
          </button>
          <button
            onClick={() => handleButtonClick('/history')}
            className="px-5 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-200"
          >
            View Booking History
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
