import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CustomizableTripPage from './pages/CustomizableTripPage';
import SingleServicesPage from './pages/SingleServicesPage';
import PublicTransportPage from './pages/PublicTransportPage';
import HomePage from './pages/HomePage'; // Assuming you have a HomePage component
import AllInOneTripPage from './components/AllInOneTripService/AllInOneTripPage';
import BookingFormPage from './pages/BookingFormPage';
const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="space-x-6 bg-gray-100 p-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800 text-lg">Home</Link>
          <Link to="/single-services" className="text-gray-600 hover:text-gray-800 text-lg">Single Services</Link>
          <Link to="/public-transport" className="text-gray-600 hover:text-gray-800 text-lg">Public Transportation</Link>
          <Link to="/all-in-one-trip" className="text-gray-600 hover:text-gray-800 text-lg">All-in-One Trip</Link> {/* Added All-in-One Trip link */}
          <Link to="/customizable-trip" className="text-gray-600 hover:text-gray-800 text-lg">Customize Trip</Link> {/* Added Customize Trip */}
          <Link to="/contact" className="text-gray-600 hover:text-gray-800 text-lg">Contact</Link>
        </nav>

        {/* Main Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/all-in-one-trip" element={<AllInOneTripPage />} />
            <Route path="/booking-form" element={<BookingFormPage />} />
            <Route path="/" element={<HomePage />} /> {/* HomePage route */}
            <Route path="/single-services" element={<SingleServicesPage />} />
            <Route path="/public-transport" element={<PublicTransportPage />} />
            <Route path="/customizable-trip" element={<CustomizableTripPage />} /> {/* Customizable Trip route */}
            {/* Add additional routes if necessary */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
