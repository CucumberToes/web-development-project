// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-email', (req, res) => {
    const email = req.body.email;

    // Save the email to a file
    fs.appendFile('emails.txt', email + '\n', (err) => {
        if (err) {
            console.error('Error saving email:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.send('Email saved successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
