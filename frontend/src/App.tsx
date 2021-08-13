import React from 'react';
import { loadTheme } from '@fluentui/react';
import { appTheme } from './ThemeDefinitions';
import AppBar from './Components/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

loadTheme(appTheme);

function App() {
  return (
    <div className="App">
       <Router>
       <AppBar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          <Route path="/">
              <Home />
          </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
