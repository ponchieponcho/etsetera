import React, { Component } from 'react';
import CategoryRow from './CategoryRow';

let categories = [
  { "id": 1, "name": "Technology" },
  { "id": 2, "name": "Food and Beverage" },
  { "id": 3, "name": "Educational" },
  { "id": 4, "name": "Board Games"}
]

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
      {
            categories.map(list => <CategoryRow key={list.id} list={list}/>)
        }
    </div>
    );
  }
}

export default Menu;
