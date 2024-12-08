// TransportOptions.js
import React from 'react';

const TransportOptions = ({ transportDetails, setTransportDetails }) => {
  const handleOptionChange = (e) => {
    setTransportDetails((prev) => ({
      ...prev,
      option: e.target.value,
    }));
  };

  return (
    <div>
      <label htmlFor="transportOption" className="block text-sm font-medium text-gray-700">
        Transport Options
      </label>
      <select
        id="transportOption"
        className="mt-1 block w-full"
        onChange={handleOptionChange}
      >
        <option value="">Select an Option</option>
        <option value="Bus">Bus</option>
        <option value="Metro">Metro</option>
        <option value="Tram">Tram</option>
      </select>
    </div>
  );
};

export default TransportOptions;
