import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import Shoppinglist from './components/Cart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showCart: false
    };
  }

  toggleCart(){
    this.setState({
      showCart: !this.state.showCart
    });
  }

  render() {
    return (
      <div className="App container col-12 col-md-11">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a href="#" className="navbar-brand"><i className="fas fa-bold"></i><i className="fas fa-info"></i><i className="fab fa-tumblr"></i></a>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={this.toggleCart.bind(this)}>Cart</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Info</a></li>
          </ul>
        </nav>
        <Products />
        {this.state.showCart ?
          <Shoppinglist Shoppinglist={this.state.cart} text='Close' closeShoppingList={this.toggleCart.bind(this)}/>
          : null
        }
        <footer>

        </footer>
      </div>
    );
  }
}
/* */

export default App;
