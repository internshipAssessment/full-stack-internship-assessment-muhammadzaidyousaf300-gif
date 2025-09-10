const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/sum', (req, res) => {
    const { a, b } = req.body;

    // Validate input
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    // Compute sum
    const sum = a + b;
    res.json({ sum });
});

module.exports = app;
