import React from 'react';
import {connect} from 'react-redux';
import SingleListing from './SingleListing';

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

let CategoryPage = ({items}) => {
    console.log(items)
   return( 
    <div className="categorypage-container">
    {
          items.map(item => <SingleListing key={item.id} item={item}/>)
    }
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
