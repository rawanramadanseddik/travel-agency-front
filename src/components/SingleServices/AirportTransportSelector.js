import React, { useState } from 'react';
import { FaHotel, FaCar, FaTaxi, FaMapMarkerAlt, FaBed, FaCalendarAlt, FaUsers, FaCarAlt } from 'react-icons/fa';
import axios from 'axios';

const AirportTransportSelector = () => {
  const [serviceDetails, setServiceDetails] = useState({
    airportTransport: {
      location: '', // renamed from pickUpLocation to location
      serviceType: '', // added serviceType
      destination: '',
      date: '', // renamed from dateTime to date
      numberOfPeople: 1,
    },
  });

  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    const { location, serviceType, destination, date, numberOfPeople } = serviceDetails.airportTransport;
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

    try {
      const response = await axios.post(`${backendUrl}/api/singleservices/searchAirportTransports`, {
        location,
        serviceType, // Now including serviceType in the request
        destination,
        date,
        numberOfPeople,
      });

      if (response.data && Array.isArray(response.data)) {
        setSearchResults(response.data);
        setError('');
      } else {
        setSearchResults([]);
        setError('No airport transport services found.');
      }
    } catch (err) {
      console.error(err);
      setError('Error fetching transport services. Please try again.');
    }
  };

  return (
    <div>
      <div className="space-y-6">
        {/* Pick-up Location */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xl text-pink-500" />
            <label className="text-lg font-semibold">Pick-up Location</label>
          </div>
          <input
            type="text"
            value={serviceDetails.airportTransport.location}
            onChange={(e) =>
              setServiceDetails({
                ...serviceDetails,
                airportTransport: { ...serviceDetails.airportTransport, location: e.target.value },
              })
            }
            placeholder="Enter pick-up location"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>

        {/* Service Type Dropdown */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <FaTaxi className="text-xl text-pink-500" />
            <label className="text-lg font-semibold">Service Type</label>
          </div>
          <select
            value={serviceDetails.airportTransport.serviceType}
            onChange={(e) =>
              setServiceDetails({
                ...serviceDetails,
                airportTransport: { ...serviceDetails.airportTransport, serviceType: e.target.value },
              })
            }
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          >
            <option value="">Select Service Type</option>
            <option value="Taxi">Taxi</option>
            <option value="Shuttle">Shuttle</option>
            <option value="Private Car">Private Car</option>
            <option value="Minibus">Minibus</option>
            <option value="Limousine">Limousine</option>
          </select>
        </div>

        {/* Destination */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xl text-pink-500" />
            <label className="text-lg font-semibold">Destination</label>
          </div>
          <input
            type="text"
            value={serviceDetails.airportTransport.destination}
            onChange={(e) =>
              setServiceDetails({
                ...serviceDetails,
                airportTransport: { ...serviceDetails.airportTransport, destination: e.target.value },
              })
            }
            placeholder="Enter destination"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>

        {/* Date and Time */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-xl text-pink-500" />
            <label className="text-lg font-semibold">Date and Time</label>
          </div>
          <input
            type="datetime-local"
            value={serviceDetails.airportTransport.date}
            onChange={(e) =>
              setServiceDetails({
                ...serviceDetails,
                airportTransport: { ...serviceDetails.airportTransport, date: e.target.value },
              })
            }
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>

        {/* Number of People */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <FaUsers className="text-xl text-pink-500" />
            <label className="text-lg font-semibold">Number of People</label>
          </div>
          <input
            type="number"
            value={serviceDetails.airportTransport.numberOfPeople}
            onChange={(e) =>
              setServiceDetails({
                ...serviceDetails,
                airportTransport: { ...serviceDetails.airportTransport, numberOfPeople: parseInt(e.target.value) },
              })
            }
            min="1"
            placeholder="Enter number of people"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Airport Transport Summary */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Airport Transport Summary</h2>
        <div className="space-y-1">
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Pick-up Location:</span>
            <span className="inline-flex w-5/6">{serviceDetails.airportTransport.location}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Service Type:</span>
            <span className="inline-flex w-5/6">{serviceDetails.airportTransport.serviceType}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Destination:</span>
            <span className="inline-flex w-5/6">{serviceDetails.airportTransport.destination}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Date & Time:</span>
            <span className="inline-flex w-5/6">{serviceDetails.airportTransport.date}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Number of People:</span>
            <span className="inline-flex w-5/6">{serviceDetails.airportTransport.numberOfPeople}</span>
          </div>
        </div>
      </div>

    {/* Search Button */}
<div className="flex justify-center mt-4 w-full">
  <button
    onClick={handleSearch}
    className="bg-pink-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-pink-600 w-full"
  >
    Search Transport
  </button>
</div>

      {/* Airport Transport Results */}
      {searchResults.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((transport) => (
            <div key={transport._id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{transport.serviceType}</h3>
              <p className="text-gray-600">Location: {transport.location}</p>
              <p className="text-gray-600">Destination: {transport.destination}</p>
              <p className="text-gray-600">Price: ${transport.price}</p>
              <p className="text-gray-600">Pickup Date and Time: {new Date(transport.pickupTime).toLocaleString()}</p>
              <p className="text-gray-600">Number of People: {transport.numberOfPeople}</p>

              <button
                onClick={() => alert(`Booking ${transport.serviceType} at ${transport.location}`)}
                className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-pink-600 w-full"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mt-4">{error || 'No airport transport services found.'}</p>
      )}
    </div>
  );

    };

    export default AirportTransportSelector;
