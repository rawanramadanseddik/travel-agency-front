import React, { useState, useEffect } from 'react';

const LocationSelector = ({ setTripDetails }) => {
    const handleLocationChange = (e) => {
      setTripDetails((prevState) => ({
        ...prevState,
        location: e.target.value,
      }));
    };
  
    return (
      <div className="mb-6">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Choose Location</label>
        <select
          id="location"
          className="mt-1 block w-full"
          onChange={handleLocationChange}
        >
          <option value="">Select a Location</option>
          <option value="Paris">Paris</option>
          <option value="London">London</option>
          {/* Add more locations */}
        </select>
      </div>
    );
  };
  
  export default LocationSelector;
  