document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Example hardcoded credentials for demonstration
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
        // Hide error, show success
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';

        // Simulate redirect after login
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        // Hide success, show error
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
});