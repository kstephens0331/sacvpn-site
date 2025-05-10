import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuth = () => {
    if (!email || !password) {
      setError("Please enter an email and password.");
      return;
    }

    // Simulate successful login/signup
    navigate("/dashboard");
  };

  const signInWithGoogle = () => {
    navigate("/dashboard");
  };

  const signInWithApple = () => {
    navigate("/dashboard");
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