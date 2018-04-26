import React from 'react';
import {connect} from 'react-redux';
import SingleListing from './SingleListing';
import {actionUpdateCategoryPage} from './actions/menu';

let mapStateToProps = (state, props) => {
    return (
        {catProducts: state.catProducts}
    )}
  
  let mapDispatchToProps = (dispatch, props) => {
    return {updateCategoryPage: () => {
        fetch(`https://etsetera.herokuapp.com/category/${props.match.params.categoryId}`, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUwYTVhZWRkMGVjYzAwMTQ1NDJkMGUiLCJpZCI6IjVhZTBhNWFlZGQwZWNjMDAxNDU0MmQwZSIsImlhdCI6MTUyNDc0OTI2NSwiZXhwIjoxNTI3MzQxMjY1fQ.d-8PJ8-AutmB0WMt9owRujKqXSinhodcjzOw9VNfc5g'
          },
          method: 'GET'
        })
        .then(res => res.json())
        .then(fetchCategoryProducts => {
            // console.log('fetched categroy products' + fetchCategoryProducts)
            dispatch(actionUpdateCategoryPage(fetchCategoryProducts.products))
        })
    }}
  }

let DumbCategoryPage = ({catProducts}) => {
    // console.log('items in CategoryPage' + catProducts)
   return( 
    <div className="categorypage-container">
    {
          catProducts.map(item => <SingleListing key={item.id} item={item}/>)
    }
    </div>
    )
}

class CategoryPage extends React.Component {

    componentDidMount () {
        this.props.updateCategoryPage();
    }

    render() {
    
        return(
            <DumbCategoryPage {...this.props}/>
        )
    }
        }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);