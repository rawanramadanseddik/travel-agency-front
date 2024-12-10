import React, { useState } from 'react';
import { FaCloudSun, FaWind, FaTint } from 'react-icons/fa'; // Importing weather icons
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';
const WeatherPage = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state for fetching data

  const handleFetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    setIsLoading(true); // Start loading when request is made
    try {
      const apiKey = 'e4e02f0fe12c464b9ff04335240712'; // Replace with your actual WeatherAPI key
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(`Error: ${errorData.error.message}`);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData({
          location: {
            name: data.location.name,
            country: data.location.country,
          },
          current: {
            temp_c: data.current.temp_c,
            condition: {
              text: data.current.condition.text,
              icon: `https:${data.current.condition.icon}`, // Full URL to the icon image
            },
            humidity: data.current.humidity,
            wind_kph: data.current.wind_kph,
          },
        });
        setError(null);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setError('Error fetching weather data.');
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Define the handleHomeNavigation function
  const handleHomeNavigation = () => {
    // Implement navigation logic. For example:
    window.location.href = '/'; // Redirect to the home page
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-start px-0 py-10 w-full">
      {/* Header Section */}
      <header className="bg-pink-200 shadow-md w-full">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={handleHomeNavigation} // Handle the click event to navigate home
          >
             <img src={logo} alt="Logo" className="w-40 h-40" />
             <img src={slogan} alt="Slogan" className="h-20" />
          </div>
          {/* Navigation Bar */}
          <nav className="space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-800 text-lg">Home</a>
            <a href="/single-service" className="text-gray-600 hover:text-gray-800 text-lg">Single Services</a>
            <a href="/public-transport" className="text-gray-600 hover:text-gray-800 text-lg">Public Transportation</a>
            <a href="/contactus" className="text-gray-600 hover:text-gray-800 text-lg">Contact Us</a>
            <a href="/aboutus" className="text-gray-600 hover:text-gray-800 text-lg">About Us</a>
          </nav>
        </div>
      </header>

      {/* Weather Section */}
      <div className="w-full bg-white shadow-lg rounded-lg p-6 mt-8 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Weather Finder</h1>

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        />

        <button
          onClick={handleFetchWeather}
          className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
        >
          Get Weather
        </button>
      </div>

      {/* Weather Info Section */}
      {isLoading && (
        <div className="mt-6 text-lg text-blue-600">Loading...</div>
      )}

      {weatherData && !isLoading && (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6 w-full mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Weather in {weatherData.location.name}, {weatherData.location.country}
          </h2>
          <div className="flex justify-center items-center mb-4">
            <img
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
              className="w-20 h-20"
            />
            <p className="text-5xl font-bold text-gray-800 ml-4">
              {weatherData.current.temp_c}°C
            </p>
          </div>
          <p className="text-lg text-gray-700">{weatherData.current.condition.text}</p>
          <div className="mt-4 text-gray-600 space-y-4">
            <div className="flex justify-center items-center">
              <FaTint className="mr-2 text-blue-600" />
              <p>Humidity: {weatherData.current.humidity}%</p>
            </div>
            <div className="flex justify-center items-center">
              <FaWind className="mr-2 text-gray-600" />
              <p>Wind: {weatherData.current.wind_kph} km/h</p>
            </div>
            <div className="flex justify-center items-center">
              <FaCloudSun className="mr-2 text-yellow-600" />
              <p>Condition: {weatherData.current.condition.text}</p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && !isLoading && (
        <div className="mt-6 bg-red-100 text-red-600 px-4 py-3 rounded-lg w-full mx-auto text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
