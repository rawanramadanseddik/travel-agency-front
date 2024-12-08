import React from 'react';

const AirportTransportSelector = ({ serviceDetails, setServiceDetails }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <label className="text-lg font-semibold">Pick-up Location</label>
        <input
          type="text"
          value={serviceDetails.airportTransport.pickUpLocation}
          onChange={(e) =>
            setServiceDetails({
              ...serviceDetails,
              airportTransport: { ...serviceDetails.airportTransport, pickUpLocation: e.target.value },
            })
          }
          placeholder="Enter pick-up location"
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <label className="text-lg font-semibold">Destination</label>
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
      {/* Repeat for other fields (Date and Time, Number of People) */}
    </div>
  );
};

export default AirportTransportSelector;
