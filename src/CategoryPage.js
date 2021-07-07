import React from 'react';
import {connect} from 'react-redux';
import SingleListing from './SingleListing';

let mapStateToProps = (state, props) => {
    return {catProducts: state.catProducts}
    }
  
  let mapDispatchToProps = (dispatch, props) => {
    return {dispatch:dispatch}
  }

let CategoryPage = ({catProducts}) => {
   return( 
    <div className="categorypage-container">
    {
          catProducts.map(item => <SingleListing key={item.id} item={item}/>)
    }
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);