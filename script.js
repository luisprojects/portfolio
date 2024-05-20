// Firebase initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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

// Authentication state observer
onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in
    console.log("User signed in: ", user.email);
  } else {
    // User is signed out
    window.location.href = 'login.html';
  }
});

// Login function
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log("Login successful: ", user.email);
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.error("Error logging in: ", error);
      alert("Login failed: " + error.message);
    });
}

// Logout function
function logout() {
  signOut(auth).then(() => {
    // Sign-out successful
    console.log("Logout successful");
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
  }).catch(error => {
    console.error("Error logging out: ", error);
  });
}

// Add event listeners for login and logout buttons
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('loginButton')) {
    document.getElementById('loginButton').addEventListener('click', login);
  }
  if (document.getElementById('logoutButton')) {
    document.getElementById('logoutButton').addEventListener('click', logout);
  }
});

// Date and time display
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  document.getElementById('date').innerText = date;
  document.getElementById('time').innerText = time;
}

setInterval(updateDateTime, 1000);

// Blog comment functionality
function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentText = commentInput.value;
  if (commentText) {
    const commentSection = document.querySelector('.comment-section');
    const comment = document.createElement('div');
    comment.className = 'comment';
    comment.innerHTML = `<h4>Anonymous</h4><p>${commentText}</p>`;
    commentSection.appendChild(comment);
    commentInput.value = '';
  }
}

// Image rotation functionality
const leftImages = ["images/left1.jpg", "images/left2.jpg", "images/left3.jpg", "images/left4.jpg", "images/left5.jpg"];
const rightImages = ["images/right1.jpg", "images/right2.jpg", "images/right3.jpg", "images/right4.jpg", "images/right5.jpg"];
let leftIndex = 0;
let rightIndex = 0;

function rotateImages() {
  leftIndex = (leftIndex + 1) % leftImages.length;
  rightIndex = (rightIndex + 1) % rightImages.length;

  document.getElementById('left-image').src = leftImages[leftIndex];
  document.getElementById('right-image').src = rightImages[rightIndex];
}

setInterval(rotateImages, 5000);