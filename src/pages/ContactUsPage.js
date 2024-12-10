import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';

const ContactUsPage = () => {
  const handleHomeNavigation = () => {
    // Logic for navigating to the home page
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      {/* Header with Logo */}
      <header className="bg-pink-200 shadow-md w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={handleHomeNavigation}
          >
            <img src={logo} alt="Logo" className="w-40 h-40" />
            <img src={slogan} alt="Slogan" className="h-20" />
          </div>

          {/* Navigation Bar */}
          <nav className="space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-800 text-lg">Home</a>
            <a href="/aboutus" className="text-gray-600 hover:text-gray-800 text-lg">About Us</a>
            <a href="/contactus" className="text-gray-600 hover:text-gray-800 text-lg">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Main content area */}
      <div className="w-full bg-gray-100 mt-4">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Include the ContactUs component */}
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
