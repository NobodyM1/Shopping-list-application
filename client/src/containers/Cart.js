import React, { Component } from 'react';
import './Cart.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {removeCartItem} from '../actions/index';
import {increaseQty} from '../actions/index';
import {decreaseQty} from '../actions/index';

/* Renders shopping cart */
class Cart extends Component {

/* Creates tabel row from every product sent to cart */
  renderList(){
    return this.props.cartItems.map((item) => {
      return (
        <tr key={item.name} className="cartItemWidth">
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td className="">
            <div className="d-flex flex-row">
              <button className="btn btn-primary qtyButton" onClick={() => this.props.increaseQty(item)}>+</button>
              <div className="itemQuantity">{item.qty}</div>
              <button className="btn btn-primary qtyButton" onClick={() => this.props.decreaseQty(item)}>-</button>
            </div>
          </td>
          <td><button className="btn btn-danger removeButton " onClick={() => this.props.removeCartItem(item)}>X</button></td>
        </tr>
      )
    })
  }

  render(){
    return (
      <div className="cart d-flex justify-content-center align-items-center">
        <div className="cartInner d-flex flex-column text-center align-items-center">
          <h3>Your cart</h3>
          <button className="btn btn-danger" onClick={this.props.closeCart}>Close</button>
          <table className="table table-striped cartItemTable">
            <thead>
              <tr className="cartItemWidth">
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
