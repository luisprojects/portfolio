// Firebase configuration and initialization
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

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

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    // Display the current date and time
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    setInterval(() => {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString();
        timeElement.textContent = now.toLocaleTimeString();
    }, 1000);
});

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successful login
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error logging in:', error);
            alert('Invalid login credentials. Please try again.');
        });
}

// Logout function
function logout() {
    signOut(auth).then(() => {
        localStorage.setItem('loggedIn', 'false');
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Error logging out:', error);
    });
}

// Add a comment function for the blog
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsDiv = document.getElementById('comments');

    const newComment = document.createElement('p');
    newComment.textContent = commentInput.value;
    commentsDiv.appendChild(newComment);

    commentInput.value = '';
}

export { login, logout, addComment };