import React from 'react'
import { useSelector } from 'react-redux'
 
const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    console.log("totalQuantity", totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    console.log("totalPrice", totalPrice);
 
    return (
        <header className="bg-primary text-white p-3">
            <h1 style={{textAlign: 'center'}}>Shopping Cart</h1>
            <div style={{textAlign: 'right'}}>
                <span>Items: {totalQuantity}</span>
                <span className="ml-3">Total Price: ${totalPrice.toFixed(2)}</span>
            </div>
        </header>
    );
}
 
export default Header