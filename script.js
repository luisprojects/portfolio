document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Replace with your actual credentials
        const validUsername = 'yourUsername';
        const validPassword = 'yourPassword';

        if (username === validUsername && password === validPassword) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'index.html';
        } else {
            errorMsg.classList.remove('hidden');
        }
    });
});