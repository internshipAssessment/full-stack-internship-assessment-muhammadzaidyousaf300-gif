const express = require('express');
const app = express();

app.use(express.json());

// POST /api/sum
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

// Start server (optional for testing)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
