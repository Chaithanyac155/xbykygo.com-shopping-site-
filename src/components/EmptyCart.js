import React from 'react';
import { Link } from 'react-router-dom';
 
const EmptyCart = () => {
    return (
 
        <div className="text-center" >
             <div className="mt-5 mb-3"> <img height="270px"  width="470px" alt="logo"
             src="https://bakestudio.in/assets/images/cart/empty-cart.gif" />
         </div>
            <div className="text-center">
            <h5 className="text-danger mb-3">your cart is empty</h5>
            <Link to="/"> <button className="btn btn-dark rounded-0 btn-md btn-md mb-5">SHOP NOW</button></Link>
            </div>
        </div>
    )
 
}
 
export default EmptyCart;
