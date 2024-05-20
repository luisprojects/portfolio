// Firebase Initialization
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgUAojmCBprTeY7_o3xGnDhDuPxOPvD_g",
    authDomain: "portfolio-3014b.firebaseapp.com",
    projectId: "portfolio-3014b",
    storageBucket: "portfolio-3014b.appspot.com",
    messagingSenderId: "764292816862",
    appId: "1:764292816862:web:4e6fa598a3fc7b774ec74f",
    measurementId: "G-F9J431P1SW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check authentication status
document.addEventListener('DOMContentLoaded', function() {
    onAuthStateChanged(auth, user => {
        if (!user) {
            window.location.href = 'login.html';
        }
    });

    updateDateTime();
});

// Logout function
function logout() {
    signOut(auth).then(() => {
        window.location.href = 'login.html';
    }).catch(error => {
        console.error("Error signing out:", error);
    });
}

// Date and Time
function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const now = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);

    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeElement.textContent = now.toLocaleTimeString(undefined, timeOptions);

    setTimeout(updateDateTime, 1000);
}

// Blog
function addPost() {
    const postContent = document.getElementById('postContent').value;
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.textContent = postContent;

    const postsContainer = document.getElementById('posts');
    postsContainer.appendChild(postElement);

    document.getElementById('postContent').value = '';
}

// Exporting functions for global access
window.logout = logout;
window.addPost = addPost;