import React, { useState } from 'react';
import { FaHotel, FaCar, FaTaxi, FaMapMarkerAlt, FaBed, FaCalendarAlt, FaUsers, FaCarAlt } from 'react-icons/fa';
import axios from 'axios';

const AttractionSelector = () => {
    const [serviceDetails, setServiceDetails] = useState({
     
      attraction: { destination: '', startDate: '', endDate: '' },
      
      
    });
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async () => {
      const { destination, startDate, endDate } = serviceDetails.attraction;
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
      
      try {
        const response = await axios.post(`${backendUrl}/api/singleservices/attractions`, {
          location: destination,
          dates: [startDate, endDate], // You may want to send a date range here
        });
    
        if (response.data && Array.isArray(response.data)) {
          setSearchResults(response.data);
          setError('');
        } else {
          setSearchResults([]);
          setError('No attractions found.');
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching attractions. Please try again.');
      }
    };
    
  
  return (
    <div>
    <div className="space-y-6">
      {/* Where are you going? */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-xl text-pink-500" />
          <label className="text-lg font-semibold">Where are you going?</label>
        </div>
        <input
          type="text"
          value={serviceDetails.attraction.destination || ''}
          onChange={(e) =>
            setServiceDetails({
              ...serviceDetails,
              attraction: { ...serviceDetails.attraction, destination: e.target.value },
            })
          }
          placeholder="Enter destination"
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>

      {/* Start and End Date */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-xl text-pink-500" />
          <label className="text-lg font-semibold">Start and End Date</label>
        </div>
        <div className="flex gap-4 mt-2">
          <input
            type="date"
            value={serviceDetails.attraction.startDate || ''}
            onChange={(e) =>
              setServiceDetails({
                ...serviceDetails,
                attraction: { ...serviceDetails.attraction, startDate: e.target.value },
              })
            }
            className="p-2 w-full border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            value={serviceDetails.attraction.endDate || ''}
            onChange={(e) =>
              setServiceDetails({
                ...serviceDetails,
                attraction: { ...serviceDetails.attraction, endDate: e.target.value },
              })
            }
            className="p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
     {/* Your Checkup Summary */}
     <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Attraction Summary</h2>
        <div className="space-y-1">
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Destination:</span>
            <span className="inline-flex w-5/6">{serviceDetails.attraction.destination}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Start Date:</span>
            <span className="inline-flex w-5/6">{serviceDetails.attraction.startDate}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">End Date:</span>
            <span className="inline-flex w-5/6">{serviceDetails.attraction.endDate}</span>
          </div>
        </div>
      </div>
    
    {/* Search Button */}
<div className="flex justify-center mt-4 w-full">
  <button
    onClick={handleSearch}
    className="bg-pink-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-pink-600 w-full"
  >
    Search Attractions
  </button>
</div>
  {/* Search Results */}
  {searchResults.length > 0 ? (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {searchResults.map((attraction) => (
        <div key={attraction._id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{attraction.name}</h3>
          <p className="text-gray-600">Location: {attraction.location}</p>
          <p className="text-gray-600">Price: ${attraction.price}</p>
          <p className="text-gray-600">
            Available: {new Date(attraction.availableDates[0]).toLocaleDateString()} to{' '}
            {new Date(attraction.availableDates[attraction.availableDates.length - 1]).toLocaleDateString()}
          </p>
          <button
            onClick={() => alert(`Booking ${attraction.name}`)}
            className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-pink-600 w-full"
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-600 mt-4">{error || 'No attractions found.'}</p>
  )}
</div>
  );

    };

    export default AttractionSelector;
