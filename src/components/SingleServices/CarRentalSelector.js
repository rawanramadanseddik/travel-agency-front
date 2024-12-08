import React from 'react';

const CarRentalSelector = ({ serviceDetails, setServiceDetails }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <label className="text-lg font-semibold">Pick-up Location</label>
        <input
          type="text"
          value={serviceDetails.carRental.pickUpLocation}
          onChange={(e) =>
            setServiceDetails({
              ...serviceDetails,
              carRental: { ...serviceDetails.carRental, pickUpLocation: e.target.value },
            })
          }
          placeholder="Enter pick-up location"
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>
      {/* Repeat for other fields (Pick-up Date, Drop-off Date, Car Type) */}
    </div>
  );
};

export default CarRentalSelector;
