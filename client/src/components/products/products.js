import React, { Component } from 'react';
import './products.css';


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({products}));
  }

  addItem(name, price){
    console.log(name + " " + price);
  }

  render() {
    return (
      <div className="container content col-12">
        <ul className="productList list-group col-12 d-flex flex-row flex-wrap align-items-center justify-content-center">
          {this.state.products.map(products =>
            <li className="list-group-item listItem" key={ products.id }>
              <div className="listItemFrame d-flex flex-column align-items-center">
                <img className="img-responsive" src="https://images.pexels.com/photos/37349/rose-beautiful-beauty-bloom.jpg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="..."/>
                <div className="productName" name="productName" ref="productName" value={ products.productName }>{ products.productName }</div>
                <div className="productDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.</div>
                <div className="productPrice" value={ products.productPrice }>{ products.productPrice }</div>
                <button type="button" className="btn btn-primary" onClick={() => this.addItem(products.productName, products.productPrice)}>Add</button>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Products;
