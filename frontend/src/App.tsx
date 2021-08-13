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
import About from './Pages/About';

loadTheme(appTheme);

function App() {
  return (
    <div className="App">
       <Router>
       <AppBar />
          <Switch>
            <Route path="/login">
              <Home />
            </Route>
            <Route path="/signup">
              <About />
            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
