import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Main from './Main';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

let initState = {products:[]};
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';


let reducer = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_CATEGORY:
        console.log('ACTION: UPDATE_CATEGORY')
        return {...state}
        
        default:
            return state;
    }
}

let store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let Body = ({products, dispatch}) => 
    <div>
        <Header />
        <Main />
    </div>

let TopLevel = () => 
    <Provider store={store}>
        <ConnectScreen />
    </Provider>

let mapStateToProps = (state) => {
    return {products: state.products};
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch};
  }
  
  let ConnectScreen = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Body);

ReactDOM.render(<TopLevel />, document.getElementById('root'));
