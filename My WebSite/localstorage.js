function login() {
    // Get the email and password values
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Assuming you have a function named 'performLogin' that handles the login logic
    var loginSuccessful = performLogin(email, password);

    if (loginSuccessful) {
        // Save user data to local storage
        saveUserData(email);
        
        // Redirect to home.html after successful login
        window.location.href = "home.html";
    } else {
        // Display a message for unsuccessful login
        document.getElementById('login-message').innerText = "Login failed. Please check your credentials.";
    }
}
