'use client';
// src/components/LoginForm.tsx
import { useState } from "react";
// import { useRouter } from "next/router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  const handleLogin = () => {
    // You can replace this with actual authentication logic.
    // For simplicity, we're using hard-coded values here.
    if (username === "user" && password === "password") {
      // Redirect to the home page upon successful login
      window.location.href = "/dashboard/home";
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input type="text" id="username" name="username" value={username} className="border rounded-lg px-3 py-2 w-full" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" value={password} className="border rounded-lg px-3 py-2 w-full" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2" onClick={handleLogin}>Login</button>
        </form>
    </div>
  );
};

export default LoginForm;
