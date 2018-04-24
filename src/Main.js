import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import CartPage from './CartPage';
import LandingPage from './LandingPage';
import SignInPage from './SignInPage';
import ProductList from './ProductList';
import Menu from './Menu';

class Main extends Component {
 
  render() {

    return (
      <Router>

    <main>
      {/* {!isHidden && <Menu />} */}
      <Menu />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/productlist" exact component={ProductList} />
      </Switch>
    </main>
    </Router>

    );
  }
}



export default Main;
