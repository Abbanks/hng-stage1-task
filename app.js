const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({ "message": "API is running" });
});

app.get('/health', (req, res) => {
    res.status(200).json({ "message": "healthy" });
});

app.get('/me', (req, res) => {
    res.status(200).json({
        "name": "Olubanke Eboda",
        "email": "olubanke.eboda@example.com",
        "github": "https://github.com/Abbanks"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});