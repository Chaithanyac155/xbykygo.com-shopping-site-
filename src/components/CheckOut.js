import React from 'react'
import { Link } from 'react-router-dom'
import FooterComponent from './FooterComponent'
import TaglineComponent from './TaglineComponent'
const CheckOut = () => {
    return (
      <>
        <div className="tagline">
            <TaglineComponent />
        </div>
        <div className="text-center mb-5">
         <div className="mt-5"> 
        <div>
            <h3>Payment Successful
            <span className="ml-3"><img alt="logo" style={{width:"47px",height:"42px"}} src="data:image/png;base64,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"/></span>
           </h3> </div>
         <img height="350px"  width="450px" alt="logo"
         src="https://i.pinimg.com/originals/51/ce/e6/51cee67564790d275cac21c4b754d8bb.gif" />
          </div>
            
            <h3 className="text-success font-weight-bold">ORDER PLACED SUCCESSFULLY</h3>
            <Link to='/'>
                <button className="btn btn-primary mt-3 ">SHOP AGAIN</button>
            </Link>
        </div>
 
        <div className="footer">
            <FooterComponent />
        </div>
        </>
 
    )
}
 
export default CheckOut;
