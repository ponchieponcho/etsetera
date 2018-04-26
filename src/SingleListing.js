import React from 'react';
import {NavLink} from 'react-router-dom';

let SingleListing = ({item}) => {
    return (
    <NavLink to={`/product/${item.id}`}>
    <div className="singlelisting-container">
        <div className="image-placeholder"></div>
        <h1>{item.title}</h1>
        <span>{`$${item.price}`}</span>
        <p>{item.description}</p>
    </div>
    </NavLink>
    )
}

export default SingleListing;
