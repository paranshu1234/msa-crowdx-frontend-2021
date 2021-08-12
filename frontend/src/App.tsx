import React from 'react';
import { loadTheme } from '@fluentui/react';
import { appTheme } from './ThemeDefinitions';
import AppBar from './Components/AppBar';

loadTheme(appTheme);

function App() {
  return (
    <div className="App">
      <AppBar />
    </div>
  );
}

export default App;
