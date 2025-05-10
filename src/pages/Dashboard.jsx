import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("🔄 Running fetchUserData...");
  
      const user = auth.currentUser;
      if (!user) {
        console.log("❌ No user found, redirecting...");
        navigate("/login");
        return;
      }
  
      console.log("✅ Current user UID:", user.uid);
  
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        console.log("📄 Firestore user data:", userDoc.data());
        setUserData(userDoc.data());
      } else {
        console.log("⚠️ User document not found in Firestore.");
      }
    };
  
    fetchUserData();
  }, [navigate]);

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
        <p className="mb-2"><strong>Name:</strong> {userData.name || "Not provided"}</p>
        <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
        <p className="mb-2"><strong>Plan:</strong> {userData.plan || "Not assigned"}</p>
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