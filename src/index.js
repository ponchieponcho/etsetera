import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Main from './Main';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import {UPDATE_MENU, UPDATE_MENU_STATUS, UPDATE_CART} from './actions/menu'

let initialState = {
    products: [],
    categories: [],
    users: [],
    cart: [],
    menuOpen: false   
};

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_MENU_STATUS:
        console.log('TRIGGERED ACTION: UPDATE_MENU_STATUS')
        let menuOpen = action.payload;
        return {...state, menuOpen: menuOpen}

        case UPDATE_CART:
        console.log('TRIGGERED ACTION: UPDATE_CART')
        let item = action.payload;
        let newState = state.cart;
        let cart = newState.concat(item)
        return {...state, cart: cart}
        
        case UPDATE_MENU:
        console.log('TRIGGERED ACTION: UPDATE_MENU')
        let categories = action.payload;
        return {...state, categories: categories}

        default:
            return state;
    }
}

let store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let Body = () => 
    <div>
        <Header />
        <Main />
    </div>

let TopLevel = () => 
    <Provider store={store}>
        <ConnectScreen />
    </Provider>

let mapStateToProps = (state) => {
    return {
        products: state.products,
        categories: state.categories,
        users: state.users,
        cart: state.cart,
        menuOpen: state.menuOpen
    };
  }
  
let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch};
  }
  
let ConnectScreen = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Body);

ReactDOM.render(<TopLevel />, document.getElementById('root'));
