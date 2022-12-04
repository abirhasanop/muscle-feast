import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)

    const {img, name, age, requiredTime} = props.product
    return (
        <div className='product'>
            <div className="banner-img"><img src={img} alt="" /></div>
            <div className="product-info">
                <h2>{name}</h2>
                <h3>age: {age}</h3>
                <p>Time Required: {requiredTime}</p>
            </div>
            <button onClick={() => props.handleCart(props.product)} className='btn-cart'>Add to list</button>
        </div>
    );
};

export default Product;