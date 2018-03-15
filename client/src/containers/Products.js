import React, { Component } from 'react';
import './Products.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCartItem} from '../actions/index';

class Products extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    fetch('/api/products')
    .then(results => results.json())
    .then(products => this.setState({products}, () => console.log('Products fetched..', products)));
  }

  createListItems() {
    return this.state.products.map((item) => {
      return (
        <li key={item.id} className="list-group-item listItem test">
          <div  className="listItemFrame d-flex flex-column align-items-center">
            <div className="productName">{item.name}</div>
            <div className="productImage d-flex align-items-center justify-content-center">item image</div>
            <div className="productPrice">{item.price} &#8362;</div>
            <div><button className="btn btn-primary" onClick={() => this.props.selectCartItem(item)}>Add to cart</button></div>
          </div>
        </li>
      )
    });
  }

  render(){
    return (
      <div className="d-flex productContainer">
        <ul className="productList list-group col-12 d-flex flex-row flex-wrap align-items-center justify-content-center">
          {this.createListItems()}
        </ul>
      </div>
    );
  }
}

/* Making component aware of store */
function mapStateToProps(state){
  return {
    cartItems: state.cartItems
  };
}

/* Passing actions/index.js functions as props */
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectCartItem: selectCartItem
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Products);
