import React from 'react';
import {NavLink} from 'react-router-dom';

let CategoryRow = ({category}) =>
  <div className="menu-item">
    <NavLink to={`/category/${category.id}`}>{category.title}</NavLink>
    </div>
  
export default CategoryRow;
