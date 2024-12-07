import React, { useState, useEffect } from 'react';

const TransportationSelector = ({ tripDetails, setTripDetails }) => {
    const handleTransportationChange = (e) => {
      setTripDetails((prevState) => ({
        ...prevState,
        transportation: e.target.value,
      }));
    };
  
    return (
      <div>
        <label htmlFor="transportation" className="block text-sm font-medium text-gray-700">Choose Transportation</label>
        <select
          id="transportation"
          className="mt-1 block w-full"
          onChange={handleTransportationChange}
        >
          <option value="">Select Transportation</option>
          <option value="Bus">Bus</option>
          <option value="Car">Car</option>
          {/* Add more transportation options */}
        </select>
      </div>
    );
  };
  
  export default TransportationSelector;
  