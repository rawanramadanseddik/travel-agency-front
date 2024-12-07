// import React, { useState } from 'react';
// import LocationSelector from '../components/customizableTrips/LocationSelector';
// import AccommodationSelector from '../components/customizableTrips/AccommodationSelector';
// import TransportationSelector from '../components/customizableTrips/TransportationSelector';
// import ExtraFacilitiesSelector from '../components/customizableTrips/ExtraFacilitiesSelector';
// import TripSummary from '../components/customizableTrips/TripSummary';
// const CustomizableTripPage = () => {
//     const [tripDetails, setTripDetails] = useState({
//       location: '',
//       accommodation: '',
//       transportation: '',
//       facilities: [],
//       totalPrice: 0,
//     });
  
//     return (
//       <div className="p-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">Customize Your Trip</h1>
  
//         <LocationSelector setTripDetails={setTripDetails} />
//         {tripDetails.location && (
//           <>
//             <AccommodationSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
//             <TransportationSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
//             <ExtraFacilitiesSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
//           </>
//         )}
//         <TripSummary tripDetails={tripDetails} />
//       </div>
//     );
//   };
  
// export default CustomizableTripPage;

import React, { useState } from 'react';
import LocationSelector from '../components/customizableTrips/LocationSelector';
import AccommodationSelector from '../components/customizableTrips/AccommodationSelector';
import TransportationSelector from '../components/customizableTrips/TransportationSelector';
import ExtraFacilitiesSelector from '../components/customizableTrips/ExtraFacilitiesSelector';
import TripSummary from '../components/customizableTrips/TripSummary';
import Card from '../UI/Card/Card';
import CardHeader from '../UI/Card/CardHeader';
import CardBody from '../UI/Card/CardBody';
import CardActions from '../UI/Card/CardActions';

const CustomizableTripPage = () => {
  const [tripDetails, setTripDetails] = useState({
    location: '',
    accommodation: '',
    transportation: '',
    facilities: [],
    totalPrice: 0,
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Customize Your Trip</h1>

      <Card>
        <CardHeader>Choose Location</CardHeader>
        <CardBody>
          <LocationSelector setTripDetails={setTripDetails} />
        </CardBody>
      </Card>

      {tripDetails.location && (
        <>
          <Card>
            <CardHeader>Choose Accommodation</CardHeader>
            <CardBody>
              <AccommodationSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>Choose Transportation</CardHeader>
            <CardBody>
              <TransportationSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>Extra Facilities</CardHeader>
            <CardBody>
              <ExtraFacilitiesSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
            </CardBody>
          </Card>
        </>
      )}

      <Card>
        <CardHeader>Trip Summary</CardHeader>
        <CardBody>
          <TripSummary tripDetails={tripDetails} />
        </CardBody>
        <CardActions>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Confirm Trip</button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomizableTripPage;
