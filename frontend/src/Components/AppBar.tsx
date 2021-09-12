import React from 'react'
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import logo from '../logo.svg';
import "./AppBar.css"
import { DefaultButton, PrimaryButton } from '@fluentui/react';
import {
    Link
  } from "react-router-dom";
  

const AppBar: React.FC = () => {
    return (
       <header className="App-header">
           <div className="left-content">
                <Link to="/" className="logo-link"><img  src={logo} alt="Crowdx" /></Link>
                <div className="navlink-wrapper">
                    <p>Product</p>
                    <p>For creators</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                    <p>Starter kits</p>
                </div>
           </div>
         
            <div className="button-group-wrapper">
                <SearchBox placeholder="Search a Creator" onSearch={newValue => console.log('value is ' + newValue)} className="item" />
                <Link to="/login" className="item"><DefaultButton text="Login" /></Link>
                <Link to="/signup" className="item"><PrimaryButton text="Get Started"/></Link>
            </div>
       </header>
    );
}

export default AppBar
