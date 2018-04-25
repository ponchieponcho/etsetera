import React from 'react';
// import SingleListing from './SingleListing';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = (state, props) => {
    let {categoryId} = props.match.params
    let items = state.products.filter(item => 
        item.categoryId === categoryId)
    return (
        {items: items}
    )}

let mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

let SingleListing = ({item}) => {
    return (
    <NavLink to={`/product/${item.id}`}>
    <div className="singlelisting-container">
        <div className="image-placeholder"></div>
        <h1>{item.name}</h1>
        <span>{`$${item.price}`}</span>
    </div>
    </NavLink>
    )
}
let CategoryPage = ({items}) => {
   return( 
    <div className="categorypage-container">
    {
          items.map(item => <SingleListing key={item.id} item={item}/>)
    }
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
