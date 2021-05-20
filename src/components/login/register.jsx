import React from "react";
import GoogleLogin from 'react-google-login';
// import {Logo} from '../../../../login-page/logo.svg'

export class Register extends React.Component{
    constructor(props){
        super(props);
    }

    responsegoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }

    render(){
        return (
        <div className="base-container" ref={this.props.containerRef}>
            
            <div className="content">
            <div className="google-btn">
                {/* <button> */}
               
                <GoogleLogin 
                clientId="68630953388-lhcst4kqutk3tcnn3maold7khgsa9bkl.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={this.responsegoogle}
                onFailure={this.responsegoogle}
                cookiePolicy={'single_host_origin'}></GoogleLogin>
                
                {/* </button> */}
                </div>
            
            <div className="text-content">or</div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="text" name = "email" placeholder = "Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="password" name = "password" placeholder = "Password"/>
                    </div>
                    
                </div>
                <div className="footer">
                <button className="btn"><b>Create Account</b></button>
            </div>
            </div>
            <a href="#">Sign up with SAML SSO</a>
            <p>Already have an account? Click Login</p>
        </div>
        )
    }
}