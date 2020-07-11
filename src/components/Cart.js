import React, { useContext } from 'react'

import { CartContext } from '../CartContext'

import Counter from './Counter';

import EmptyCart from './EmptyCart';

import TotalAmount from './TotalAmount';

import FooterComponent from './FooterComponent';

import TaglineComponent from './TaglineComponent';

const Cart = () => {

const {

state: { cart },

removeProduct

} = useContext(CartContext);

return (

<>

<div className="tagline">

<TaglineComponent />

</div>

<div className="row">

<div class="col-7 mt-4">

<div className="container" style={{ border: '1px solid white' }}>

{(cart.length == 0) ? <EmptyCart /> : (

<>

{cart.map(({ name, id, image, price, quantity }, index) => (

<div class="card mb-2 mt-2" style={{ 

height: '230px',

width: '700px'

}} >

<div class="row">

<div class="col-md-8">

<div class="card-body">

<h5 class="card-title">{name}</h5>

<p class="card-text"><small class="text-body" style={{fontSize:"17px"}}><b> ${price}</b></small></p>

<div className="d-flex justify-content-between mt-5 ">

<Counter quantity={quantity}  index={index}>

</Counter>

<span class="badge badge-success pt-2 mt-3" style={{ height: '30px' }} >Qty : {quantity}</span>

<button onClick={() => removeProduct(index)}

className="btn btn-danger mt-2" style={{ height: 'fit-content' }}>REMOVE</button></div>

</div>

</div>

<div class="col-md-4">

<img height="170x" src={image} class="card-img" alt="logo" />

</div>

</div>

</div>

))

}

</>

)}

</div>


</div>

<div className="col-4 border mt-4 bg-light  ml-5 jumbotron" style={{ height: 'fit-content' }}>

<TotalAmount />

</div>

</div>

<div className="footer mt-5">

<FooterComponent />

</div>

</>

)

}

export default Cart;
