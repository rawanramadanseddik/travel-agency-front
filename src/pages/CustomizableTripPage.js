// import React, { useState } from 'react';
// import LocationSelector from '../components/customizableTrips/LocationSelector';
// import AccommodationSelector from '../components/customizableTrips/AccommodationSelector';
// import TransportationSelector from '../components/customizableTrips/TransportationSelector';
// import ExtraFacilitiesSelector from '../components/customizableTrips/ExtraFacilitiesSelector';
// import TripSummary from '../components/customizableTrips/TripSummary';
// import Card from '../UI/Card/Card';
// import CardHeader from '../UI/Card/CardHeader';
// import CardBody from '../UI/Card/CardBody';
// import CardActions from '../UI/Card/CardActions';
// import logo from '../images/logoo.svg'; 
// import slogan from '../images/slog.svg'; 

// const CustomizableTripPage = () => {
//   const [tripDetails, setTripDetails] = useState({
//     location: '',
//     accommodation: '',
//     transportation: '',
//     facilities: [],
//     totalPrice: 0,
//   });

//   return (
//     <div className="background h-screen">
      
//       {/* Logo and Navigation Bar */}
//       <header className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-4">
//             <img src={logo} alt="Logo" a href="#" className="w-20 h-30" />
//             <img src={slogan} alt="Logo" a href="#" className="w-30 h-12" />
            
//           </div>
//           {/* Navigation Bar */}
//           <nav className="space-x-6">
//             <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
//             <a href="#" className="text-gray-600 hover:text-gray-800">Trips</a>
//             <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Customize Your Trip</h1>

//         <Card>
//           <CardHeader>Choose Location</CardHeader>
//           <CardBody>
//             <LocationSelector setTripDetails={setTripDetails} />
//           </CardBody>
//         </Card>

//         {tripDetails.location && (
//           <>
//             <Card>
//               <CardHeader>Choose Accommodation</CardHeader>
//               <CardBody>
//                 <AccommodationSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
//               </CardBody>
//             </Card>

//             <Card>
//               <CardHeader>Choose Transportation</CardHeader>
//               <CardBody>
//                 <TransportationSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
//               </CardBody>
//             </Card>

//             <Card>
//               <CardHeader>Extra Facilities</CardHeader>
//               <CardBody>
//                 <ExtraFacilitiesSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
//               </CardBody>
//             </Card>
//           </>
//         )}

//         <Card>
//           <CardHeader>Trip Summary</CardHeader>
//           <CardBody>
//             <TripSummary tripDetails={tripDetails} />
//           </CardBody>
//           <CardActions>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded">Confirm Trip</button>
//           </CardActions>
//         </Card>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
//           <p>&copy; 2024 My Travel App. All rights reserved.</p>
//           <nav className="space-x-4">
//             <a href="#" className="hover:text-gray-300">Privacy Policy</a>
//             <a href="#" className="hover:text-gray-300">Terms of Service</a>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CustomizableTripPage;


import React, { useState } from 'react';
import LocationSelector from '../components/customizableTrips/LocationSelector';
import AccommodationSelector from '../components/customizableTrips/AccommodationSelector';
import TransportationSelector from '../components/customizableTrips/TransportationSelector';
import ExtraFacilitiesSelector from '../components/customizableTrips/ExtraFacilitiesSelector';
import TripSummary from '../components/customizableTrips/TripSummary';
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';
import luxorImg from '../images/luxor.jpg';
import marinaImg from '../images/marina.jpg';
import sharmImg from '../images/sharm.jpg';

const locations = [
  { id: 1, name: 'Luxor', image: luxorImg },
  { id: 2, name: 'Sharm EL Sheikh', image: sharmImg },
  { id: 3, name: 'Marina', image: marinaImg },
];

const CustomizableTripPage = () => {
  const [tripDetails, setTripDetails] = useState({
    location: '',
    accommodation: '',
    transportation: '',
    facilities: [],
    totalPrice: 0,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setTripDetails((prev) => ({ ...prev, location: location.name }));
  };

  const handleHomeNavigation = () => {
    window.location.href = '/'; // Navigate to home page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-pink-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4 cursor-pointer" onClick={handleHomeNavigation}>
        <img src={logo} alt="Logo" className="w-40 h-40" />
        <img src={slogan} alt="Slogan" className="h-20" />
        </div>
        {/* Updated Navigation Bar */}
        <nav className="space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-800 text-lg">Home</a>
          <a href="/single-services" className="text-gray-600 hover:text-gray-800 text-lg">Single Services</a>
            <a href="/customizable-trip" className="text-gray-600 hover:text-gray-800 text-lg">Customize Trip</a>
            <a href="/public-transport" className="text-gray-600 hover:text-gray-800 text-lg">Public Transportation</a>
            <a href="/trips" className="text-gray-600 hover:text-gray-800 text-lg">Trips</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800 text-lg">Contact</a>
        </nav>
      </div>
    </header>


      {/* Main Content */}
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-white mb-6 text-center bg-gray-500 py-4 rounded-lg">
          Customize Your Trip
        </h1>

        {!selectedLocation && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                onClick={() => handleLocationClick(location)}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-white text-2xl font-bold">{location.name}</h2>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedLocation && (
          <div className="relative bg-white rounded-lg shadow-lg p-6 mt-6">
            <img
              src={selectedLocation.image}
              alt={selectedLocation.name}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">{selectedLocation.name}</h2>

            <div className="mt-6">
              
              <AccommodationSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
              <TransportationSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
              <ExtraFacilitiesSelector tripDetails={tripDetails} setTripDetails={setTripDetails} />
            </div>

            <TripSummary tripDetails={tripDetails} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <p>&copy; 2024 My Travel App. All rights reserved.</p>
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default CustomizableTripPage;
