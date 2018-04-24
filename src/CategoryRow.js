import React from 'react';
import {NavLink} from 'react-router-dom';

let CategoryRow = ({list}) => 
    <NavLink to={list.name}>{list.name}</NavLink>
  
export default CategoryRow;
