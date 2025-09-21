const express = require('express');
const app = express();
const PORT = 3000;

// Sample JSON data
const data = {
    name: "Saurabh",
    role: "Developer",
    skills: ["Node.js", "Express", "JavaScript"]
};

// Route to send JSON
app.get('/data', (req, res) => {
    res.json(data);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
