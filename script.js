// Firebase initialization and authentication logic
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

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
const auth = getAuth();

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
});

function logout() {
    signOut(auth).then(() => {
        localStorage.removeItem('loggedIn');
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Sign Out Error', error);
    });
}