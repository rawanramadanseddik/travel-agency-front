import React, { useState } from 'react';
import { FaHotel, FaCar, FaTaxi, FaMapMarkerAlt, FaBed, FaCalendarAlt, FaUsers, FaCarAlt } from 'react-icons/fa';
import axios from 'axios';
const StaySelector = () => {
    const [serviceDetails, setServiceDetails] = useState({
      stay: {
        location: '',
        type:'',
        checkInDate: '',
        checkOutDate: '',
        adults: 2,
        children: 0,
        rooms: 1,
        pets: false,
      },
      
    });

    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
      const { destination, checkInDate, checkOutDate, adults, children,type } = serviceDetails.stay;
      // Fetch backend URL from environment variables
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

    try {
      console.log('Sending request to backend...');
    const response = await axios.post(`${backendUrl}/api/singleservices/stays`, {
      location: destination,
      type, // Use the dynamically selected type
      fromDate: checkInDate,
      toDate: checkOutDate,
      adults,
      children,
    });
      console.log('Backend response:', response);
      if (response.data && Array.isArray(response.data)) {
        setSearchResults(response.data);
      } else {
        setError('No stays found.');
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError('Error fetching stays. Please try again.');
    }
  };

  // Function to format the summary details
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
       <div> 
          <div className="space-y-6">
            {/* Stays Content */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <FaBed className="text-xl text-pink-500" />
                <label className="text-lg font-semibold">Where are you going?</label>
              </div>
              <input
                type="text"
                value={serviceDetails.stay.destination}
                onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, destination: e.target.value } })}
                placeholder="Enter destination"
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
              />
            </div>

            {/* Check-in and Check-out Date */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-xl text-pink-500" />
                <label className="text-lg font-semibold">Check-in Date and Check-out Date</label>
              </div>
              <div className="flex gap-4 mt-2">
                <input
                  type="date"
                  value={serviceDetails.stay.checkInDate}
                  onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, checkInDate: e.target.value } })}
                  className="p-2 w-full border border-gray-300 rounded-lg"
                />
                <input
                  type="date"
                  value={serviceDetails.stay.checkOutDate}
                  onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, checkOutDate: e.target.value } })}
                  className="p-2 w-full border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Adults, Children, Rooms, and Pets */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <FaUsers className="text-xl text-pink-500" />
                <label className="text-lg font-semibold">Adults, Children, Rooms</label>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="w-1/3">
                  <label className="block">Adults</label>
                  <input
                    type="number"
                    value={serviceDetails.stay.adults}
                    onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, adults: parseInt(e.target.value) } })}
                    className="p-2 w-full border border-gray-300 rounded-lg"
                    min="1"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block">Children</label>
                  <input
                    type="number"
                    value={serviceDetails.stay.children}
                    onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, children: parseInt(e.target.value) } })}
                    className="p-2 w-full border border-gray-300 rounded-lg"
                    min="0"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block">Rooms</label>
                  <input
                    type="number"
                    value={serviceDetails.stay.rooms}
                    onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, rooms: parseInt(e.target.value) } })}
                    className="p-2 w-full border border-gray-300 rounded-lg"
                    min="1"
                  />
                </div>
              </div>
              {/*  types  */}
              <div className="bg-white p-4 rounded-lg shadow-md">
  <div className="flex items-center gap-2">
    <FaHotel className="text-xl text-pink-500" />
    <label className="text-lg font-semibold">Type of Stay</label>
  </div>
  <select
    value={serviceDetails.stay.type}
    onChange={(e) =>
      setServiceDetails({
        ...serviceDetails,
        stay: { ...serviceDetails.stay, type: e.target.value },
      })
    }
    className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
  >
    <option value="">Select type</option>
    <option value="Hotel">Hotel</option>
    <option value="Guesthouse">Guesthouse</option>
    <option value="Resort">Resort</option>
    <option value="Villa">Villa</option>
    <option value="Apartment">Apartment</option>
    
  </select>
</div>


              {/* Pets Checkbox */}
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  checked={serviceDetails.stay.pets}
                  onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, pets: e.target.checked } })}
                  className="mr-2"
                />
                <label className="text-lg">Traveling with pets?</label>
              </div>
            </div>
          </div>

              {/* Your Checkup Summary */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Checkout Summary</h2>
      <div className="space-y-1">
        <div className="flex justify-between items-center text-sm mb-0.5">
          <span className="inline-flex w-1/6">Destination:</span>
          <span className="inline-flex w-5/6">{serviceDetails.stay.destination}</span>
        </div>
        <div className="flex justify-between items-center text-sm mb-0.5">
          <span className="inline-flex w-1/6">Check-in:</span>
          <span className="inline-flex w-5/6">{formatDate(serviceDetails.stay.checkInDate)}</span>
        </div>
        <div className="flex justify-between items-center text-sm mb-0.5">
          <span className="inline-flex w-1/6">Check-out:</span>
          <span className="inline-flex w-5/6">{formatDate(serviceDetails.stay.checkOutDate)}</span>
        </div>
        <div className="flex justify-between items-center text-sm mb-0.5">
          <span className="inline-flex w-1/6">Adults:</span>
          <span className="inline-flex w-5/6">{serviceDetails.stay.adults}</span>
        </div>
        <div className="flex justify-between items-center text-sm mb-0.5">
          <span className="inline-flex w-1/6">Children:</span>
          <span className="inline-flex w-5/6">{serviceDetails.stay.children}</span>
        </div>
        <div className="flex justify-between items-center text-sm mb-0.5">
          <span className="inline-flex w-1/6">Rooms:</span>
          <span className="inline-flex w-5/6">{serviceDetails.stay.rooms}</span>
        </div>
        <div className="flex justify-between items-center text-sm mb-0.5">
          <span className="inline-flex w-1/6">Pets:</span>
          <span className="inline-flex w-5/6">{serviceDetails.stay.pets ? 'Yes' : 'No'}</span>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center w-full">
  <button
    onClick={handleSearch}
    className="w-full bg-pink-500 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-pink-600 flex justify-center items-center gap-2"
  >
    Search Stays
  </button>
</div>

 {/* Search Results */}
{searchResults.length > 0 ? (
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {searchResults.map((stay) => (
      <div key={stay._id} className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{stay.name}</h3>
        <p className="text-gray-600">Location: {stay.location}</p>
        <p className="text-gray-600">Price: ${stay.price} per night</p>
        <p className="text-gray-600">Available from: {new Date(stay.availableFrom).toLocaleDateString()}</p>
        <p className="text-gray-600">Available to: {new Date(stay.availableTo).toLocaleDateString()}</p>
        <button
          onClick={() => alert(`Booking ${stay.name}`)}
          className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-pink-600 w-full"
        >
          Book Now
        </button>
      </div>
    ))}
  </div>
) : (
  <p className="text-gray-600 mt-4">No stays found.</p>
)}
      </div>
        );
    };

    export default StaySelector;
