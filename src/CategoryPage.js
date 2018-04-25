//display all products in a specific category

// {

//     product.map(item => <SingleListing key={item.id} item={item}/>)
// }

import React from 'react';
// import SingleListing from './SingleListing';
import {connect} from 'react-redux';

let mapStateToProps = (state, props) => {
    //create array from category choice
    let {categoryId} = props.match.params
    let items = state.products.filter(item => 
        item.categoryId === categoryId)
    return (
        {items: items}
    )}

let mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

let SingleListing = ({item}) =>
    <div className="item-container">
    <div className="image-placeholder"></div>
    <h1>{item.name}</h1>
    </div>

let CategoryPage = ({items}) => {
    console.log(items)
   return( 
   <div className="category-listing-container">
   {/* <SingleListing items={items}/> */}
    </div>
    )}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
