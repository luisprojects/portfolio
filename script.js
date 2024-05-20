import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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
const auth = getAuth();
const db = getFirestore(app);

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
    }
});

// Logout function
function logout() {
    signOut(auth).then(() => {
        window.location.href = "login.html";
    }).catch((error) => {
        console.error("Error signing out: ", error);
    });
}

document.getElementById("logout-btn").addEventListener("click", logout);

// Add comment
document.getElementById("comment-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const comment = commentInput.value;
    try {
        await addDoc(collection(db, "comments"), {
            text: comment,
            timestamp: new Date()
        });
        commentInput.value = "";
        loadComments();
    } catch (e) {
        console.error("Error adding comment: ", e);
    }
});

// Load comments
async function loadComments() {
    const commentsDiv = document.getElementById("comments");
    commentsDiv.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "comments"));
    querySnapshot.forEach((doc) => {
        const commentData = doc.data();
        const commentElement = document.createElement("p");
        commentElement.textContent = commentData.text;
        commentsDiv.appendChild(commentElement);
    });
}

// Load comments on page load
document.addEventListener("DOMContentLoaded", loadComments);

// Update last updated date
document.getElementById("last-updated").textContent = new Date().toLocaleDateString();