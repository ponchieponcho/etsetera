import React, { Component } from 'react';
import {HashRouter as Router, NavLink} from 'react-router-dom';

class Nav extends Component {
  
  render() {

    return (
      <Router>

    <nav>
      <div className="left-nav">
      <div>
        <button >Menu</button>
      </div>
        <span className="logo"><NavLink to="/">ETSETERA</NavLink></span>
      </div>

      <div className="right-nav">
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/cart">
          <span className="fa-layers fa-fw">
            <i className="fas fa-shopping-cart fa-2x"></i>
            <span className="fa-layers-counter">4</span>
          </span>
        </NavLink>
      </div>
      
    </nav>
    </Router>

    );
  }
}

export default Nav;
