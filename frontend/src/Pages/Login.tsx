import React from 'react'
import { TextField } from '@fluentui/react/lib/TextField';
import { Link } from 'react-router-dom';
import "./Login.css"
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/components/Button';
import { Separator } from '@fluentui/react/lib/Separator';
import { DefaultEffects, IIconProps } from '@fluentui/react';
import "./Login.css";

const githubIcon: IIconProps = { iconName: "github"}
const googleIcon: IIconProps = {iconName: "google"}
const facebookIcon: IIconProps = {iconName: "facebook"}

const Login: React.FC = () => {
    return (
        <div className="Login-page-wrapper">
             <h1 className="login-header">Login</h1>
            <div className="login-wrapper"  style={{ boxShadow: DefaultEffects.elevation4 }}>
               
                <TextField label="Email" placeholder="Enter your email" className="fields" />
                <TextField
                label="Password"
                type="password"
                canRevealPassword
                revealPasswordAriaLabel="Show password"
                placeholder="Enter your password"
                className="fields"
                />
                <div className="link-wrapper">
                    <Link className="forgot-password" to="/"><p>Forgot Password?</p></Link> 
               </div>
                
            <div className="button-wrapper">
                 <Link className="login-btn-link" to="/dashboard"><PrimaryButton className="button-custom" text="Login"/></Link>
                 
            </div>
            
            <div className="seperator-wrapper">
                <Separator><p>or</p></Separator>
            </div>
           
           <div className="Oauth-wrapper">
                <Link to="/"><DefaultButton className="button-custom" iconProps={githubIcon} text="Continue with github"/></Link>
                <Link to="/"><DefaultButton className="button-custom" iconProps={googleIcon} text="Continue with google"/></Link>
                <Link to="/"><DefaultButton className="button-custom" iconProps={facebookIcon} text="Continue with facebook"/></Link>
           </div>

           <div className="seperator-wrapper">
                <Separator></Separator>
            </div>

            <div className="login-footer-wrapper">  
                 <span>New to CrowdX?</span> 
                <Link className="signup-link" to="/signup"><p>Sign up</p></Link> 
             </div>

            </div>
        </div>
    )
}

export default Login
