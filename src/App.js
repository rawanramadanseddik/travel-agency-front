import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleServicePage from './pages/SingleServicesPage';
import AvailableTripsPage from './pages/AllInOneTripsPage';
import CustomizeTripPage from './pages/CustomizableTripPage';
import BookingFormPage from './pages/BookingFormPage';
import BookAllInOnePage from './pages/BookAllInOnePage';
import FeedbackPage from './pages/FeedbackPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import logo from './images/logoo.svg';
import slogan from './images/slog.svg';
import PublicTransportPage from './pages/PublicTransportPage';

const handleHomeNavigation = () => {
  window.location.href = '/'; // Navigate to the home page
};



const App = () => (
  
  <Router>
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-service" element={<SingleServicePage />} />
          <Route path="/available-trips" element={<AvailableTripsPage />} />
          <Route path="/customize-trip" element={<CustomizeTripPage />} />
          <Route path="/public-transport" element={<PublicTransportPage />} />
          <Route path="/bookingform" element={<BookingFormPage />} />
          <Route path="/bookallinone" element={<BookAllInOnePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
        </Routes>
      </div>

      
       {/* Footer */}
       <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={handleHomeNavigation}
          >
            <img src={logo} alt="Logo" className="w-40 h-40" />
            <img src={slogan} alt="Slogan" className="h-20" />
          </div>

          <div className="flex space-x-6">
            <a href="/contactus" className="hover:text-gray-400">Contact Us</a>
            <a href="/aboutus" className="hover:text-gray-400">About Us</a>
          </div>
        </div>
        
      </footer>
      <footer className="bg-gray-200 p-4 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;

// import React from "react";
// import AdminPage from "./pages/AdminPage";

// const App = () => {
//   return (
//     <div>
//       <AdminPage />
//     </div>
//   );
// };

// export default App;
