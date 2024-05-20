// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

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

// Handle login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
      })
      .catch((error) => {
        document.getElementById('error-message').textContent = 'Invalid email or password';
      });
  });
}

// Check authentication state
onAuthStateChanged(auth, (user) => {
  if (!user) {
    if (!window.location.href.includes('login.html')) {
      window.location.href = 'login.html';
    }
  }
});