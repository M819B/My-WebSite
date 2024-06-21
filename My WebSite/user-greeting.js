// userGreeting.js

// Function to retrieve username from local storage
function getUsernameFromLocalStorage() {
  return localStorage.getItem('username');
}

// Function to update username display
function updateUserGreeting() {
  const username = getUsernameFromLocalStorage();
  const usernameElement = document.getElementById('username');
  if (username) {
      // If username is available, display it in black color
      usernameElement.textContent = "Welcome, " + username;
      usernameElement.style.color = "black";
  } else {
      // If username is not available, display a default greeting message
      usernameElement.textContent = "Welcome!";
  }
}

// Call the function to update username display when the page loads
window.onload = updateUserGreeting;

// Function to retrieve username from URL query parameter
function getUsernameFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('username');
}

// Function to update username display
function updateUserGreeting() {
  const username = getUsernameFromURL();
  const usernameElement = document.getElementById('username');
  if (username) {
      // If username is available, display it in black color
      usernameElement.textContent = "Welcome, " + username;
      usernameElement.style.color = "black";
  } else {
      // If username is not available, display a default greeting message
      usernameElement.textContent = "Welcome!";
  }
}

// Call the function to update username display when the page loads
window.onload = updateUserGreeting;

// userGreeting.js
document.addEventListener('DOMContentLoaded', function() {
  const queryParams = new URLSearchParams(window.location.search);
  const username = queryParams.get('username');
  const usernameElement = document.getElementById('username');

  if (username) {
      usernameElement.textContent = `Hello, ${username}!`;
  } else {
      usernameElement.textContent = 'Hello, Guest!';
  }
});
