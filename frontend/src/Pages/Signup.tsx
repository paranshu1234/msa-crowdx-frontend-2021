import React from 'react'
import { TextField } from '@fluentui/react/lib/TextField';
import { Link } from 'react-router-dom';
import "./Login.css"
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/components/Button';
import { Separator } from '@fluentui/react/lib/Separator';
import { DefaultEffects, IIconProps } from '@fluentui/react';
import "./Signup.css";

const githubIcon: IIconProps = { iconName: "github"}
const googleIcon: IIconProps = {iconName: "google"}
const facebookIcon: IIconProps = {iconName: "facebook"}



const Signup: React.FC = () => {
    return (
        <div className="Login-page-wrapper">
            <h1 className="login-header">Sign up</h1>
            <div className="login-wrapper"  style={{ boxShadow: DefaultEffects.elevation4 }}>

            <div className="Oauth-wrapper">
                <Link to="/"><DefaultButton className="button-custom" iconProps={githubIcon} text="Sign up with github"/></Link>
                <Link to="/"><DefaultButton className="button-custom" iconProps={googleIcon} text="Sign up with google"/></Link>
                <Link to="/"><DefaultButton className="button-custom" iconProps={facebookIcon} text="Sign up with facebook"/></Link>
           </div>

           <div className="seperator-wrapper">
                <Separator><p>or</p></Separator>
            </div>
               
                <TextField label="User name" placeholder="Enter a user name" className="fields" />
                <TextField label="Email" placeholder="Enter a valid email" className="fields" />
                <TextField
                label="Password"
                type="password"
                placeholder="Enter a password"
                className="fields"
                />
                 <TextField
                label="Confirm password"
                type="password"
                placeholder="Confirm password"
                className="fields"
                />
                
            <div className="button-wrapper">
                 <PrimaryButton className="button-custom" text="Sign up"/>
            </div>

           <div className="seperator-wrapper">
                <Separator></Separator>
            </div>

            <div className="login-footer-wrapper">  
                 <span>Already have an account?</span> 
                <Link className="signup-link" to="/login"><p>Log in</p></Link> 
             </div>

            </div>
        </div>
    )
}

export default Signup
