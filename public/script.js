function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

setInterval(updateDateTime, 1000);

function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
});