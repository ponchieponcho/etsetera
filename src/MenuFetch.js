import React from 'react';
import {connect} from 'react-redux';
import {actionUpdateCategoryMenu} from './actions/menu';
import Menu from './Menu'

let mapStateToProps = (state, props) => {
    return {
      categories: state.categories
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {updateCategoryMenu: () => {
        fetch('https://etsetera.herokuapp.com/category', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUwYTVhZWRkMGVjYzAwMTQ1NDJkMGUiLCJpZCI6IjVhZTBhNWFlZGQwZWNjMDAxNDU0MmQwZSIsImlhdCI6MTUyNDc0OTI2NSwiZXhwIjoxNTI3MzQxMjY1fQ.d-8PJ8-AutmB0WMt9owRujKqXSinhodcjzOw9VNfc5g'
          },
          method: 'GET'
        })
        .then(res => res.json())
        .then(fetchCategories => {
            dispatch(actionUpdateCategoryMenu(fetchCategories))
        })
    }}
  }

class MenuFetch extends React.Component {

    componentDidMount () {
        this.props.updateCategoryMenu();
    }

    render() {
    
        return(
            <Menu {...this.props}/>
        )
    }
        }

export default connect(mapStateToProps, mapDispatchToProps)(MenuFetch);