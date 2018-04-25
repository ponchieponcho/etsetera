import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import CartPage from './CartPage';
import LandingPage from './LandingPage';
import SignInPage from './SignInPage';
import Menu from './Menu';
import {connect} from 'react-redux';
import CategoryPage from './CategoryPage';

let mapStateToProps = (state) => { //set thngs you need access to
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
    {!menuOpen && <Menu />}
    <div className="main-content">
    <Switch>

      <Route path="/" exact component={LandingPage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/signin" exact component={SignInPage} />
      <Route path="/products/:categoryId" exact component={CategoryPage} />

    </Switch>
    </div>
  </main>

  </Router>

export default connect(mapStateToProps, mapDispatchToProps)(Main)
