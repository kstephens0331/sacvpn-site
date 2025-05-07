import React, { useState } from "react";
import { auth, googleProvider, appleProvider, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc, // ✅ Add this line
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Generate unique 7-digit account number
  const generateAccountNumber = async () => {
    let unique = false;
    let accountNumber;

    while (!unique) {
      accountNumber = Math.floor(1000000 + Math.random() * 9000000).toString();
      const q = query(
        collection(db, "users"),
        where("accountNumber", "==", accountNumber)
      );
      const existing = await getDocs(q);
      if (existing.empty) unique = true;
    }

    return accountNumber;
  };

  // ✅ Handle signup or login
  const handleAuth = async () => {
    try {
      setError("");
      let userCredential;

      if (isRegistering) {
        console.log("🔐 Creating account...");
        userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const accountNumber = await generateAccountNumber();
        console.log("📄 Generated account number:", accountNumber);

        await setDoc(doc(db, "users", userCredential.user.uid), {
          email,
          accountNumber,
          createdAt: new Date(),
        });

        console.log("✅ User saved to Firestore.");
      } else {
        console.log("🔓 Logging in...");
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }

      navigate("/dashboard");
    } catch (err) {
      console.error("🔥 Error during auth:", err.message);
      setError(err.message);
    }
  };

  // ✅ Google sign-in
  const signInWithGoogle = async () => {
    try {
      setError("");
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
  
      // Check if Firestore document exists
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
  
      if (!userDoc.exists()) {
        const accountNumber = await generateAccountNumber();
        await setDoc(userRef, {
          email: user.email,
          accountNumber,
          createdAt: new Date(),
        });
        console.log("✅ Google user saved to Firestore.");
      } else {
        console.log("✅ Google user already exists in Firestore.");
      }
      
      navigate("/dashboard");
    } catch (err) {
      console.error("🔥 Error during Google sign-in:", err.message);
      setError(err.message);
    }
  };

  // ✅ Apple sign-in
  const signInWithApple = async () => {
    try {
      setError("");
      await signInWithPopup(auth, appleProvider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? "Create Account" : "Log In to SACVPN"}
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}

        <input
          type="email"
          className="w-full p-3 mb-4 border rounded-md"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 border rounded-md"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleAuth}
          className="w-full bg-blue-600 text-white py-3 rounded-md mb-4 hover:bg-blue-700 transition"
        >
          {isRegistering ? "Sign Up" : "Log In"}
        </button>

        <div className="flex justify-between mb-4 text-sm">
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Already have an account?" : "Create an account"}
          </span>
        </div>

        <div className="flex flex-col space-y-3">
          <button
            onClick={signInWithGoogle}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Continue with Google
          </button>

          <button
            onClick={signInWithApple}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
