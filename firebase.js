// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Login function
function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'index.html';
    })
    .catch((error) => {
      console.error(error.message);
      alert('Login failed: ' + error.message);
    });
}

// Logout function
function logout() {
  signOut(auth).then(() => {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
  }).catch((error) => {
    console.error(error.message);
  });
}

export { login, logout };