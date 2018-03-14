import React, { Component } from 'react';
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
        <li key={item.id} onClick={() => this.props.selectCartItem(item)}>{item.name} {item.price}</li>
      )
    });
  }

  render(){
    return (
      <div>
        <ul>
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
