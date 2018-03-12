import React, { Component } from 'react';
import './shoppinglist.css';

class Shoppinglist extends Component {
  render() {
    return (
      <div className="shoppingList">
        <div className="shoppingListInner">
          <h3>This is shoppin list</h3>
          <button onClick={this.props.closeShoppingList}>Close</button>
          
        </div>
      </div>
    );
  }
}

export default Shoppinglist;
