document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(this);

    // Send the form data to Formspree
    fetch('https://formspree.io/f/xgegkwok', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display a success message
        document.getElementById('contact-success').innerText = "Message sent successfully! We'll get back to you soon.";
    })
    .catch(error => {
        // Display an error message
        document.getElementById('contact-success').innerText = "An error occurred. Please try again later.";
    });
});
