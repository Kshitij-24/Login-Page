import React from "react";
import GoogleLogin from 'react-google-login';

export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    responsegoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }

    render(){
        return(

        <div className="base-container" ref={this.props.containerRef}>
              
            
            <div className="content">
            <div className="google-btn">
                {/* <button> */}
               
                <GoogleLogin 
                clientId="68630953388-lhcst4kqutk3tcnn3maold7khgsa9bkl.apps.googleusercontent.com"
                buttonText="Log in with Google"
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
                <button className="btn"><b>Log in</b></button>
            </div>
            </div>
            <a href="#">Log in with SAML SSO</a>
            {/* <p>Forgot Password?</p> */}
            <p>No account? Click Register</p>
        </div>
        )
    }
}