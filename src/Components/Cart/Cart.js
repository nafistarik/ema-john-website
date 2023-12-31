import React from 'react';

const Cart = (props) => {
    const cart = props.cartAttribute;
    //const totalPrice = cart.reduce((total, prd)=>total+prd.price,0);
    
    let totalPrice=0;
    for(let i=0; i<cart.length; i++){
        const prd=cart[i];
        totalPrice=totalPrice+ prd.price;
    };

    let shippingCost=0;
    if(totalPrice>50 ){
        shippingCost=0;
    }else if(totalPrice>0){
        shippingCost=15;
    }

    let tax = totalPrice/10;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <h5>Product Price: {(Number(totalPrice)).toFixed(2)}</h5>
            <h5>Shipping Cost: {shippingCost}</h5>
            <h5>Tax:{(Number(tax)).toFixed(2)}</h5>
            <h5>Total Price: {(Number(totalPrice+shippingCost+tax)).toFixed(2)}</h5>
        </div>
    );
};

export default Cart;