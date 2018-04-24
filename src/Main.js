import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import CartPage from './CartPage';
import LandingPage from './LandingPage';
import SignInPage from './SignInPage';
import ProductList from './ProductList';
import Menu from './Menu';
import CategoryPage from './CategoryPage';

class Main extends Component {
 
  render() {

    return (
      <Router>

    <main>
      <Menu />
      <div className="main-content">
      <Switch>

        <Route path="/" exact component={LandingPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/products" exact component={ProductList} />
        <Route path="/products/:category" exact component={CategoryPage} />

      </Switch>
      </div>
    </main>
    </Router>

    );
  }
}



export default Main;
