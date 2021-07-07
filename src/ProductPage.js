import React from 'react';
import {actionUpdateCart} from './actions/menu';
import {connect} from 'react-redux';

let mapStateToProps = (state, props) => {
    return {product: state.product} 
}

let mapDispatchToProps = (dispatch) => {
    return { 
        updateCart: (items) => {
          dispatch(actionUpdateCart(items))
        }
      }
}

let ProductPage = ({product, updateCart}) => {
    console.log(`product ` ,product.images[0].url)

    return (
    <div className="productpage-container">
        <div className="image-placeholder"></div>
        <h1>{product.title}</h1>
        <img src={product.images[0].url} />
        <span>{`$${product.price}`}</span>
        <button onClick={() => updateCart(product)}>Add To Cart</button>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

