function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-toggle").classList.add("active");
    document.getElementById("signup-toggle").classList.remove("active");
}

function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-toggle").classList.remove("active");
    document.getElementById("signup-toggle").classList.add("active");
}

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Perform login validation
    // Example: Send a request to the server for authentication
    // If successful, redirect to home.html
    // Example: window.location.href = "home.html";
}

function signup() {
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // Perform signup validation
    // Example: Send a request to the server for registration
    // If successful, redirect to home.html
    // Example: window.location.href = "home.html";
    
    function login() {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
    
        // Perform login validation
        // Example: Send a request to the server for authentication
        // If successful, store user information and redirect to home.html
        // Example: window.location.href = "home.html";
        // Also, store user information in the hidden div
        const userInfo = {
            firstName: "John", // Replace with the actual first name
            lastName: "Doe",   // Replace with the actual last name
            email: email
        };
        document.getElementById("user-info").innerText = JSON.stringify(userInfo);
        window.location.href = "home.html";
    }

    function showLogin() {
        document.getElementById("login-form").style.display = "block";
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-toggle").classList.add("active");
        document.getElementById("signup-toggle").classList.remove("active");
    }
    
    function showSignup() {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "block";
        document.getElementById("login-toggle").classList.remove("active");
        document.getElementById("signup-toggle").classList.add("active");
    }
    
    function login() {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
    
        // TODO: Perform login validation
        console.log(`Login request: Email - ${email}, Password - ${password}`);
    }
    
    function signup() {
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
    
        // TODO: Perform signup validation
        console.log(`Signup request: Email - ${email}, Password - ${password}`);
    }
    
    function login() {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
    
        // Example: Perform login validation (replace with your actual validation logic)
        if (email === "user@example.com" && password === "password") {
            // If login is successful, redirect to home.html and pass user's name as a query parameter
            const userName = "John Doe"; // Replace with the actual user's name
            window.location.href = `home.html?name=${encodeURIComponent(userName)}`;
        } else {
            alert("Invalid email or password. Please try again.");
        }
    }
    
    
}

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Example: Retrieve user data from localStorage (replace with server-side logic)
    const storedData = localStorage.getItem('userData');

    if (storedData) {
        const userData = JSON.parse(storedData);
        // Check if entered credentials match stored credentials
        if (email === userData.email && password === userData.password) {
            // If login is successful, display a message
            document.getElementById("login-message").innerText = "Login successful!";
        } else {
            // If login fails, display an error message
            document.getElementById("login-message").innerText = "Invalid email or password. Please try again.";
        }
    } else {
        // If user data is not found, display an error message
        document.getElementById("login-message").innerText = "No account found. Please sign up.";
    }
}

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

document.addEventListener('DOMContentLoaded', function() {
    // Check if there's an email parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email');

    if (emailParam) {
        // Display the user's name in the right corner
        displayUserName(emailParam);
    }
});

function displayUserName(email) {
    // Retrieve user data from local storage by email
    const userData = getUserDataByEmail(email);

    // Display the user's name in the right corner (replace 'username-display' with your actual element ID)
    document.getElementById('username-display').innerText = `Welcome, ${userData.firstName} ${userData.lastName}!`;
}

// Function to retrieve user data by email from local storage
function getUserDataByEmail(email) {
    // Replace this with your logic to retrieve user data by email
    // For demonstration purposes, assume an array of user data in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
}
