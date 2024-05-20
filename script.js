document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    // Display current date and time
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const now = new Date();
    dateElement.textContent = now.toLocaleDateString();
    timeElement.textContent = now.toLocaleTimeString();

    // Logout button functionality
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        window.location.href = 'login.html';
    });
});