// Firebase configuration
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
firebase.initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = firebase.auth();

// Login function
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Store login state in localStorage
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'index.html';
    })
    .catch((error) => {
      console.error('Login error:', error.message);
      alert('Invalid login credentials. Please try again.');
    });
}

// Logout function
function logout() {
  auth.signOut().then(() => {
    // Clear login state in localStorage
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
  }).catch((error) => {
    console.error('Logout error:', error.message);
  });
}

// Add event listeners for login and logout
document.getElementById('loginButton')?.addEventListener('click', login);
document.getElementById('logoutButton')?.addEventListener('click', logout);

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('loggedIn') !== 'true' && window.location.pathname !== '/login.html') {
    window.location.href = 'login.html';
  }
});