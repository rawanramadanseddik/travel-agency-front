import React from 'react';

const ExtraFacilitiesSelector = ({ tripDetails, setTripDetails }) => {
    const handleFacilitiesChange = (e) => {
      const selectedFacilities = [...tripDetails.facilities];
      if (e.target.checked) {
        selectedFacilities.push(e.target.value);
      } else {
        const index = selectedFacilities.indexOf(e.target.value);
        if (index > -1) {
          selectedFacilities.splice(index, 1);
        }
      }
  
      setTripDetails((prevState) => ({
        ...prevState,
        facilities: selectedFacilities,
      }));
    };
  
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">Choose Extra Facilities</label>
        <div>
          <input
            type="checkbox"
            value="Wifi"
            onChange={handleFacilitiesChange}
          /> Wifi
        </div>
        <div>
          <input
            type="checkbox"
            value="Breakfast"
            onChange={handleFacilitiesChange}
          /> Breakfast
        </div>
        {/* Add more facilities */}
      </div>
    );
  };
  
  export default ExtraFacilitiesSelector;
  