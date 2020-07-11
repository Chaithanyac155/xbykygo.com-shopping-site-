import React from 'react';

import TaglineComponent from './TaglineComponent';

import FooterComponent from './FooterComponent';

const SmartWatches =() =>

{

return(

<div>

<div className="tagline">

<TaglineComponent />

</div>

<div className="container mt-5" style={{background:"white",marginBottom:"100px"}}>

<div className="row">

<div className="col-6">

<h1 className="ml-5">Falster 3</h1>

<p className="ml-5 text-muted" style={{fontSize:"14px"}}>

Introducing an exclusive collab with Skagen Denmark.The

limited-edition of the Falster 3 Smartwatch boasts an interactive,

swimproof touchscreen and a range of smart features powered with

Wear OS by Google™ including: heart-rate tracking, Google

Assistant, smartphone notifications, activity tracking, Google

Pay, GPS and more

</p>

{/* <div className="d-flex btn-outline-warning ml-5">Out Of Stock</div> */}

<div className="d-inline-flex p-2 bd-highlight btn-outline-dark ml-5">Out of Stock</div>

</div>

<div className="col-6">

<img alt="logo"
 src="https://www.xbykygo.com/media/catalog/product/cache/b2c9222954ccc348538ca5801698d4c1/s/k/skagen_xby_v2_1200x1500.jpg" style={{ width: "70%",height:"100%" }} />

</div>

</div>

<hr style={{borderBottom:"1px solid black",width:"91%"}}/>

</div>

<div className="footer">

<FooterComponent />

</div>

</div>

);

}

export default SmartWatches;
