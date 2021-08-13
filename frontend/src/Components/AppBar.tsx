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
            <img  src={logo} alt="Crowdx" />
            <div className="button-group-wrapper">
                <SearchBox placeholder="Search a Creator" onSearch={newValue => console.log('value is ' + newValue)} />
                <Link to="/login"><DefaultButton text="Login" /></Link>
                <Link to="/signup"><PrimaryButton text="Get Started"/></Link>
            </div>
       </header>
    );
}

export default AppBar
