import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default to 'user'
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Navigate based on role before making API request
    if (role === 'user') {
      navigate('/'); // Navigate to Home Page
    } else if (role === 'admin') {
      navigate('/admin'); // Navigate to Admin Page
    }

    try {
      const response = await axios.post('/api/users/signup', {
        name,
        email,
        password,
        role,
      });

      setSuccess(response.data.message); // Show success message
      setError(''); // Clear any previous errors
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Server error');
      setSuccess(''); // Clear success message
    }
  };

  const handleHomeNavigation = () => {
    window.location.href = '/'; // Navigate to the home page
  };

  return (
    <div className="min-h-screen bg-white-100">
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
            <a href="/contactus" className="text-gray-600 hover:text-gray-800 text-lg">Contact Us</a>
            <a href="/aboutus" className="text-gray-600 hover:text-gray-800 text-lg">About Us</a>
          </nav>
        </div>
      </header>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
          
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && <div className="text-green-500 mb-4">{success}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:text-blue-700">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
