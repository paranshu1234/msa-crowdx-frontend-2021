import React from 'react'
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import logo from '../logo.svg';
import "./AppBar.css"
import { DefaultButton } from '@fluentui/react';

function AppBar() {
    return (
       <header className="App-header">
            <img  src={logo} alt="Crowdx" />
            <SearchBox placeholder="Search a Creator" onSearch={newValue => console.log('value is ' + newValue)} />
            <DefaultButton text="Login" />
       </header>
    )
}

export default AppBar
