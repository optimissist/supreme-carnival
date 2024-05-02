const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/verify-recaptcha', async (req, res) => {
    const userResponse = req.body.recaptchaResponse;

    // Check if the reCAPTCHA was not selected by the user
    if (!userResponse) {
        return res.status(400).send('reCAPTCHA not selected');
    }

    try {
        const googleResponse = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: '6Ld8gXwkAAAAAOAxBUf_jwkedq6tmpQxzvyuW8dO',
                response: userResponse
            }
        });

        if (googleResponse.data.success) {
            // reCAPTCHA verification succeeded. Perform your form submission here.
            res.status(200).send('reCAPTCHA verification succeeded');
        } else {
            // reCAPTCHA verification failed. Send an error response.
            res.status(400).send('reCAPTCHA verification failed');
        }
    } catch (err) {
        // An error occurred while verifying the reCAPTCHA. Send an error response.
        res.status(500).send('An error occurred while verifying the reCAPTCHA');
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});