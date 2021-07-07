import React from 'react';
import {HashRouter as Router, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionUpdateMenuStatus} from './actions/menu'

let mapStateToProps = (state) => { //set things you need access to
  return {
    cart: state.cart,
    menuOpen: state.menuOpen
  };
}

let mapDispatchToProps = (dispatch) => {
  return { 
    updateMenuStatus: (theBoolean) => {
      dispatch(actionUpdateMenuStatus(theBoolean))
    }
  }
}

let Nav = ({cart, updateMenuStatus, menuOpen}) => 
  <Router>

  <nav>
    <div className="left-nav">
    <div>
    <i id="MenuIcon" className="fas fa-bars fa-2x" onClick={() => updateMenuStatus(!menuOpen)}></i>
    </div>
      <span className="logo"><NavLink to="/">ETSETERA</NavLink></span>
    </div>

    <div className="right-nav">
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/cart">
        <span className="fa-layers fa-fw">
          <i className="fas fa-shopping-cart fa-2x"></i>
          <span className="fa-layers-counter">{cart.length}</span>
        </span>
      </NavLink>
    </div>
  </nav>

  </Router>

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
