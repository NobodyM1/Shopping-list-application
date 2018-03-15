/* Building express server */
const express = require('express');

const app = express();

/* Here we create json data including product information */
app.get('/api/products', (req, res) => {
  const products = [
    {id: 1, name: 'Brown jacket', price: '150',  productImage: "https:\/\/images.pexels.com\/photos\/887898\/pexels-photo-887898.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
    {id: 2, name: 'Black jacket', price: '200',  productImage: "https:\/\/images.pexels.com\/photos\/374135\/pexels-photo-374135.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
    {id: 3, name: 'Sneakers', price: '55',  productImage: "https:\/\/images.pexels.com\/photos\/637076\/pexels-photo-637076.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
    {id: 4, name: 'Black shoes', price: '100',  productImage: "https:\/\/images.pexels.com\/photos\/292998\/pexels-photo-292998.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
    {id: 5, name: 'Leather gloves', price: '50', productImage: "https:\/\/images.pexels.com\/photos\/45057\/pexels-photo-45057.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
    {id: 6, name: 'Wool gloves', price: '20',  productImage: "https:\/\/images.pexels.com\/photos\/63448\/pexels-photo-63448.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
  ];

  res.json(products);
});

/* Defining port where server will run */
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
