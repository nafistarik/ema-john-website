import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10=fakeData.splice(0,10)
    
    const [products,setProducts]=useState(first10);

    const [cart, setCart] = useState([])

    const handleAdd = (pd) => {
        const newCart=[...cart,pd];
        setCart(newCart);
        console.log(cart);
    };
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>{products.length}</h3>
                
                {products.map(product => <Product 
                attribute={product} 
                click={handleAdd}
                >  </Product>)}
            </div>
            <div className="cart-container">
                <Cart cartAttribute={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop;