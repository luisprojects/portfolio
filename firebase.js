// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgUAojmCBprTeY7_o3xGnDhDuPxOPvD_g",
  authDomain: "portfolio-3014b.firebaseapp.com",
  projectId: "portfolio-3014b",
  storageBucket: "portfolio-3014b.appspot.com",
  messagingSenderId: "764292816862",
  appId: "1:764292816862:web:4e6fa598a3fc7b774ec74f",
  measurementId: "G-F9J431P1SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };