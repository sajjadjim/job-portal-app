// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdgFk13CIFEsuVto1aInegMhy8wwVLZ3U",
  authDomain: "job-portal-d07d2.firebaseapp.com",
  projectId: "job-portal-d07d2",
  storageBucket: "job-portal-d07d2.firebasestorage.app",
  messagingSenderId: "41231123816",
  appId: "1:41231123816:web:825a4d07cf3ba8cb55c2dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app)
// export const  auth = getAuth(app)