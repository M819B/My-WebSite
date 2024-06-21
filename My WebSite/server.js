const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Dummy user database (in-memory)
const users = [];

app.use(bodyParser.json());

// Signup endpoint
app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    // Check if email is taken
    if (users.find(user => user.email === email)) {
        return res.status(409).json({ error: 'Email is already taken.' });
    }

    // Add user to the database (in-memory for simplicity)
    users.push({ email, password });

    // Return success
    res.status(201).json({ message: 'Signup successful.' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists and the password is correct
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Return success
        res.status(200).json({ message: 'Login successful.' });
    } else {
        // Return authentication failure
        res.status(401).json({ error: 'Invalid email or password.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


