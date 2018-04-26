import React from 'react';
import {actionUpdateCart} from './actions/menu';
import {connect} from 'react-redux';

let mapStateToProps = (state, props) => {
    let {productId} = props.match.params
    let items = state.products.find(item => 
        item.id === productId)
    return (
        {items: items}
    )}

let mapDispatchToProps = (dispatch) => {
    return { 
        updateCart: (items) => {
          dispatch(actionUpdateCart(items))
        }
      }
}

let ProductPage = ({items, updateCart}) => {
    return (
    <div className="productpage-container">
        <div className="image-placeholder"></div>
        <h1>{items.name}</h1>
        <span>{`$${items.price}`}</span>
        <button onClick={() => updateCart(items)}>Add To Cart</button>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
