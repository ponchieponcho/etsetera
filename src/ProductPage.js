import React from 'react';
// import {HashRouter as Router, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = (state, props) => {
    let {productId} = props.match.params
    let items = state.products.find(item => 
        item.id === productId)
    return (
        {items: items}
    )}

let mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

let ProductPage = ({items}) => {
    return (
    <div className="productpage-container">
        <div className="image-placeholder"></div>
        <h1>{items.name}</h1>
        <span>{`$${items.price}`}</span>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
