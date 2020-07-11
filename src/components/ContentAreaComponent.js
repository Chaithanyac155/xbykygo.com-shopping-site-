import React ,{useContext} from 'react';

import { Link } from 'react-router-dom';

import {CartContext } from '../CartContext';

function ContentAreaComponent()

{

const {headphones,earphones,dress} = useContext(CartContext);

return(

<>

<div className="contentOne">

<img src="https://www.xbykygo.com/media/gene-cms/a/1/a11_webstore_banner_desktop_1__7.jpg"

alt="logo" style={{width:"100%"}} />

<div className="bottom-left-one">

<p className="mb-3">BE IN YOUR OWN WORLD</p>

<h2 className="font-weight-normal mb-2">

KYGO A11/800 NOISE CANCELLING

</h2>

<h2 className="font-weight-normal mb-3">

HEADPHONES

</h2>

<Link to="/headphones" onClick={()=>headphones()} style={{textDecoration:"none"}} className="btn-buy-now"><b>BUY NOW</b></Link>

</div>

</div>

<div className="contentTwo">

<img src="https://www.xbykygo.com/media/gene-cms/s/k/skagen_webstore_banner_2400x1200_desktop_6.jpg"

alt="logo" style={{width:"100%"}} />

<div className="bottom-left-two">

<p className="mb-3" style={{fontSize:"18px"}}>Falster 3 X by Kygo Smartwatch</p>

<h4 className="font-weight-normal mt-4 mb-4">

A limited-edition collab with Skagen Denmark

</h4>

<Link to="/outlet" onClick={()=>dress()}

style={{textDecoration:"none"}} className="btn-buy-now"><b>BUY NOW</b></Link>

</div>

</div>

<div className="contentThree">

<img src="https://www.xbykygo.com/media/gene-cms/e/7/e7_webstore_banner_desktop_q2_5.jpg"

alt="logo" style={{width:"100%"}} />

<div className="bottom-left-three">

<p className="mb-4">New E7/100!</p>

<h2 className="font-weight-normal mb-4">

24h playing time and

</h2>

<h2 className="font-weight-normal mb-4">

perfect fit

</h2>

<Link to="/earphones" onClick={()=>earphones()} style={{textDecoration:"none"}}

className="btn-buy-now"><b>BUY NOW</b></Link>

</div>

</div>

<div className="contentFour">

<img src="https://www.xbykygo.com/media/gene-cms/w/e/webstore_test_1200x600_201kb_5.jpg"

alt="logo" style={{width:"100%"}} />

<div className="bottom-left-four">

<p className="mb-3" style={{fontSize:"18px"}}>New A3/600</p>

<h2 className="font-weight-normal mt-4 mb-4">

Clear sound for a life on-the-go!

</h2>

<Link to="/headphones" style={{textDecoration:"none"}} className="btn-buy-now" onClick={()=>headphones()}><b>BUY NOW</b></Link>

</div>

</div>

</>

);

}
    export default ContentAreaComponent;    
