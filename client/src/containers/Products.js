import React, { Component } from 'react';
import './Products.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCartItem} from '../actions/index';
import PopUp from '../containers/PopUp';

class Products extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      showPopUp: false
    }
  }

  componentDidMount(){
    fetch('/api/products')
    .then(results => results.json())
    .then(products => this.setState({products}, () => console.log('Products fetched..', products)));
  }

  doupleFunct(item){
    this.props.selectCartItem(item);
    this.togglePopUp();
  }

  /* Show message when new item is added to cart */
  togglePopUp(){
    setTimeout(() => {
      this.setState({
        showPopUp: !this.state.showPopUp
      });
    }, 2000);
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  }

  createListItems() {
    return this.state.products.map((item) => {
      return (
        <li key={item.id} className="list-group-item listItem test">
          <div  className="listItemFrame d-flex flex-column align-items-center">
            <div className="productImageFrame d-flex align-items-center justify-content-center">
              <button className="btn btn-basic productButton" onClick={() => this.doupleFunct(item)}>Add to cart</button>
              <img src={item.productImage} className="productImage"></img>
            </div>
            <div className="productName">{item.name}</div>
            <div className="productPrice">{item.price} &#8362;</div>
            <div></div>
          </div>
        </li>
      )
    });
  }

  render(){
    return (
      <div className="d-flex productContainer">
        {this.state.showPopUp ?
          <PopUp PopUp={this.state.PopUp} text='Close' closePopUp={this.togglePopUp.bind(this)}/>
          : null
        }
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
