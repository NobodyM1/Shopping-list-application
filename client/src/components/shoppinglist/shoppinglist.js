import React, { Component } from 'react';
import './shoppinglist.css';

class Shoppinglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{name: "apple"}, {name: "banana"}]
    }
  }

  test(){
    var newArray = this.state.items.slice();
    newArray.push({name: "new value"});
    this.setState({items: newArray})
  }

  render() {
    return (
      <div className="shoppingList">
        <div className="shoppingListInner">
          <h3>This is shoppin list</h3>
          <button onClick={this.props.closeShoppingList}>Close</button>
          <button onClick={() => this.test()}></button>
          {this.state.items.map(item =>
            <div key={item.name}>{item.name}</div>
          )}
        </div>
      </div>
    );
  }
}
export default Shoppinglist;
