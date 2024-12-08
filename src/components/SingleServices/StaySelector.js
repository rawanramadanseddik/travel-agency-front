import React from 'react';

const StaySelector = ({ serviceDetails, setServiceDetails }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <label className="text-lg font-semibold">Where are you going?</label>
        <input
          type="text"
          value={serviceDetails.stay.destination}
          onChange={(e) =>
            setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, destination: e.target.value } })
          }
          placeholder="Enter destination"
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>
      {/* Repeat for other fields (Check-in, Check-out, Adults, Children, Rooms, Pets) */}
    </div>
  );
};

export default StaySelector;
