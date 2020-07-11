import React from 'react'
import { Link } from 'react-router-dom';
import TaglineComponent from './TaglineComponent';
import FooterComponent from './FooterComponent';


const ShippingAddress = () => {

    return (
        <>
        <div className="tagline">
            <TaglineComponent />
        </div>
            <div className="container">
                
                <div className="mt-4 mb-5 col-sm-12">
                    <h5 className="d-block p-2 bg-dark text-white text-center rounded" 
                            style={{fontFamily:"sans-serif"}}>Shipping Address</h5>
                    
                    <form>
                        <div className="row">
                    <div className="col-sm-6">  
                        <div className="form-group">
                            <strong> <label htmlFor="email" className="float-left">Email Address</label></strong>
                            <input type="email" className="form-control rounded-0" placeholder="abc@gmail.com"
                             id="email" name="email"  required/>
                            
                        </div>
                        <div className=" form-group">
                            <strong><label htmlFor="firstname">First Name</label></strong>
                            <input type="text" className="form-control rounded-0" id="firstname" name="firstname" required/>
                        </div>
                        <div class="form-group">
                            <strong> <label htmlFor="lastname">Last Name</label></strong>
                            <input type="text" className="form-control rounded-0" id="lastname" required/>
                        </div>
                        <div className="form-group">
                            <strong> <label htmlFor="streetaddress">Street Address</label></strong>
                            <input type="text" className="form-control rounded-0" id="streetaddress" name="streetaddress" required/>
                        </div>
                        <div className="form-group">
                            <strong> <label htmlFor="city">City/Town</label></strong>
                            <input type="text" className="form-control rounded-0" id="city" name="city" required/>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="form-group">
                            <strong> <label htmlFor="state">State</label></strong>
                            <input type="text" className="form-control rounded-0" id="state" name="state" required/>
                        </div>
                        <div className="form-group">
                            <strong> <label htmlFor="zip">Pincode</label></strong>
                            <input type="tel" className="form-control rounded-0" maxLength="6" id="pincode" name="pincode" required/>
                        </div>
                        <div className="form-group">
                            <strong> <label htmlFor="country">Country</label></strong>
                            <input type="text" className="form-control rounded-0" id="country" name="country" required/>
                        </div>
                        <div className="form-group">
                            <strong><label htmlFor="phoneno">Mobile Number</label></strong>
                            <input type="tel" maxLength="10" placeholder="enter 10 digit mobile number"
                            className="form-control rounded-0" id="phoneno" name="phoneno" required/>
                        </div>
                    
                     <Link to="/payment" style={{textDecoration:"none"}}>
                        <button type="submit" className="btn btn-primary rounded-0 mt-3 float-right" style={{fontFamily:"Calibri"}}>GO TO PAYMENT</button>
                      </Link></div></div>
                        </form>

                </div>
     
            </div>
            <div className="footer">
            <FooterComponent />
        </div>
        </>
    )
}

export default ShippingAddress;



