import React, { Component } from 'react';
import Cart from '../containers/Cart';
import Products from '../containers/Products';
import Info from '../containers/Info';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showCart: false,
      showInfo: false
    };
  }

  /* Changes visibility of info */
  toggleInfo(){
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  /* Changes visibility of cart */
  toggleCart(){
    this.setState({
      showCart: !this.state.showCart
    });
  }
  render(){
    return (
      <div className="App container col-12 col-md-11">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a href="#" className="navbar-brand"><i className="fas fa-bold"></i><i className="fas fa-info"></i><i className="fab fa-tumblr"></i></a>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={this.toggleCart.bind(this)}>Cart</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={this.toggleInfo.bind(this)}>Info</a></li>
          </ul>
        </nav>
        <Products />
        {this.state.showCart ?
          <Cart Cart={this.state.cart} text='Close' closeCart={this.toggleCart.bind(this)}/>
          : null
        }
        {this.state.showInfo ?
          <Info Info={this.state.info} text='Close' closeInfo={this.toggleInfo.bind(this)}/>
          : null
        }
      </div>
    )
  }
};

export default App;
