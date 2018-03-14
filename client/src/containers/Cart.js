import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCartItem} from '../actions/index';

class Cart extends Component {
  createListItems() {
    return this.props.cartItems.map((item) => {
      return (
        <li key={item.name} onClick={() => this.props.selectCartItem(item)}>{item.name} {item.price}</li>
      );
    });
  }

  render(){
    return (
      <ul>
        {this.createListItems()}
      </ul>
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

export default connect(mapStateToProps, matchDispatchToProps)(Cart);
