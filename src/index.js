import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Main from './Main';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import {UPDATE_MENU} from './actions/menu'

let initialState = {
    products: [
        { "id": "1", "name": "Coffee Maker", "categoryId": "2", "price": 19.99 },
        { "id": "2", "name": "Redux Help", "categoryId": "3", "price": 9.99 },
        { "id": "3", "name": "Super Amazing Computer", "categoryId": "1", "price": 10000 },
        { "id": "4", "name": "Werewolf", "categoryId": "4", "price": 14.99 },
        { "id": "5", "name": "Test 1", "categoryId": "4", "price": 7.99 }
    ],
    categories: [
        { "id": "1", "name": "Technology" },
        { "id": "2", "name": "Food and Beverage" },
        { "id": "3", "name": "Educational" },
        { "id": "4", "name": "Board Games"}
      ],
    users: [
        { "id": "1", "firstname": "Seth", "lastname": "Zim" },
        { "id": "2", "firstname": "Jonathan", "lastname": "Martin" },
        { "id": "3", "firstname": "Joshua", "lastname": "Martin" }
    ],
    cart: [
        { "id": "3", "name": "Super Amazing Computer", "categoryId": 1, "price": 10000 }
    ],
    menuOpen: false   
};

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_MENU:
        console.log('SWITCH ACTION: UPDATE_MENU')
        let menuOpen = action.payload;
        return {...state, menuOpen: menuOpen}
        
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
