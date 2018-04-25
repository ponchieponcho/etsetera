import React from 'react';
import {NavLink} from 'react-router-dom';

let CategoryRow = ({category}) =>
  <div className="menu-item">
    <NavLink to={`products/${category.name}`}>{category.name}</NavLink>
    </div>
  
export default CategoryRow;
