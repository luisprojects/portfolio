// Firebase initialization
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

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

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'login.html';
    }
});

function logout() {
    signOut(auth).then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
}

// Add comment logic
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;
    if (commentText.trim()) {
        const commentsDiv = document.getElementById('comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);
        commentInput.value = '';
    }
}

// Date and time display
document.addEventListener('DOMContentLoaded', function() {
    const dateSpan = document.getElementById('date');
    const timeSpan = document.getElementById('time');

    function updateDateTime() {
        const now = new Date();
        dateSpan.textContent = now.toLocaleDateString();
        timeSpan.textContent = now.toLocaleTimeString();
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});