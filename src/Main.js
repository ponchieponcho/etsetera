import React from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import CartPage from './CartPage';
import LandingPage from './LandingPage';
import SignInPage from './SignInPage';
import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';
import MenuFetch from './MenuFetch';



let mapStateToProps = (state) => { 
  return {
    menuOpen: state.menuOpen
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

let Main = ({menuOpen}) =>
  <Router>

  <main>
    {!menuOpen && <MenuFetch />}
    <div className="main-content">
    <Switch>

      <Route path="/" exact component={LandingPage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/signin" exact component={SignInPage} />
      <Route path="/category/:categoryId" exact component={CategoryPage} />
      <Route path="/product/:productId" exact component={ProductPage} />


    </Switch>
    </div>
  </main>

  </Router>

export default connect(mapStateToProps, mapDispatchToProps)(Main)
