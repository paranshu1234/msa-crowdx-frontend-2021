import React from 'react'
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import logo from '../logo.svg';
import "./AppBar.css"
import { DefaultButton, PrimaryButton } from '@fluentui/react';

const AppBar: React.FC = () => {
    return (
       <header className="App-header">
            <img  src={logo} alt="Crowdx" />
            <div className="button-group-wrapper">
                <SearchBox placeholder="Search a Creator" onSearch={newValue => console.log('value is ' + newValue)} />
                <DefaultButton text="Login" />
                <PrimaryButton text="Get Started"/>
            </div>
       </header>
    );
}

export default AppBar
