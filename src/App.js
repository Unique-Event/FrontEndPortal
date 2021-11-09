import React from 'react';
import './App.css';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/home';
import Registration from './components/pages/registration';
import Navbar from './components/Navbar';


const useStyles = makeStyles({
  root: {},
});


function App() {

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#26319a',
      },
      secondary: {
        main: '#e64a57',
      },
      
    },
  });
  
  const classes = useStyles();
  return (
    <ThemeProvider theme = { theme }>
      <Router>
        <Navbar />
        <Route path='/home' exact component={Home} />
        <Switch>
          {/* <Route path='/users' component={User} />  */}
          <Route path='/registration' component={Registration} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;