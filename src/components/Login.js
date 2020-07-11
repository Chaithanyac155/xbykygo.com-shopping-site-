import React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import TaglineComponent from './TaglineComponent';
const Login = () => {
    return (
    <>
    <div className="tagline">
        <TaglineComponent />
    </div>
    <div className="bg"><br />
            <div  className="card mx-auto mt-4 rounded-0" style={{width:"430px",height:"530px"}}>
                <div className="card-body mt-4">
                    <div className="flex">
              <div className="float-left mb-4">  <i class="fa fa-user" style={{color:"red",padding:"1px",fontSize:"70px"}}></i>
              <span style={{fontSize:"26px",fontWeight:"bold",fontFamily:"sans-serif",marginLeft:"10px"}}>HELLO!</span></div>
                    <div className="mb-3 d-flex justify-content-center font-weight-normal float-right"> 
                    <span className="logo-title">LOGIN</span></div>
                </div>
                    <input type="email" id="inputEmail"
                    className="form-control" style={{height:"46px"}} placeholder="Email address" required />
                    <br />
                    <input type="password" id="inputPassword"  pattern=".{8,}"
                                       title="please enter 8 or more digits"
                     className="form-control" style={{height:"46px"}} placeholder="Password" required /> <br />

                  <Link to="/" style={{textDecoration:"none"}}>
                    <button class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> LogIn</button></Link>
                    <div className="text-danger">Forgot password?</div>
                    <br /><br />
                    
                    <div className="mb-2 mt-3 float-right text-body">Don't have account?</div>
                   <Link to="/signup" style={{textDecoration:"none"}}>
                 <button class="btn btn-primary  btn-block" type="button"><i class="fas fa-user-plus"></i> SignUp</button>
                 </Link>
                      
                

            </div></div>
    </div>
    <div className="footer">
        <FooterComponent />
    </div>
</>
);
}
export default Login;
