// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2OhT9hg4rDL4Om2UdSC07sjVmTeHN9YM",
  authDomain: "sacvpn-21faf.firebaseapp.com",
  projectId: "sacvpn-21faf",
  storageBucket: "sacvpn-21faf.appspot.com",
  messagingSenderId: "372560306282",
  appId: "1:372560306282:web:f392df8e436eff51a4ea13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

const db = getFirestore(app);

export { auth, googleProvider, appleProvider, db };