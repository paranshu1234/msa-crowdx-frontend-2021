import React from 'react'
import { TextField } from '@fluentui/react/lib/TextField';
import { Link } from 'react-router-dom';
import "./Login.css"
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/components/Button';
import { Separator } from '@fluentui/react/lib/Separator';
import { DefaultEffects } from '@fluentui/react';

const Login: React.FC = () => {
    return (
        <div className="Login-page-wrapper">
             <h1 className="login-header">Login</h1>
            <div className="login-wrapper"  style={{ boxShadow: DefaultEffects.elevation4 }}>
               
                <TextField label="Email" placeholder="Enter your email" />
                <TextField
                label="Password"
                type="password"
                canRevealPassword
                revealPasswordAriaLabel="Show password"
                placeholder="Enter your password"
                />
                <div className="link-wrapper">
                    <Link className="forgot-password" to="/"><p>Forgot Password?</p></Link> 
               </div>
                
            <div className="button-wrapper">
                 <PrimaryButton className="button-custom" text="Login"/>
            </div>
            
            <div className="seperator-wrapper">
                <Separator><p>or</p></Separator>
            </div>
           
           <div className="Oauth-wrapper">
                <Link to="/"><DefaultButton className="button-custom" text="Continue with github"/></Link>
                <Link to="/"><DefaultButton className="button-custom" text="Continue with google"/></Link>
                <Link to="/"><DefaultButton className="button-custom" text="Continue with facebook"/></Link>
           </div>

           <div className="seperator-wrapper">
                <Separator></Separator>
            </div>

            <div className="login-footer-wrapper">  
                 <span>New to CrowdX?</span> 
                <Link className="signup-link" to="/"><p>Sign up</p></Link> 
             </div>

            </div>
        </div>
    )
}

export default Login
