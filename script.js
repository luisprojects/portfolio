// Firebase initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

// Log out function
function logout() {
    signOut(auth).then(() => {
        localStorage.setItem('loggedIn', 'false');
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error("Sign out error:", error);
    });
}

// Check login status
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    loadComments();
});

// Add comment
document.getElementById('commentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const commentInput = document.getElementById('commentInput').value;
    try {
        await addDoc(collection(db, 'comments'), {
            text: commentInput,
            timestamp: new Date()
        });
        document.getElementById('commentInput').value = '';
        loadComments();
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

// Load comments
async function loadComments() {
    const commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';
    const querySnapshot = await getDocs(collection(db, 'comments'));
    querySnapshot.forEach((doc) => {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.textContent = doc.data().text;
        commentsContainer.appendChild(comment);
    });
}