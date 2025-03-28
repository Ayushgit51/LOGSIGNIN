import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage (stored after login)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login"); // Redirect to login if no user is found
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from storage
    navigate("/signup"); // Redirect to login
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button className="bg-red-500 px-4 py-2 rounded" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* User Info */}
      <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Welcome, {user?.username}!</h2>
        <p className="text-gray-700">Email: {user?.email}</p>
      </div>

      {/* Nature Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Nature_%283%29.jpg"
          alt="Nature 1"
          className="w-full h-56 object-cover rounded-lg"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Nature_2.jpg"
          alt="Nature 2"
          className="w-full h-56 object-cover rounded-lg"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/Nature_3.jpg"
          alt="Nature 3"
          className="w-full h-56 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Dashboard;
