import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Main from './Main';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

let TopLevel = () => 
  <div>
    <Header />
    <Main />
  </div>

ReactDOM.render(<TopLevel />, document.getElementById('root'));
