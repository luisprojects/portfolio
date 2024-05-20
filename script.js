// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check for user authentication state
document.addEventListener('DOMContentLoaded', function() {
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in
      localStorage.setItem('loggedIn', 'true');
    } else {
      // User is signed out
      localStorage.removeItem('loggedIn');
      window.location.href = 'login.html';
    }
  });

  // Logout button functionality
  document.getElementById('logout-button').addEventListener('click', function() {
    signOut(auth).then(() => {
      localStorage.removeItem('loggedIn');
      window.location.href = 'login.html';
    }).catch((error) => {
      console.error('Sign Out Error', error);
    });
  });
});