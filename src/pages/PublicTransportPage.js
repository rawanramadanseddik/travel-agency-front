// PublicTransportPage.js
import React, { useState, useEffect } from 'react';
import logo from '../images/logoo.svg';  // Correct import for logo
import slogan from '../images/slog.svg';  // Correct import for slogan
import publicTransportImage from '../images/public transportation.jpg'; // Import image for public transportation

const PublicTransportPage = () => {
  const [destination, setDestination] = useState('');
  const [transportOptions, setTransportOptions] = useState([]);

  // Handle home navigation
  const handleHomeNavigation = () => {
    window.location.href = '/'; // Adjust to your home page navigation
  };

  // Fetch data for public transportation based on the destination
  useEffect(() => {
    if (destination) {
      const fetchTransportOptions = async () => {
        // Mock data for public transportation options based on destination
        const mockData = [
          { id: 1, name: 'Metro', price: 20, frequency: 'Every 10 mins' },
          { id: 2, name: 'Bus', price: 15, frequency: 'Every 20 mins' },
          { id: 3, name: 'Tram', price: 25, frequency: 'Every 15 mins' },
        ];
        setTransportOptions(mockData);
      };
      fetchTransportOptions();
    }
  }, [destination]);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Logo */}
      <header className="bg-pink-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={handleHomeNavigation}
          >
            <img src={logo} alt="Logo" className="w-40 h-40" />
            <img src={slogan} alt="Slogan" className="h-20" />
          </div>

          {/* Navigation Bar */}
          <nav className="space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-800 text-lg">Home</a>
            <a href="/single-service" className="text-gray-600 hover:text-gray-800 text-lg">Single Services</a>
            <a href="/contactus" className="text-gray-600 hover:text-gray-800 text-lg">Contact Us</a>
            <a href="/aboutus" className="text-gray-600 hover:text-gray-800 text-lg">About Us</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-white mb-6 text-center bg-indigo-500 py-4 rounded-lg">
          Public Transportation
        </h1>

        {/* Public Transportation Image */}
        <div className="mb-6">
          <img src={publicTransportImage} alt="Public Transportation" className="w-full h-64 object-cover rounded-md" />
        </div>

        {/* Destination Input */}
        <div className="mb-6">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
            Enter Destination
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Enter destination"
            className="mt-1 p-2 block w-full border border-gray-300 rounded"
          />
        </div>

        {/* Display Transport Options */}
        {destination && (
          <div className="mb-6">
            <p className="mb-4">Here are the available transportation options to {destination}:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportOptions.map((option) => (
                <div key={option.id} className="border rounded-lg shadow-md p-4 bg-white">
                  <h2 className="text-xl font-semibold text-gray-700">{option.name}</h2>
                  <p className="text-gray-600">Price: ${option.price}</p>
                  <p className="text-gray-600">Frequency: {option.frequency}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PublicTransportPage;
