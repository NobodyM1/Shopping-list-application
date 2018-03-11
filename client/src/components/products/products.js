import React, { Component } from 'react';
import './products.css';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({products}, () => console.log('Products fetched..', products)));
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {this.state.products.map(products =>
            <li key={products.id}>{ products.productName } { products.productPrice }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Products;
