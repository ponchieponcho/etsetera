import React from 'react';
import {NavLink} from 'react-router-dom';

let CategoryRow = ({list}) =>
  <div className="menu-item">
    <NavLink to={`products/${list.name}`}>{list.name}</NavLink>
    </div>
  
export default CategoryRow;
