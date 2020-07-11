import React, { useContext } from 'react'

import { CartContext } from '../CartContext';

const Counter = ({ quantity, index }) =>

{

const {incrementCounter,decrmentCounter}=useContext(CartContext)

return (

<div className="row align-items-center mt-1 ">

{<button onClick={() => decrmentCounter(index)}

disabled={quantity==1?true:false} className="btn btn-primary m-2">-</button>}

<div className=" card p-2 text-center" style={{

height: '39px',

width: '50px'

}}>{quantity}</div>

<button onClick={() => incrementCounter(index)}

className="btn btn-primary m-2">+</button>

</div>

)

}

export default Counter;
