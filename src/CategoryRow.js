import React from 'react';
import {NavLink} from 'react-router-dom';
import { actionUpdateCategoryPage } from './actions/menu';
import {connect} from 'react-redux';

let mapStateToProps = (state, props) => {
  return (
      {catProducts: state.catProducts}
  )}

let mapDispatchToProps = (dispatch, props) => {
  return {updateCategoryPage: (id) => {
      fetch(`https://etsetera.herokuapp.com/category/${id}`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUwYTVhZWRkMGVjYzAwMTQ1NDJkMGUiLCJpZCI6IjVhZTBhNWFlZGQwZWNjMDAxNDU0MmQwZSIsImlhdCI6MTUyNDc0OTI2NSwiZXhwIjoxNTI3MzQxMjY1fQ.d-8PJ8-AutmB0WMt9owRujKqXSinhodcjzOw9VNfc5g'
        },
        method: 'GET'
      })
      .then(res => res.json())
      .then(fetchCategoryProducts => {
          dispatch(actionUpdateCategoryPage(fetchCategoryProducts.products))
      })
  }}
}

let CategoryRow = ({category, updateCategoryPage}) => {
  return(
  <div className="menu-item">
    <NavLink to={`/category/${category.id}`} onClick={() => updateCategoryPage(category.id)}>{category.title}</NavLink>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryRow);

