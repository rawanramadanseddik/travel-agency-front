import React from 'react';

const AttractionSelector = ({ serviceDetails, setServiceDetails }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <label className="text-lg font-semibold">Where are you going?</label>
        <input
          type="text"
          value={serviceDetails.attraction.destination || ''}
          onChange={(e) =>
            setServiceDetails({ ...serviceDetails, attraction: { ...serviceDetails.attraction, destination: e.target.value } })
          }
          placeholder="Enter destination"
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <label className="text-lg font-semibold">Start and End Date</label>
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
  );
};

export default AttractionSelector;
