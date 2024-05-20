// Import necessary functions from Firebase SDK
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Initialize Firebase Auth
const auth = getAuth();

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
  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      signOut(auth).then(() => {
        localStorage.removeItem('loggedIn');
        window.location.href = 'login.html';
      }).catch((error) => {
        console.error('Sign Out Error', error);
      });
    });
  }
});