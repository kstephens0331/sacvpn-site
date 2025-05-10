import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    setUserData({
      name: "Test User",
      email: "user@example.com",
      plan: "Pro",
      accountNumber: "12345678",
    });
  }, []);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to SACVPN</h1>
        <p className="mb-2"><strong>Name:</strong> {userData.name}</p>
        <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
        <p className="mb-2"><strong>Plan:</strong> {userData.plan}</p>
        <p className="mb-6"><strong>Account #:</strong> {userData.accountNumber}</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}