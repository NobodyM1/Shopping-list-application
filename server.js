/* Building express server */
const express = require('express');

const app = express();

/* Here we create json data including product information */
app.get('/api/products', (req, res) => {
  const products = [
    {id: 1, name: 'product1', price: '12'},
    {id: 2, name: 'product2', price: '28'},
    {id: 3, name: 'product3', price: '55'},
    {id: 4, name: 'product4', price: '16'},
    {id: 5, name: 'product5', price: '128'},
    {id: 6, name: 'product6', price: '45'},
  ];

  res.json(products);
});

/* Defining port where server will run */
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
