import ReactDOM from 'react-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Hello from './components/AppBar.jsx';

const App = () => (
  <MuiThemeProvider>
    <Hello />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
