import React, { useState, useEffect } from 'react';
const AccommodationSelector = ({ tripDetails, setTripDetails }) => {
    const handleAccommodationChange = (e) => {
      setTripDetails((prevState) => ({
        ...prevState,
        accommodation: e.target.value,
      }));
    };
  
    return (
      <div>
        <label htmlFor="accommodation" className="block text-sm font-medium text-gray-700">Choose Accommodation</label>
        <select
          id="accommodation"
          className="mt-1 block w-full"
          onChange={handleAccommodationChange}
        >
          <option value="">Select Accommodation</option>
          <option value="Hotel">Hotel</option>
          <option value="Hostel">Hostel</option>
          {/* Add more accommodation options */}
        </select>
      </div>
    );
  };
  
  export default AccommodationSelector;
  