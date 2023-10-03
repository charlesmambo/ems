// pages/LoginPage.tsx
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/2 bg-blue-500 rounded-l-lg p-8">
        {/* Sidebar Content */}
        <h1 className="text-4xl text-white mb-4">Welcome to our app</h1>
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Login Form */}
      <div className="w-1/2 p-8">
        {/* Login Form Content */}
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {/* Your login form components go here */}
        {/* Example: */}
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input type="text" id="username" name="username" className="border rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="border rounded-lg px-3 py-2 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
