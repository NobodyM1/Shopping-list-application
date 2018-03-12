import React, { Component } from 'react';
import './shoppinglist.css';

class Shoppinglist extends Component {
  addItem : function(item){

  },

  render() {
    return (
      <div>
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
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shoppinglist;
