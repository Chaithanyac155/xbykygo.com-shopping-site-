import React, { useContext } from 'react';

import { CartContext } from '../CartContext';

import FooterComponent from './FooterComponent';

import TaglineComponent from './TaglineComponent';

const Outlet = () => { 

const { 

state: { Dress },

addDitem

} = useContext(CartContext);

return (

<>

<div className="tagline">

<TaglineComponent />

</div>

<div className="container mb-5">

{Dress.map(({ name, image, price, incart }, index)=>(

<div className="row">

<div className="col-6">

<div className="card-body mt-5">

<h3 className="mb-3">{name}</h3>

<div className="mb-3">

<span><i className='fa fa-dollar' style={{fontSize:"20px"}}></i> &nbsp;{price}</span>

</div>

<button className="btn btn-dark btn-lg p-1"

disabled={incart == "true" ? true : false}

onClick={() => addDitem(index)}

style={{borderRadius:"100px",fontSize:"18px",width:"200px",height:"43px"}}><small>Add to Cart</small></button>

</div></div>

<div className="col-6">

<div className="mt-5">

<img  alt="logo" src={image} style={{width:"380px",height:"390px"}}/></div>

</div>

<hr style={{border:"1px solid black",width:"93%", borderWidth:"thin"}} />

</div>

)

)

}

</div>

<div className="footer">

<FooterComponent />

</div>

</>

);

}

export default Outlet;
