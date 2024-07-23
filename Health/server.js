const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Home endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Sample GET endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// Sample POST endpoint
app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ receivedData: data });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
