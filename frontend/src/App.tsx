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
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { registerIcons } from '@fluentui/react/lib/Styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotFound from './Pages/NotFound';

library.add(fab);

registerIcons({
  icons: {
    twitter: <FontAwesomeIcon icon={['fab', 'twitter']} />,
    google: <FontAwesomeIcon icon={['fab', 'google']} />,
    github: <FontAwesomeIcon icon={['fab', 'github']} />,
    facebook: <FontAwesomeIcon icon={['fab', 'facebook']} />,
    instagram: <FontAwesomeIcon icon={['fab', 'instagram']} />,
    youtube: <FontAwesomeIcon icon={['fab', 'youtube']} />
  }
});


loadTheme(appTheme);

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
       <Router>
          <AppBar /> 
          <Switch>
            <Route path="/creator" exact>
              <Creator />
            </Route>
            <Route path="/login" exact >
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route>
              <NotFound />
          </Route>
          </Switch>
       </Router>
       </ApolloProvider>
    </div>
  );
}

export default App;
