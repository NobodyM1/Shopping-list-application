import React, { Component } from 'react';
import './App.css';
import Products from './components/products/products'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a href="#" className="navbar-brand"><i className="fas fa-bold"></i><i className="fas fa-info"></i><i className="fab fa-tumblr"></i></a>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Cart</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Info</a></li>
          </ul>
        </nav>
        <div className="container">
          <Products />
        </div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
