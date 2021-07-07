import React from 'react';
import {NavLink} from 'react-router-dom';
import { actionUpdateProductPage } from './actions/menu';
import {connect} from 'react-redux';

  let mapDispatchToProps = (dispatch) => {
    return {renderListing: (id) => {
        fetch(`https://etsetera.herokuapp.com/product/${id}`, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUwYTVhZWRkMGVjYzAwMTQ1NDJkMGUiLCJpZCI6IjVhZTBhNWFlZGQwZWNjMDAxNDU0MmQwZSIsImlhdCI6MTUyNDc0OTI2NSwiZXhwIjoxNTI3MzQxMjY1fQ.d-8PJ8-AutmB0WMt9owRujKqXSinhodcjzOw9VNfc5g'
          },
          method: 'GET'
        })
        .then(res => res.json())
        .then(fetchProduct => {
            dispatch(actionUpdateProductPage(fetchProduct))
        })
    }}
  }
  
let SingleListing = ({item, renderListing}) => {
    console.log(item)
    return (
    <NavLink to={`/product/${item.id}`} onClick={() => renderListing(item.id)}>
    <div className="singlelisting-container">
        <div className="image-placeholder"></div>
        <h1>{item.title}</h1>
        <span>{`$${item.price}`}</span>
        <p>{item.description}</p>
    </div>
    </NavLink>
    )
}

export default connect( null, mapDispatchToProps)(SingleListing)
