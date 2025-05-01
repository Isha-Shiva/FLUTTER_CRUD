
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let products = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

app.delete('/products/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < products.length) {
    products.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
