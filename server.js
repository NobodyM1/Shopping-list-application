const express = require('express');

const app = express();

app.get('/api/products', (req, res) => {
  const products = [
    {id: 1, name: 'product1', price: '1'},
    {id: 2, name: 'product2', price: '2'},
    {id: 3, name: 'product3', price: '3'},
    {id: 4, name: 'product4', price: '4'},
    {id: 5, name: 'product5', price: '5'},
    {id: 6, name: 'product6', price: '6'},
  ];

  res.json(products);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));