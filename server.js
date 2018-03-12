const express = require('express');

const app = express();

app.get('/api/products', (req, res) => {
  const products = [
    {id: 1, productName: 'product1', productPrice: '1'},
    {id: 2, productName: 'product2', productPrice: '2'},
    {id: 3, productName: 'product3', productPrice: '3'},
    {id: 4, productName: 'product4', productPrice: '4'},
    {id: 5, productName: 'product5', productPrice: '5'},
    {id: 6, productName: 'product6', productPrice: '6'},
  ];

  res.json(products);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
