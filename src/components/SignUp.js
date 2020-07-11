import React , {Component} from 'react';
import FooterComponent from './FooterComponent';
import { Link } from 'react-router-dom';
import TaglineComponent from './TaglineComponent';

class SignUp extends Component
{
      
    constructor()
    {
        super()
        this.state={
            
            disabled:true
            // message:""
            
        }
    }
  
    handlePassword(e)
    {
       if(e.target.value.length>=8)
       {
           this.setState({
               disabled:false
           });
       }
        
    }

    changeMessage(e)
    {
    
          alert("Registered Successfully.");
       
    }
    
    
    render()
    {
    return (
        <>
            <div className="tagline">
        <TaglineComponent />
    </div>
 <div className="bg"><br/>
                <div class="card mx-auto rounded-0" style={{height:"570px",width:"500px"}}>
                    <div class="card-body mx-auto" style={{width:"400px"}}>
    <h4 class="card-title  text-center font-weight-bold mb-2"><span className="logo-title">SIGNUP</span></h4>
                        <form>
                       <div className="text-center"> 
                        <i class="fa fa-user" style={{color:"red",padding:"1px",fontSize:"70px"}}></i>
                         <h6>Upload DP</h6>
                       </div>
                        <input className="ml-5 mb-3"
                                required 
                                type="file" 
                                style={{height:"40px"}} />

                            <div class="form-group input-group mb-4">
                                <div class="input-group-prepend" style={{color:"green"}}>
                                    <span class="input-group-text"> <i class="fa fa-user" style={{color:"blue",padding:"1px",fontSize:"23px"}}></i> </span>
                                </div>
                                <input  name="" 
                                        class="form-control"
                                        maxLength="35"
                                        pattern="[a-z|A-Z| ]+" 
                                        title="please enter name in alphabets"
                                        placeholder="enter your name" 
                                        type="text" 
                                        style={{height:"40px"}} required></input>
                            </div>
                            <div class="form-group input-group mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"> <i class="fa fa-envelope" style={{color:"orange",padding:"0px",fontSize:"20px"}}></i> </span>
                                </div>
                                <input name="" 
                                       class="form-control" 
                                       placeholder="abc@gmail.com" 
                                       required 
                                       type="email" 
                                       style={{height:"40px"}}></input>
                            </div>
                            <div class="form-group input-group mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"> <i class="fa fa-phone" style={{color:"#006600",padding:"1px",fontSize:"23px"}}></i> </span>

                                </div>

                                <input   name="" 
                                         class="form-control"
                                         pattern="[0-9]{10}"  
                                         maxLength="10"
                                         title="please enter the 10 digit mobile number"
                                         placeholder="10 digit mobile number" 
                                         required 
                                         type="tel" 
                                         style={{height:"40px"}}></input>
                            </div>

                            <div class="form-group input-group mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"> <i class="fa fa-lock" style={{color:"black",padding:"1px",fontSize:"23px"}}></i> </span>
                                </div>
                                <input class="form-control" 
                                       onChange={(e)=>this.handlePassword(e)}
                                       pattern=".{8,}"
                                       title="please enter 8 or more digits"
                                       placeholder="password must be atleast 8 digits" 
                                       required 
                                       type="password" 
                                       style={{height:"40px"}}></input>
                            </div>
                           
                            
                            <div className="mt-4">
                   <Link to="/login"> <button   disabled={this.state.disabled}
                                 onClick={()=>this.changeMessage()}
                                 className="btn btn-primary">SignUP</button> </Link>
                            
                            <button type="reset" className="btn btn-danger float-right">Reset</button>
                            </div>
                            
                        
                         </form>
                    </div>
                       
                </div>
        </div>
                                                                
        <div className="footer">
        <FooterComponent />
    </div>
        </>
    );
    }
}
export default SignUp;

