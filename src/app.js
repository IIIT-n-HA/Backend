const express = require('express');
const app = express();

// TASK 5: SonarQube Vulnerability (Hardcoded Secret)
const DB_PASSWORD = "super_secret_password_999"; 

// TASK 6: ZAP Vulnerability (XSS)
app.get('/search', (req, res) => {
    const query = req.query.q;
    // Reflecting input directly is dangerous!
    res.send(`<h1>Results for: ${query}</h1>`); 
});

app.listen(3000, () => console.log('Server running on port 3000'));
