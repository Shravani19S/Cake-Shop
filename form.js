const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Route to handle form submission
app.post('/order', (req, res) => {
    const { name, phone, email, cakeType, quantity, address } = req.body;

    // Here, you can process the order, save to database, send an email, etc.
    console.log('Order Details:', req.body);

    // Respond to the user
    res.send(`
        <h2>Thank You, ${name}!</h2>
        <p>Your order for ${quantity} ${cakeType} cake(s) has been received.</p>
        <p>We will contact you shortly at ${phone} or ${email}.</p>
        <p>Delivery Address: ${address}</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
