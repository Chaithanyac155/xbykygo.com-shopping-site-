import React from 'react'
import {Link} from 'react-router-dom';
import TaglineComponent from './TaglineComponent';
import FooterComponent from './FooterComponent';

const Payment = () => {
    return (
        <>
      <div className="tagline">
            <TaglineComponent />
        </div>
     
    <div className="row  mt-4  mb-4 justify-content-center">
            <div className="col-md-6">
                <div className="card" style={{border:"4px solid grey"}}>
                    <div className="card-header" style={{backgroundColor:"#e6e6e6"}}>
                        <div className="row">
                            <div className="col-md-8"> <span style={{fontFamily:"sans-serif"}}>CREDIT / DEBIT CARD PAYMENT</span> </div>
                            <div className="col-md-4 text-right" style={{marginTop:"-5px"}}> 
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg4MYyLYM7pbec94UuMZKSUY9GxNrRL4_HlQ&usqp=CAU"
                     style={{width:"40px",height:"22px"}} alt="logo"/>
                            <img src="https://img.icons8.com/color/36/000000/visa.png" alt="logo"/> 
                            <img src="https://img.icons8.com/color/36/000000/mastercard.png" alt="logo" /> 
                            <img src="https://img.icons8.com/color/36/000000/amex.png" alt="logo" /> 
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{height:"360px"}}>
                        <form>
                        <label>CARD NUMBER</label>

                        <div className="form-group input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text rounded-0"> <i className="far fa-credit-card" style={{color:"black",fontSize:"20px"}}></i> </span>
                                </div>
                                                  
                        <input id="cardnumber" type="tel"
                        className="input-lg form-control rounded-0" title="format be like 1234-5678-0912-8748"
                        pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                         autoComplete="off" placeholder="0000-0000-0000-0000"  maxLength="19" required /> 
                            </div>

                        <div className="row">
                            <div className="col-md-6">
                            <label>CARD EXPIRY</label> 
                                <div className="form-group input-group mb-4"> 
                                <div className="input-group-prepend">
                                    <span className="input-group-text rounded-0"> <i className="far fa-calendar-alt" style={{color:"black",fontSize:"20px"}}></i> </span>
                                </div>
                               
                                <input id="cc-exp" type="tel" className="input-lg form-control rounded-0" maxLength="7"
                                pattern="[0-9]{2}/[0-9]{4}" title="format be like 01/2019"
                                 autoComplete="off" placeholder="**/****" required /> </div>
                            </div>
                            <div className="col-md-6">
                            <label>CARD CVV</label> 
                                <div className="form-group input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text rounded-0"> <i className="fas fa-lock" style={{color:"black",fontSize:"20px"}}></i> </span>
                                </div>
                                    <input id="cc-cvc" type="password" maxLength="3"
                                    pattern="[0-9]{3}" title="format be like 234"
                                    className="input-lg form-control rounded-0" autoComplete="off" placeholder="123" required /> </div>
                            </div>
                        </div>
                      
                        <label>CARD HOLDER NAME</label> 
                        <div className="form-group input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text rounded-0"> <i className="fa fa-user" style={{color:"black",fontSize:"23px"}}></i> </span>
                                </div>
                                <input type="text" pattern="[a-z|A-Z| ]+" title="please enter name in alphabets"
                                className="input-lg form-control rounded-0" placeholder="card holder name"
                         autoComplete="off" required/> 
                            </div>
                        
                         <Link to="/checkout" style={{textDecoration:"none"}}>  <button type="submit"
                                     className="btn btn-success btn-block py-2"
                                     style={{fontSize:"15px",fontFamily:"sans-serif"}}>MAKE &nbsp;PAYMENT</button></Link>
                            
                   </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <FooterComponent />
        </div>

        </>
    )
}

export default Payment;

 
