import React, { useState } from 'react';
import { FaHotel, FaCar, FaTaxi, FaMapMarkerAlt, FaBed, FaCalendarAlt, FaUsers, FaCarAlt } from 'react-icons/fa';
import axios from 'axios';
const CarRentalSelector = () => {
    const [serviceDetails, setServiceDetails] = useState({
      carRental: {
          pickUpLocation: '',
          pickUpDateTime: '',
          dropOffDateTime: '',
          carType: '',
        },
      
    });
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');
  
    const handleSearch = async () => {
      const { pickUpLocation, pickUpDateTime, dropOffDateTime, carType } = serviceDetails.carRental;
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  
      try {
        const response = await axios.post(`${backendUrl}/api/singleservices/searchCarRentals`, {
          location: pickUpLocation,
          type: carType,
          fromDate: pickUpDateTime,
          toDate: dropOffDateTime,
        });
  
        if (response.data && Array.isArray(response.data)) {
          setSearchResults(response.data);
          setError('');
        } else {
          setSearchResults([]);
          setError('No car rentals found.');
        }
      } catch (err) {
        console.error(err.response?.data || err.message);
        setError('Error fetching car rentals. Please try again.');
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
              value={serviceDetails.carRental.pickUpLocation}
              onChange={(e) => setServiceDetails({
                ...serviceDetails,
                carRental: { ...serviceDetails.carRental, pickUpLocation: e.target.value },
              })}
              placeholder="Enter pick-up location"
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            />
          </div>

          {/* Pick-up Date */}
<div className="bg-white p-4 rounded-lg shadow-md">
  <div className="flex items-center gap-2">
    <FaCalendarAlt className="text-xl text-pink-500" />
    <label className="text-lg font-semibold">Pick-up Date</label>
  </div>
  <input
    type="date"
    value={serviceDetails.carRental.pickUpDateTime}
    onChange={(e) => setServiceDetails({
      ...serviceDetails,
      carRental: { ...serviceDetails.carRental, pickUpDateTime: e.target.value },
    })}
    className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
  />
</div>

{/* Drop-off Date */}
<div className="bg-white p-4 rounded-lg shadow-md">
  <div className="flex items-center gap-2">
    <FaCalendarAlt className="text-xl text-pink-500" />
    <label className="text-lg font-semibold">Drop-off Date</label>
  </div>
  <input
    type="date"
    value={serviceDetails.carRental.dropOffDateTime}
    onChange={(e) => setServiceDetails({
      ...serviceDetails,
      carRental: { ...serviceDetails.carRental, dropOffDateTime: e.target.value },
    })}
    className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
  />
</div>


          {/* Car Type */}
<div className="bg-white p-4 rounded-lg shadow-md">
  <div className="flex items-center gap-2">
    <FaCarAlt className="text-xl text-pink-500" />
    <label className="text-lg font-semibold">Car Type</label>
  </div>
  <select
    value={serviceDetails.carRental.carType}
    onChange={(e) => setServiceDetails({
      ...serviceDetails,
      carRental: { ...serviceDetails.carRental, carType: e.target.value },
    })}
    className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
  >
    <option value="">Select car type</option>
    <option value="SUV">SUV</option>
    <option value="Sedan">Sedan</option>
  </select>
</div>
</div>

        {/* Your Checkup Summary */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Car Rental Summary</h2>
        <div className="space-y-1">
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Pick-up Location:</span>
            <span className="inline-flex w-5/6">{serviceDetails.carRental.pickUpLocation}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Pick-up Date :</span>
            <span className="inline-flex w-5/6">{serviceDetails.carRental.pickUpDateTime}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Drop-off Date :</span>
            <span className="inline-flex w-5/6">{serviceDetails.carRental.dropOffDateTime}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Car Type:</span>
            <span className="inline-flex w-5/6">{serviceDetails.carRental.carType}</span>
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

{/* Search Results */}
{searchResults.length > 0 ? (
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {searchResults.map((transport) => (
      <div key={transport._id} className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Transport: {transport.serviceType}</h3>
        <p className="text-gray-600">Location: {transport.location}</p>
        <p className="text-gray-600">Pick-up Location: {transport.pickUpLocation}</p>
        <p className="text-gray-600">Price: ${transport.price}</p>
        <p className="text-gray-600">Pick-up Time: {new Date(transport.pickupTime).toLocaleString()}</p>
        <button
          onClick={() => alert(`Booking ${transport.serviceType}`)}
          className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-pink-600 w-full"
        >
          Book Now
        </button>
      </div>
    ))}
  </div>
) : (
  <p className="text-gray-600 mt-4">No airport transport found.</p>
)}
</div>
     );
  };

    export default CarRentalSelector;
