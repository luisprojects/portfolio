import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

document.addEventListener('DOMContentLoaded', function () {
    const auth = getAuth();

    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const lastUpdatedElement = document.getElementById('lastUpdated');

    function updateDateTime() {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString();
        timeElement.textContent = now.toLocaleTimeString();
    }

    function updateLastUpdated() {
        lastUpdatedElement.textContent = new Date(document.lastModified).toLocaleString();
    }

    updateDateTime();
    updateLastUpdated();
    setInterval(updateDateTime, 1000);

    document.getElementById('logout').addEventListener('click', function () {
        signOut(auth).then(() => {
            localStorage.removeItem('loggedIn');
            window.location.href = 'login.html';
        }).catch((error) => {
            console.error('Sign out error:', error);
        });
    });
});