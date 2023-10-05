// pages/LoginPage.tsx
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div dir='rtl' className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/2 bg-blue-500 rounded-s-lg p-8">
        {/* Sidebar Content */}
        <h1 className="text-4xl text-white mb-4">EMS</h1>
        <p className="text-white">Beyond and Away</p>
      </div>

      
      <div className="w-1/2 p-8">
        
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        
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
