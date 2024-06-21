document.addEventListener("DOMContentLoaded", function () {
    // Get the user's name from the query parameters
    const params = new URLSearchParams(window.location.search);
    const userName = params.get("name");

    // Display the user's name in the right upper corner
    document.getElementById("user-name").innerText = userName;
});
