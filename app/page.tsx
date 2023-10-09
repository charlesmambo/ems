// pages/LoginPage.tsx
import React from 'react';
import LoginForm from './components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-blue-500 rounded-r-lg p-8">
        <h1 className="text-4xl text-white mb-4">EMS</h1>
        <p className="text-white">Beyond and Away</p>
      </div>

      
      <div className="w-1/2 p-8">
        
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <LoginForm />
        
      </div>
    </div>
  );
};

export default LoginPage;
