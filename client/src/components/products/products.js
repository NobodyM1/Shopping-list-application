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
      <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>img</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(products =>
              <tr key={products.id} className="box">
                <td className="productImg"></td>
                <td className="productName">
                  { products.productName }
                </td>
                <td className="productPrice">
                  { products.productPrice }
                </td>
                <td><button></button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
