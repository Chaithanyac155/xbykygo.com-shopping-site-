import React ,{useContext} from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import KygoSoundApp from './KygoSoundApp';

import TheStory from './TheStory';

import SmartWatches from './SmartWatches';

import Home from './Home';

import Headphones from './Headphones';

import Earphones from './Earphones';

import Speakers from './Speakers';

import Outlet from './Outlet';

import Cart from './Cart';

import {CartContext } from '../CartContext';

import CheckOut from './CheckOut';

import Login from './Login';
 import SignUp from './SignUp';
import ShippingAddress from './ShippingAddress';
import Payment from './Payment';


const  HeaderComponent = () =>

{

  const {headphones,earphones,speakers,dress} = useContext(CartContext);

 

  const {state :{cart}}=useContext(CartContext);

   

    return(

        <>

        <Router>

          

        <nav className="navbar navbar-expand-md navbar-dark py-1">

       <Link to="/" className="navbar-brand ml-5">

             <img src="https://www.xbykygo.com/media/wysiwyg/new-logo.png" alt="logo"
             style={{width:"120px",height:"32px"}} />

              

        </Link>

 

    <ul className="navbar-nav"  style={{marginLeft:"130px"}}>

 

 <li className="nav-item px-2">

       <Link to="/viewallproducts" onClick={()=>headphones()} style={{fontSize:"12px",fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>


       <div className="dropdown">

  <Link  style={{textDecoration:"none",color:"white"}} className="btn-view-all-products">VIEW ALL PRODUCTS</Link>

  <div className="dropdown-content">

    <Link to="/headphones" onClick={()=>headphones()} className="text-center"><b>HEADPHONES</b></Link>

    <Link to="/earphones" onClick={()=>earphones()} className="text-center"><b>EARPHONES</b></Link>

    <Link to="/speakers" onClick={()=>speakers()} className="text-center"><b>SPEAKERS</b></Link>

  </div>

      </div>       

          </Link>

  </li>
      <li className="nav-item px-2">

         <Link  to="/KygoSoundApp" style={{fontSize:"12px",fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>KYGOSOUND APP</Link>

        </li>

 

    

      <li className="nav-item px-2">

        <Link to="/TheStory" style={{fontSize:"12px",fontFamily:"sans-serif",color:"white",textDecoration:"none"}}> THE STORY </Link>  

        </li>  

 

     

      <li className="nav-item px-2"> 

      <Link to="/Outlet" onClick={()=>dress()}

      style={{fontSize:"12px",fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>  OUTLET </Link>

       </li> 
     

      <li className="nav-item px-2"> 

      <Link to="/SmartWatches" style={{fontSize:"12px",fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>SMART WATCH </Link>   

      </li> 
      
      <li className="nav-item px-2" style={{marginLeft:"90px"}}> 

      <Link to="/login" 

      style={{fontSize:"12px",fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>LOGIN</Link>

       </li> 
     

      <li className="nav-item px-3"> 

      <Link to="/signup" style={{fontSize:"12px",fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>SIGNUP</Link>   

      </li> 


      <li className="nav-item"> 

      <Link to="/cart" style={{color:"white",textDecoration:"none"}}>

    <i className="fas fa-cart-arrow-down" style={{fontSize:"15px",marginRight:"2px"}}></i>cart({cart.length})</Link>

      </li> 

    

        <li className="nav-item ml-3">
          <img src="data:image/png;base64,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"
               alt="logo"  style={{width:"33px",height:"22px"}} />
        </li>
        

       </ul>

          

       </nav>

       

           <Route path="/" exact  strict component={Home}></Route> 

      
<Route path="/login" exact strict component={Login}></Route>
    
<Route path="/signup" exact strict component={SignUp}></Route> 

<Route path="/headphones" exact strict component={Headphones}></Route>

<Route path="/earphones" exact strict component={Earphones}></Route>

<Route path="/speakers" exact strict component={Speakers}></Route>

<Route path="/cart" exact strict component ={Cart}></Route> 

<Route path="/KygoSoundApp" exact  strict component={KygoSoundApp}></Route> 

<Route path="/TheStory" exact  strict component={TheStory}></Route> 

<Route path="/Outlet" exact  strict component={Outlet}></Route>  

<Route path="/SmartWatches" exact  strict component={SmartWatches}></Route>  

<Route path="/checkout" exact  strict component={CheckOut}></Route> 

<Route path="/shippingaddress" exact strict component={ShippingAddress}></Route>

<Route path="/payment" exact strict component={Payment}></Route>

          

      </Router>

        </>

    );

 

}
export default HeaderComponent;

