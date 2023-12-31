import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name,img,seller,price,stock}=props.attribute;
    return (
        <div className='one-product'>
            <div className='image-part'>
                <img src={img} alt="" />
            </div>
            <div className='detail-part'>
                <h4> {name} </h4>
                <h5>by: {seller}</h5>
                <h4>${price}</h4>
                <h5>only {stock} left in stolk, order soon</h5>
                <button 
                onClick={()=>props.click(props.attribute)} 
                className='product-button'
                >add to cart</button>
            </div>
        </div>
    );
}
export default Product;