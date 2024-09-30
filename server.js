const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
/*mongoose.connect('mongodb://localhost:27017/cake_orders', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});*/

// Define CakeOrder schema and model
const cakeOrderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  cakeType: String,
  quantity: Number,
  address: String
});

const CakeOrder = mongoose.model('CakeOrder', cakeOrderSchema);

// Route to handle form submission
app.post('/order', async (req, res) => {
  try {
    const order = new CakeOrder({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      cakeType: req.body.cakeType,
      quantity: req.body.quantity,
      address: req.body.address
    });

    await order.save();
    res.status(201).send('Order placed successfully!');
  } catch (error) {
    res.status(500).send('Error placing order: ' + error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
