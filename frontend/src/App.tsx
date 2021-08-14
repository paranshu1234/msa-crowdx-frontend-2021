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
import Creator from './Pages/Creator';
import { ApolloProvider } from '@apollo/client';
import client from './Apollo/apollo-client';
loadTheme(appTheme);

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
       <Router>
       <AppBar />
          <Switch>
            <Route path="/creator">
              <Creator />
            </Route>
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
       </ApolloProvider>
    </div>
  );
}

export default App;
