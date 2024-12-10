import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';

const ContactUsPage = () => {
    const handleHomeNavigation = () => {
      };
  return (
    <div className="min-h-screen bg-gray-100">
    {/* Header with Logo */}
    <header className="bg-pink-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
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
        <a href="/public-transport" className="text-gray-600 hover:text-gray-800 text-lg">Public Transportation</a>
        <a href="/contactus" className="text-gray-600 hover:text-gray-800 text-lg">Contact Us</a>
      </nav>
    </div>
    </header>

    <div className="min-h-screen bg-gray-100">
  {/* Include the ContactUs component */}
  <ContactUs />
</div>
</div>
);
}

export default ContactUsPage;
