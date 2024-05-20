document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Set your own username and password
            const validUsername = 'your-username';
            const validPassword = 'your-password';

            if (username === validUsername && password === validPassword) {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                document.getElementById('login-error').style.display = 'block';
            }
        });
    } else {
        if (localStorage.getItem('loggedIn') !== 'true') {
            window.location.href = 'login.html';
        }
    }
});