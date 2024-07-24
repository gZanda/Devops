const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Home endpoint
app.get('/live', (req, res) => {
    res.json({ message: 'Vivo!' });
});

// Sample GET endpoint
app.get('/ready', (req, res) => {
    res.json({ message: 'Pronto!' });
});

// Sample GET endpoint
app.get('/started', (req, res) => {
    res.json({ message: 'Iniciado!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
