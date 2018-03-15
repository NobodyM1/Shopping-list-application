import React, { Component } from 'react';
import './Cart.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {removeCartItem} from '../actions/index';
import {increaseQty} from '../actions/index';
import {decreaseQty} from '../actions/index';

class Cart extends Component {


  containsObject(obj, array){
    var item;
    for (item in array) {
      if (array.hasOwnProperty(item) && array[item] === obj){
        return true
      }
    }
    return false;
  }



  renderList(){
    return this.props.cartItems.map((item) => {
      return (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td className="d-flex flex-row align-items-center">
            <button className="btn btn-basic incButton" onClick={() => this.props.increaseQty(item)}>+</button>
            {item.qty}
            <button className="btn btn-basic decButton"onClick={() => this.props.decreaseQty(item)}>-</button>
          </td>
          <td><button className="btn btn-danger removeButton" onClick={() => this.props.removeCartItem(item)}>X</button></td>
        </tr>
      )
    })
  }

  render(){
    console.log(this.props.cartItems);
    return (
      <div className="cart d-flex justify-content-center align-items-center">
        <div className="cartInner d-flex flex-column text-center align-items-center">
          <h3>Your cart</h3>
          <button className="btn btn-danger" onClick={this.props.closeShoppingList}>Close</button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

/* Making component aware of store */
function mapStateToProps(state){
  return {
    cartItems: state.newCartItems
  };
}

/* Passing actions/index.js functions as props */
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    removeCartItem: removeCartItem,
    increaseQty: increaseQty,
    decreaseQty: decreaseQty
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Cart);
