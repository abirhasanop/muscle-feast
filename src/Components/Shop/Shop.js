import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);

    const handleCart = (product) =>{
        // console.log("clicked", product)
        let itemQuantity = [...items, product]
        setItems(itemQuantity)
    }

    useEffect(() =>{
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
            <div className='shop-container'>
            <div className='main-container'>
                <h1>Muscle Feast</h1>
                <h3>Select Your Activities</h3>
                <div className="product-container">
            {
                products.map(product => <Product key={product.id} product={product} handleCart={handleCart} />)
            }
            </div>
            </div>
            <div className="cart-containerr">
                <Cart cart={items} />
            </div>
        </div>
    );
};

export default Shop;