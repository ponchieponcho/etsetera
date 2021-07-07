import React from 'react';
import CategoryRow from './CategoryRow';
import {connect} from 'react-redux';

let mapStateToProps = (state, props) => {
  return {
    categories: state.categories
  }
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch}
}

let Menu = ({categories, updateCategoryPage}) => {
  return (
  <div className="main-menu">
  {
        categories.map(category => <CategoryRow key={category.id} category={category} />)
    }
  </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
