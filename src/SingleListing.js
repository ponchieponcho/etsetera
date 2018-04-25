import React from 'react';
let item = { "id": 1, "name": "Coffee Maker", "categoryId": 2, "price": 19.99 }

let SingleListing = (item) =>
    <div className="item-container">
    <div className="image-placeholder"></div>
    <h1>{item.name}</h1>
    </div>
  

export default SingleListing;
