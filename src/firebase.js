// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
require("firebase/auth")


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANW46oGhvETM9AEAZfKfPVYepVc_g7Zuc",
  authDomain: "e-commerce-41570.firebaseapp.com",
  projectId: "e-commerce-41570",
  storageBucket: "e-commerce-41570.appspot.com",
  messagingSenderId: "778363496846",
  appId: "1:778363496846:web:7a188bc0893d7db1ae1cdf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider(auth, app);
