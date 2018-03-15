import React, { Component } from 'react';
import './Info.css';

/* Information about how to use app */
class Products extends Component {
  render(){
    return (
      <div className="info d-flex justify-content-center align-items-center">
        <div className="infoInner">
          <div className="d-flex flex-row justify-content-between">
            <h3>Info</h3>
            <button className="btn btn-danger" onClick={this.props.closeInfo}>Close</button>
          </div>
          <div>
            <p>This is shopping application made by using react and redux.</p>
            <h4>How to use</h4>
            <p> - To add items to cart, click "Add to cart" - button.</p>
            <p> - By clicking the "Add to cart" - button mutliple times, you can add more of the same item to cart.</p>
            <p> - To see your cart, click "Cart" - link in navigation bar.</p>
            <p> - In cart you can inspect your selected items.</p>
            <p> - You can increase or decrease the amount of items by clicking the plus and minus buttons. (ps. the app doesn't update the quantity value dynamically yet, so you have to close and re-open the cart in order to see the change in quantity,)</p>
            <p> - To remove item from the cart click red remove button on the right side of item row.</p>
            <p> - To get out of the cart, click "Close" - button.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
