document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');

    // Toggle between login and signup forms
    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.toggle('hidden');
        signupForm.classList.toggle('hidden');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupForm.classList.toggle('hidden');
        loginForm.classList.toggle('hidden');
    });

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real app, you would send this to your backend
        console.log('Login attempt with:', email, password);
        
        // Updated redirect location to ./dashboard/dashboard.html
        window.location.href = "dashboard/dashboard.html";
    });

    // Signup form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // In a real app, you would send this to your backend
        console.log('Signup attempt with:', name, email, password);
        
        // Updated redirect location to ./dashboard/dashboard.html
        window.location.href = "dashboard/dashboard.html";
    });
});